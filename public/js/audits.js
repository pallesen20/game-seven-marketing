/* ============================================================
   Game Seven Marketing - audits.js
   Audits page JS: testi marquee, PSI analyzer.
============================================================ */

/* ---- TESTI MARQUEE SETUP ---- */
(function () {
  var track = document.getElementById('testi-track');
  if (!track) return;
  track.innerHTML += track.innerHTML;
  var half = track.scrollWidth / 2;
  track.style.setProperty('--testi-distance', '-' + half + 'px');
}());

function escHtml(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

var PSI_KEY = 'AIzaSyBAkN1zcgA37PrqQrps1BQlJWX8oKL4rBE';

function runAnalysis() {
  var input = document.getElementById('analyzer-url');
  var btn   = document.getElementById('analyzer-btn');
  var box   = document.getElementById('analyzer-results');
  if (!input || !btn || !box) return;
  var url   = input.value.trim();

  if (!url) { input.focus(); return; }
  if (!/^https?:\/\/.+\..+/.test(url)) {
    box.innerHTML = '<div class="analyzer-error">Please enter a valid URL starting with <strong>https://</strong></div>';
    box.classList.add('visible');
    return;
  }

  btn.disabled = true;
  btn.textContent = 'Analyzing\u2026';
  box.classList.add('visible');
  box.innerHTML = '<div class="analyzer-loading">Analyzing your page<span class="analyzer-loading-dots"><span></span><span></span><span></span></span></div>';

  var apiUrl = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=' +
    encodeURIComponent(url) + '&strategy=mobile&category=seo&category=accessibility&category=performance&key=' + PSI_KEY;

  fetch(apiUrl)
    .then(function (r) { return r.json(); })
    .then(function (data) {
      btn.disabled = false;
      btn.textContent = 'Analyze \u2192';
      if (data.error) {
        console.warn('PSI API error:', data.error);
        var errMsg  = data.error.message || 'Unknown error';
        var errCode = data.error.code || '?';
        box.innerHTML = '<div class="analyzer-error">Google API error ' + errCode + ': ' + escHtml(errMsg) + '. Check the API key is valid and the PageSpeed Insights API is enabled in Google Cloud Console. Or <a href="#pricing" style="color:var(--brand)">browse our expert audits</a>.</div>';
        return;
      }
      var lhr = data.lighthouseResult || {};
      console.log('PSI raw response:', JSON.stringify({
        runtimeError: lhr.runtimeError,
        seoScore: lhr.categories && lhr.categories.seo && lhr.categories.seo.score,
        perfScore: lhr.categories && lhr.categories.performance && lhr.categories.performance.score,
        accScore: lhr.categories && lhr.categories.accessibility && lhr.categories.accessibility.score
      }));
      renderResults(data, url);
    })
    .catch(function () {
      btn.disabled = false;
      btn.textContent = 'Analyze \u2192';
      box.innerHTML = '<div class="analyzer-error">Could not connect - check your internet connection and try again. Or <a href="#pricing" style="color:var(--brand)">browse our expert audits</a>.</div>';
    });
}

function renderResults(data, url) {
  var box  = document.getElementById('analyzer-results');
  if (!box) return;
  var lhr  = data.lighthouseResult || {};
  var cats = lhr.categories || {};
  var runtimeErr = lhr.runtimeError;
  if (runtimeErr && runtimeErr.code && runtimeErr.code !== 'NO_ERROR') {
    console.warn('PSI runtime error:', runtimeErr);
    box.innerHTML = '<div class="analyzer-error">Google\'s crawler couldn\'t load this page (' + escHtml(runtimeErr.code) + '). The site may block automated tools, require login, or be unreachable. Try your homepage URL, or <a href="#pricing" style="color:var(--brand)">browse our expert audits</a> instead.</div>';
    return;
  }

  var rawSeo  = cats.seo  && cats.seo.score  !== null && cats.seo.score  !== undefined ? cats.seo.score  : null;
  var rawPerf = cats.performance && cats.performance.score !== null && cats.performance.score !== undefined ? cats.performance.score : null;

  if (rawSeo === null && rawPerf === null) {
    box.innerHTML = '<div class="analyzer-error">Google returned no scores for this page. Check the browser console (F12) for the raw PSI response, then try a different URL. Or <a href="#pricing" style="color:var(--brand)">browse our expert audits</a> instead.</div>';
    return;
  }

  var seo   = rawSeo  !== null ? Math.round(rawSeo  * 100) : null;
  var perf  = rawPerf !== null ? Math.round(rawPerf * 100) : null;
  var valid = [seo, perf].filter(function (v) { return v !== null; });
  var score = Math.round(valid.reduce(function (a, b) { return a + b; }, 0) / valid.length);

  var color = score >= 90 ? '#00e87a' : score >= 50 ? '#f5a623' : '#ff4d4d';

  var C      = 2 * Math.PI * 30;
  var filled = Math.max(score, 2);
  var offset = C - (filled / 100) * C;

  var auditMap = {
    'meta-description':          { t: 'Missing or weak meta description - hurts click-through from Google', s: 'warn' },
    'document-title':            { t: 'Page title missing or not optimised for search',                      s: 'warn' },
    'image-alt':                 { t: 'Images missing alt text - affects rankings and AI search citations',  s: 'fail' },
    'structured-data':           { t: 'No structured data detected - rich results and AI citations blocked', s: 'fail' },
    'is-crawlable':              { t: 'Page may not be fully crawlable by Google or AI bots',                s: 'fail' },
    'canonical':                 { t: 'Canonical tag missing or misconfigured - potential duplicate content', s: 'warn' },
    'robots-txt':                { t: 'Issues found in robots.txt - may block crawlers unintentionally',     s: 'fail' },
    'largest-contentful-paint':  { t: 'Slow Largest Contentful Paint - a direct Google ranking signal',     s: 'fail' },
    'cumulative-layout-shift':   { t: 'Layout shifts detected - hurts Core Web Vitals score',               s: 'warn' },
    'total-blocking-time':       { t: 'High blocking time - page feels unresponsive on mobile',             s: 'warn' },
    'render-blocking-resources': { t: 'Render-blocking resources delay page load',                          s: 'warn' },
    'unused-css-rules':          { t: 'Unused CSS detected - adds unnecessary page weight',                 s: 'warn' },
    'uses-optimized-images':     { t: 'Images not optimised - slowing page load and hurting rankings',      s: 'warn' },
    'uses-text-compression':     { t: 'Text compression not enabled - larger file sizes than needed',       s: 'warn' }
  };

  var lhrAudits = lhr.audits || {};
  var issues = [];
  Object.keys(auditMap).forEach(function (k) {
    var a = lhrAudits[k];
    if (a && a.score !== null && a.score !== undefined && a.score < 0.9) {
      issues.push({ score: a.score, text: auditMap[k].t, sev: auditMap[k].s });
    }
  });
  issues.sort(function (a, b) { return a.score - b.score; });
  var top3 = issues.slice(0, 3);
  if (!top3.length) {
    top3 = [{ text: 'No major automated issues detected - a manual expert review uncovers what automated tools miss', sev: 'warn' }];
  }

  var warnPath = '<path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>';
  var failPath = '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>';

  var issuesHtml = top3.map(function (i) {
    var col = i.sev === 'fail' ? '#ff4d4d' : '#f5a623';
    return '<div class="analyzer-issue">' +
      '<svg style="width:17px;height:17px;flex-shrink:0;margin-top:1px;color:' + col + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
      (i.sev === 'fail' ? failPath : warnPath) + '</svg>' + escHtml(i.text) + '</div>';
  }).join('');

  var scoreRow = '';
  if (seo !== null) {
    var seoCol = seo >= 90 ? '#00e87a' : seo >= 50 ? '#f5a623' : '#ff4d4d';
    scoreRow += '<div class="analyzer-sub-score"><span style="font-family:\'Syne\',sans-serif;font-size:1.4rem;font-weight:600;color:' + seoCol + '">' + seo + '</span><span style="font-size:0.75rem;color:#7a8394;margin-left:4px">SEO</span></div>';
  }
  if (perf !== null) {
    var perfCol = perf >= 90 ? '#00e87a' : perf >= 50 ? '#f5a623' : '#ff4d4d';
    scoreRow += '<div class="analyzer-sub-score"><span style="font-family:\'Syne\',sans-serif;font-size:1.4rem;font-weight:600;color:' + perfCol + '">' + perf + '</span><span style="font-size:0.75rem;color:#7a8394;margin-left:4px">Performance</span></div>';
  }

  var display = url.replace(/^https?:\/\//, '').replace(/\/$/, '');

  box.innerHTML =
    '<div class="analyzer-result-card">' +
      '<div class="analyzer-score-row">' +
        '<div class="score-ring-wrap">' +
          '<svg width="72" height="72" viewBox="0 0 72 72" style="transform:rotate(-90deg)">' +
            '<circle fill="none" stroke="rgba(255,255,255,0.07)" stroke-width="6" cx="36" cy="36" r="30"/>' +
            '<circle fill="none" stroke="' + color + '" stroke-width="6" stroke-linecap="butt" cx="36" cy="36" r="30" stroke-dasharray="' + C.toFixed(1) + '" stroke-dashoffset="' + offset.toFixed(1) + '"/>' +
          '</svg>' +
          '<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-family:\'Syne\',sans-serif;font-weight:600;font-size:1.3rem;color:' + color + '">' + score + '</div>' +
        '</div>' +
        '<div>' +
          '<div class="analyzer-score-label">SEO & Performance score</div>' +
          '<div class="analyzer-score-url">' + escHtml(display) + '</div>' +
          '<div style="display:flex;gap:1rem;margin-top:0.6rem">' + scoreRow + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="analyzer-issues">' + issuesHtml + '</div>' +
      '<div class="analyzer-cta-strip">' +
        '<p>This is a surface-level automated check. A manual expert audit uncovers what tools miss.</p>' +
        '<div class="analyzer-cta-btns">' +
          '<a href="#pricing" class="btn-primary">Get an expert audit \u2192</a>' +
          '<a href="#pricing" class="btn-secondary">Browse all audits</a>' +
        '</div>' +
      '</div>' +
    '</div>';
}
