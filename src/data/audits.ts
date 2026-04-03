export type Audit = {
  slug: string;
  name: string;
  badge: string;
  tagline: string;
  price: number;
  currency: string;
  billing: string;
  delivery: string;
  bullets: string[];
  stripeUrl: string;
  featured?: boolean;
  metaTitle: string;
  description: string;
  heroHeadline: string;
  heroSub: string;
  faq: { q: string; a: string }[];
};

export const audits: Audit[] = [
  {
    slug: 'full-site',
    name: 'Full Site Audit',
    badge: 'Most comprehensive',
    tagline: 'Every SEO dimension of your website - analyzed in one comprehensive expert report.',
    price: 299,
    currency: '€',
    billing: 'One-time · No subscription',
    delivery: '⚡ Delivered within 1 business day',
    bullets: [
      'Full site crawl - all page types',
      'Technical SEO - crawlability, speed, Core Web Vitals',
      'On-page SEO across all key templates',
      'AI search visibility across all platforms',
      'Schema & structured data assessment',
      'Site architecture & internal linking',
      '15+ prioritized recommendations + health score',
    ],
    stripeUrl: 'https://buy.stripe.com/14A6oI7YYbX13qwgh2fnO0b',
    featured: true,
    metaTitle: 'Full Site Audit for SEO & AEO | AI Search Audit for just €299',
    description: 'Comprehensive expert SEO audit covering technical, content, AI search, schema, and site architecture. 15+ prioritized fixes delivered within 1 business day.',
    heroHeadline: 'Full Site Audit for SEO & AEO',
    heroSub: 'The most thorough SEO audit your website has ever had. We crawl every corner of your site - technical SEO, content quality, AI search visibility, schema, and architecture - and deliver a prioritized action plan that maps every fix to revenue impact.',
    faq: [
      {
        q: 'What pages does the Full Site Audit cover?',
        a: 'We crawl and analyze all key page types on your site: homepage, category/collection pages, product pages, blog posts, and informational pages. We look for patterns and systemic issues across the whole site, not just individual pages.',
      },
      {
        q: 'How many recommendations will I receive?',
        a: 'At minimum 15 prioritized recommendations, though most sites yield 20-30 findings. Every recommendation is ranked by estimated revenue impact so you know exactly where to focus first.',
      },
      {
        q: 'Does this audit include AI search visibility?',
        a: 'Yes. The Full Site Audit includes a complete AI search assessment - we check your visibility in ChatGPT, Perplexity, and Google AI Overviews, assess your AI crawler access (GPTBot, ClaudeBot, PerplexityBot), and identify content citability gaps.',
      },
      {
        q: 'Is this audit suitable for non-Shopify sites?',
        a: 'Yes. While we have deep Shopify expertise, the Full Site Audit applies to any website - WooCommerce, BigCommerce, custom platforms, or static sites. The audit methodology is platform-agnostic; the recommendations will be tailored to your specific tech stack.',
      },
      {
        q: 'What do I need to provide to get started?',
        a: 'Just your website URL, submitted after checkout. We do not require CMS access or Google Analytics. If you want to share Search Console or Analytics data for deeper keyword and traffic context, you can note that in the post-purchase form - but it is entirely optional.',
      },
    ],
  },
  {
    slug: 'single-page',
    name: 'Single Page Audit',
    badge: 'Single Page Audit',
    tagline: 'Pick any page. Get a complete expert breakdown of exactly what\'s holding it back.',
    price: 49,
    currency: '€',
    billing: 'One-time · No subscription',
    delivery: '⚡ Delivered within 1 business day',
    bullets: [
      'Title, meta description & heading structure',
      'Content quality & keyword alignment',
      'Core Web Vitals & mobile performance',
      'Schema & structured data on the page',
      'AI search visibility for the URL',
      'Top fixes ranked by impact',
    ],
    stripeUrl: 'https://buy.stripe.com/14A00k5QQbX16CIfcYfnO0d',
    metaTitle: 'Single Page SEO Audit €49 | Game Seven Marketing',
    description: 'Expert SEO analysis of any single URL. Title, content, Core Web Vitals, schema, AI search visibility, and top fixes ranked by impact - delivered in 1 business day.',
    heroHeadline: 'One page. Every SEO issue. Fixed.',
    heroSub: 'Submit any URL - a product page, landing page, or blog post - and receive a complete expert breakdown: on-page SEO, Core Web Vitals, schema, AI visibility, and a ranked list of exactly what to fix first.',
    faq: [
      {
        q: 'Which page should I choose for a Single Page Audit?',
        a: 'Your highest-traffic organic page is usually the best starting point - fixing the most-visited page delivers the fastest revenue impact. Alternatively, choose a page you are actively trying to rank for a competitive keyword, or your main product/collection page where conversions matter most.',
      },
      {
        q: 'Can I submit a product page, category page, or blog post?',
        a: 'Any public URL works. Product pages, collection/category pages, blog articles, landing pages - we analyze whatever URL you submit. The checklist adapts to the page type.',
      },
      {
        q: 'Does this include AI search visibility for the specific URL?',
        a: 'Yes. We check whether the submitted URL\'s content is being surfaced or cited in ChatGPT, Perplexity, and Google AI Overviews for relevant queries. If it is not, we identify the specific citability gaps holding it back.',
      },
      {
        q: 'How is this different from an automated tool like Screaming Frog or Semrush?',
        a: 'Automated tools flag issues mechanically without understanding your business context. A senior consultant looks at your page, understands your target keyword intent, assesses whether your content is actually competitive, and prioritizes fixes by revenue impact - not just technical severity. The difference shows up in what actually moves rankings.',
      },
    ],
  },
  {
    slug: 'content-eeat',
    name: 'Content & E-E-A-T Audit',
    badge: 'Content & E-E-A-T',
    tagline: 'Find out how Google and AI systems judge your content - and what needs to change.',
    price: 99,
    currency: '€',
    billing: 'One-time · No subscription',
    delivery: '⚡ Delivered within 1 business day',
    bullets: [
      'E-E-A-T signal analysis across key pages',
      'Content depth & readability scoring',
      'Thin content detection',
      'AI citation readiness - passage-level scoring',
      'Specific rewrite recommendations',
    ],
    stripeUrl: 'https://buy.stripe.com/6oUfZi2EEe59bX20i4fnO0c',
    metaTitle: 'Content & E-E-A-T SEO Audit €99 | Game Seven Marketing',
    description: 'Expert E-E-A-T and content audit. We assess thin content, AI citation readiness, readability, and authority signals - with specific rewrite recommendations delivered in 1 day.',
    heroHeadline: 'Content & E-E-A-T Site Audit',
    heroSub: 'Is your content actually credible to Google and AI? Google\'s E-E-A-T framework and AI citation systems judge your content by the same standards: experience, expertise, authority, and trustworthiness. This audit shows exactly where your content falls short - and gives you the specific rewrites to fix it.',
    faq: [
      {
        q: 'What is E-E-A-T and why does it matter for my rankings?',
        a: 'E-E-A-T stands for Experience, Expertise, Authoritativeness, and Trustworthiness - the framework Google uses to evaluate content quality. Pages that score poorly on E-E-A-T signals are systematically ranked lower, particularly in competitive or "Your Money or Your Life" categories. For AI search, E-E-A-T is equally critical: AI systems cite content from sources they deem authoritative.',
      },
      {
        q: 'How do you assess E-E-A-T - it\'s not a numerical score?',
        a: 'Correct - Google does not publish an E-E-A-T score. We assess a set of documented signals: author credentials and biography pages, first-person experience markers in content, editorial standards signals, organization schema, about/contact page quality, and external mention patterns. We benchmark your signals against ranking competitors in your category.',
      },
      {
        q: 'What does "AI citation readiness" mean in practice?',
        a: 'AI systems like ChatGPT and Perplexity preferentially cite content that is factual, well-structured, answers specific questions directly, and originates from a credible source. We score your key pages at the passage level against these criteria and flag the specific sections that need to be rewritten to become citable.',
      },
      {
        q: 'How many pages does the Content & E-E-A-T Audit cover?',
        a: 'We assess your key content pages - typically 8-15 URLs depending on your site size. We focus on pages that have the highest ranking potential: important category pages, your highest-traffic blog content, and any pages you have told us you are trying to rank.',
      },
      {
        q: 'Will I get rewrite instructions or will you rewrite the content for me?',
        a: 'The audit delivers specific rewrite instructions and examples for each flagged passage or page section. The actual rewriting is your team\'s responsibility or can be scoped separately as a content engagement. Most clients find the specific guidance is enough to action immediately without needing additional help.',
      },
    ],
  },
  {
    slug: 'schema',
    name: 'Structured Data Audit',
    badge: 'Schema',
    tagline: 'Unlock rich results and AI citations with correctly implemented structured data.',
    price: 99,
    currency: '€',
    billing: 'One-time · No subscription',
    delivery: '⚡ Delivered within 1 business day',
    bullets: [
      'Full JSON-LD audit across all key page types',
      'Product, Review & Organization schema validation',
      'Rich results eligibility check',
      'AI search structured data signals',
      'Corrected code snippets - ready to implement',
    ],
    stripeUrl: 'https://buy.stripe.com/14AbJ2cfe1in4uAe8UfnO0a',
    metaTitle: 'Schema & Structured Data Audit €99 | Game Seven Marketing',
    description: 'Expert JSON-LD audit across all page types. Validates Product, Review, and Organization schema, checks rich results eligibility, and delivers corrected code snippets ready to deploy.',
    heroHeadline: 'Structured Data & Schema Markup Audit',
    heroSub: 'Structured data done wrong costs you rankings and AI visibility. Schema errors silently block rich results, suppress product star ratings, and make your content invisible to AI citation systems. This audit finds every issue and delivers corrected JSON-LD code ready to implement today.',
    faq: [
      {
        q: 'Which schema types do you audit?',
        a: 'We audit all schema types relevant to your site - typically Organization, WebSite, Product, Offer, Review, AggregateRating, BreadcrumbList, FAQPage, and Article. We check both what you have implemented and what you should be implementing but are not currently.',
      },
      {
        q: 'Will I get corrected code I can implement immediately?',
        a: 'Yes. For every schema error or missing implementation we identify, we provide corrected JSON-LD code snippets that are ready to copy and paste into your CMS or theme. No guesswork, no further research needed.',
      },
      {
        q: 'How does schema affect AI search visibility specifically?',
        a: 'AI systems use structured data to understand entity relationships, product attributes, reviews, and organizational authority. Sites with well-implemented schema are more likely to be cited accurately in AI responses because the data is machine-readable and unambiguous. Organization schema in particular contributes to brand entity recognition in AI models.',
      },
      {
        q: 'My site already has schema - do I still need this audit?',
        a: 'Schema implementation errors are extremely common even on well-maintained sites. Common issues include missing required properties, incorrect nesting, deprecated types, conflicts between multiple schema blocks, and schema that passes validation but fails Google\'s eligibility requirements for rich results. Passing the Rich Results Test does not guarantee eligibility - a manual review almost always finds issues automated validators miss.',
      },
    ],
  },
  {
    slug: 'technical-seo',
    name: 'Technical SEO Audit',
    badge: 'Technical',
    tagline: 'A full diagnostic of everything affecting how Google crawls, indexes, and ranks your site.',
    price: 149,
    currency: '€',
    billing: 'One-time · No subscription',
    delivery: '⚡ Delivered within 1 business day',
    bullets: [
      'Crawlability & indexability audit',
      'Core Web Vitals - LCP, INP, CLS',
      'Mobile optimisation check',
      'URL structure & redirect review',
      'Security headers & HTTPS signals',
      'Fix list ranked by revenue impact',
    ],
    stripeUrl: 'https://buy.stripe.com/aFacN67YYaSX9OU3ugfnO09',
    metaTitle: 'Technical SEO Audit €149 | Game Seven Marketing',
    description: 'Expert technical SEO audit: crawlability, Core Web Vitals, mobile, URL structure, redirects, and HTTPS signals. Every fix ranked by revenue impact, delivered in 1 business day.',
    heroHeadline: 'Complete Technical SEO Audit',
    heroSub: 'Technical SEO issues are silent ranking killers. Crawl errors, slow Core Web Vitals, broken redirects, and indexation problems can cost you rankings without any visible warning. This audit finds them all - and tells you exactly which ones to fix first for maximum revenue impact.',
    faq: [
      {
        q: 'What does a technical SEO audit cover that tools like Screaming Frog miss?',
        a: 'Automated crawlers find surface-level issues - broken links, missing meta tags, slow pages. What they miss is the strategic layer: which crawl errors actually matter, whether your site architecture is cannibalizing your own rankings, whether your redirect chains are passing link equity, and whether your Core Web Vitals issues are caused by a fixable render-blocking script or require a deeper theme change. We provide that analysis.',
      },
      {
        q: 'How are Core Web Vitals assessed?',
        a: 'We assess LCP (Largest Contentful Paint), INP (Interaction to Next Paint), and CLS (Cumulative Layout Shift) using both field data from the Chrome User Experience Report and lab data from PageSpeed Insights. We identify the specific elements causing failures and recommend concrete fixes - not just "compress your images."',
      },
      {
        q: 'Do you check both mobile and desktop?',
        a: 'Yes. Google uses mobile-first indexing, so mobile performance is the priority assessment. We also check desktop and flag any significant discrepancies. Core Web Vitals and crawlability are assessed on mobile specifically.',
      },
      {
        q: 'I am on Shopify - are there platform-specific technical issues you look for?',
        a: 'Absolutely. Shopify has well-known technical SEO constraints: faceted navigation creating duplicate URLs, canonical tag behavior on collection filters, the /collections/ vs /products/ URL structure, theme-level render-blocking scripts, and app-generated JavaScript that can interfere with crawlability. We know every Shopify-specific issue and check for all of them.',
      },
      {
        q: 'Will the fix list tell me how to implement each fix?',
        a: 'Yes. Every fix in the ranked list includes a description of the issue, the revenue impact reasoning, and implementation instructions tailored to your platform. For Shopify sites, this means specific theme file edits or app settings where applicable.',
      },
    ],
  },
  {
    slug: 'ai-search-geo',
    name: 'AI Search / GEO Audit',
    badge: 'AI Search Audit',
    tagline: 'See exactly how visible your brand is in ChatGPT, Perplexity, and Google AI Overviews - and fix it.',
    price: 149,
    currency: '€',
    billing: 'One-time · No subscription',
    delivery: '⚡ Delivered within 1 business day',
    bullets: [
      'AI crawler access - GPTBot, ClaudeBot, PerplexityBot',
      'Brand mention & citation signal analysis',
      'llms.txt assessment and creation',
      'Passage-level citability scoring',
      'Platform-specific optimisation - ChatGPT, Perplexity, AI Overviews',
    ],
    stripeUrl: 'https://buy.stripe.com/eVq9AU4MMd156CI7KwfnO08',
    metaTitle: 'Expert AI Search Audit just €149 | AEO/GEO Visibility Report',
    description: 'Expert AI search visibility audit for ChatGPT, Perplexity, and Google AI Overviews. Checks crawler access, brand citation signals, llms.txt, and passage citability - delivered in 1 day.',
    heroHeadline: 'AI Search Audit - Is Your Brand Invisible to AI?',
    heroSub: 'ChatGPT, Perplexity, and Google AI Overviews now drive significant product discovery traffic. This audit shows exactly how visible your brand is across all three platforms - and delivers a specific action plan to become the recommended source in your category.',
    faq: [
      {
        q: 'What is GEO and how is it different from traditional SEO?',
        a: 'Generative Engine Optimization (GEO) is the practice of optimizing your content and brand signals so that AI systems like ChatGPT, Perplexity, and Google AI Overviews cite, recommend, or surface your brand in their responses. Unlike traditional SEO which targets keyword rankings in a list of blue links, GEO targets inclusion in AI-generated answers - which is increasingly where buying-intent queries are being resolved.',
      },
      {
        q: 'How do you measure AI search visibility?',
        a: 'We run a structured set of category-relevant queries across ChatGPT, Perplexity, and Google AI Overviews and record whether your brand is mentioned, cited, or recommended. We compare your visibility against key competitors. We also analyze the technical factors that influence AI citation: crawler access, content structure, brand entity signals, and structured data.',
      },
      {
        q: 'What is llms.txt and why does it matter?',
        a: 'llms.txt is an emerging standard that allows websites to provide AI systems with a structured summary of their content and permissions. Similar to robots.txt for traditional crawlers, llms.txt helps AI models understand your site\'s structure and prioritize key content. We assess whether you have one, whether it is correctly implemented, and create one for you if needed.',
      },
      {
        q: 'Can you actually improve my AI search visibility?',
        a: 'Yes - there are concrete, documented factors that correlate with AI citation: high-quality inbound links from authoritative sources, well-structured factual content that directly answers questions, brand entity recognition (schema + Wikipedia + press mentions), AI crawler access permissions, and content that uses clear, unambiguous language. This audit identifies your specific gaps against each factor.',
      },
      {
        q: 'Is AI search visibility important for e-commerce specifically?',
        a: 'Yes, and it is underestimated. Product recommendation queries - "best running shoes under €100," "which protein powder for beginners" - are increasingly being answered by AI systems. The brands that appear in those AI responses receive warm referral traffic from users who are already decided on the category and looking for a specific recommendation. This is high-intent traffic that converts at well above average rates.',
      },
    ],
  },
];
