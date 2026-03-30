/* ============================================================
   Game Seven Marketing - home.js
   Homepage-specific JS: marquee, ROI calculators.
============================================================ */

/* ---- MARQUEE SETUP ---- */
(function () {
  var track = document.querySelector('.marquee-track');
  if (!track) return;
  var original = track.innerHTML;
  track.innerHTML = original + original;
  var halfWidth = track.scrollWidth / 2;
  track.style.setProperty('--marquee-distance', '-' + halfWidth + 'px');
}());

/* ---- CALCULATOR TABS ---- */
function switchCalc(id, btn) {
  document.querySelectorAll('.calc-tab').forEach(function (b) { b.classList.remove('active'); });
  btn.classList.add('active');
  document.querySelectorAll('.calc-panel').forEach(function (p) { p.classList.remove('active'); });
  document.getElementById('calc-' + id).classList.add('active');
}

/* ---- SEO CALCULATOR ---- */
function calcSEO() {
  var current  = parseFloat(document.getElementById('seo-current').value) || 0;
  var target   = parseFloat(document.getElementById('seo-target').value)  || 0;
  var cvr      = parseFloat(document.getElementById('seo-cvr').value)     / 100 || 0;
  var aov      = parseFloat(document.getElementById('seo-aov').value)     || 0;
  var extraSessions = Math.max(0, target - current);
  var extraOrdersMo = extraSessions * cvr;
  var extraRevYr    = extraOrdersMo * aov * 12;
  var savedAdSpend  = extraSessions * 12 * 2.5;
  document.getElementById('seoResult').textContent  = '$' + Math.round(extraRevYr).toLocaleString();
  document.getElementById('seoSub').textContent     = '+' + Math.round(extraSessions).toLocaleString() + ' extra sessions/month at ' + (cvr * 100).toFixed(1) + '% CR';
  document.getElementById('seoOrders').textContent  = '+' + Math.round(extraOrdersMo).toLocaleString();
  document.getElementById('seoCPC').textContent     = '$' + Math.round(savedAdSpend).toLocaleString();
}
['seo-current', 'seo-target', 'seo-cvr', 'seo-aov'].forEach(function (id) {
  var el = document.getElementById(id);
  if (el) el.addEventListener('input', calcSEO);
});
calcSEO();

/* ---- AEO CALCULATOR ---- */
var aeoTarget = 0.06;

function setAEOTarget(val, btn) {
  aeoTarget = val;
  document.querySelectorAll('#calc-aeo .roi-select-group button').forEach(function (b) { b.classList.remove('active'); });
  btn.classList.add('active');
  calcAEO();
}

function calcAEO() {
  var queries    = parseFloat(document.getElementById('aeo-queries').value)      || 0;
  var currentVis = parseFloat(document.getElementById('aeo-current-vis').value)  / 100 || 0;
  var aov        = parseFloat(document.getElementById('aeo-aov').value)           || 0;
  var cvr        = parseFloat(document.getElementById('aeo-cvr').value)           / 100 || 0;
  var ctr        = 0.08;
  var newSessionsMo = Math.max(0, (aeoTarget - currentVis)) * queries * ctr;
  var newOrdersMo   = newSessionsMo * cvr;
  var extraRevYr    = newOrdersMo * aov * 12;
  document.getElementById('aeo-vis-label').textContent = Math.round(currentVis * 100) + '%';
  document.getElementById('aeoResult').textContent     = '$' + Math.round(extraRevYr).toLocaleString();
  document.getElementById('aeoSub').textContent        = 'From ' + Math.round(currentVis * 100) + '% \u2192 ' + Math.round(aeoTarget * 100) + '% AI visibility';
  document.getElementById('aeoSessions').textContent   = '+' + Math.round(newSessionsMo).toLocaleString();
  document.getElementById('aeoOrders').textContent     = '+' + Math.round(newOrdersMo).toLocaleString();
}
['aeo-queries', 'aeo-aov', 'aeo-cvr'].forEach(function (id) {
  var el = document.getElementById(id);
  if (el) el.addEventListener('input', calcAEO);
});
var aeoRangeEl = document.getElementById('aeo-current-vis');
if (aeoRangeEl) aeoRangeEl.addEventListener('input', calcAEO);
calcAEO();

/* ---- CRO CALCULATOR ---- */
var croUplift = 0.15;

function setCROUplift(val, btn) {
  croUplift = val;
  document.querySelectorAll('#calc-cro .roi-select-group button').forEach(function (b) { b.classList.remove('active'); });
  btn.classList.add('active');
  calcCRO();
}

function calcCRO() {
  var aov    = parseFloat(document.getElementById('cro-aov').value)    || 0;
  var orders = parseFloat(document.getElementById('cro-orders').value) || 0;
  var extraOrdersMo = orders * croUplift;
  var extraRevMo    = extraOrdersMo * aov;
  var extraRevYr    = extraRevMo * 12;
  document.getElementById('croResult').textContent      = '$' + Math.round(extraRevYr).toLocaleString();
  document.getElementById('croSub').textContent         = Math.round(croUplift * 100) + '% more orders from same traffic';
  document.getElementById('croExtraOrders').textContent = '+' + Math.round(extraOrdersMo).toLocaleString();
  document.getElementById('croMonthly').textContent     = '+$' + Math.round(extraRevMo).toLocaleString();
}
['cro-aov', 'cro-orders'].forEach(function (id) {
  var el = document.getElementById(id);
  if (el) el.addEventListener('input', calcCRO);
});
calcCRO();
