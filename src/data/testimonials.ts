export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
  datePublished: string;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Tim',
    role: 'CEO',
    quote: 'Organic traffic was basically zero when we started - we were paying for every single visitor. After 6 months with Game Seven, organic is now 38% of our total revenue. That\'s a permanent reduction in our CAC that improves every month.',
    rating: 5,
    datePublished: '2024-01-15',
  },
  {
    name: 'Sebastian',
    role: 'Founder',
    quote: 'Jesper\'s technical SEO audit uncovered 14 critical issues we didn\'t know existed. Within 8 weeks of fixing them, we jumped from page 3 to page 1 for our top 6 product keywords. The difference in organic revenue was immediate.',
    rating: 5,
    datePublished: '2024-02-10',
  },
  {
    name: 'Marcus',
    role: 'E-Commerce Director',
    quote: 'The AI Optimization work was unlike anything we\'d seen. We now appear in ChatGPT and Perplexity recommendations for our category. It\'s a completely new acquisition channel that our competitors haven\'t touched yet.',
    rating: 5,
    datePublished: '2024-03-05',
  },
  {
    name: 'Jens',
    role: 'Owner',
    quote: 'What I appreciate most is that Game Seven actually knows Shopify inside and out. Our store speed went from 38 to 91 on mobile and our SEO rankings moved almost immediately after the technical fixes.',
    rating: 5,
    datePublished: '2024-03-20',
  },
  {
    name: 'Tyler',
    role: 'CMO',
    quote: 'These guys are obsessed with the right thing - actual revenue, not vanity metrics. A CRO win in week 3 recovered $28K/month in abandoned cart revenue. 18 months in and it keeps compounding.',
    rating: 5,
    datePublished: '2024-04-12',
  },
  {
    name: 'Ninna',
    role: 'VP Commerce',
    quote: 'We came to Game Seven after two other SEO agencies failed us. The difference is night and day. Jesper knows technical SEO at a depth I haven\'t seen anywhere else. Wish we\'d found them years earlier.',
    rating: 5,
    datePublished: '2024-05-08',
  },
  {
    name: 'Sean',
    role: 'Head of Marketing',
    quote: 'Jesper conducted a thorough audit of our company website which provided exceptional insight. We learned what could be done to improve our website\'s SEO and AI engine visibility in order to drive greater traffic to our business.',
    rating: 5,
    datePublished: '2024-05-25',
  },
  {
    name: 'Caroline',
    role: 'Owner',
    quote: 'We have been partnering with Game Seven for our CRO for a while now and couldn\'t be happier. Every improvement they implement is transparent and strictly data-driven. We highly recommend their services.',
    rating: 5,
    datePublished: '2024-06-10',
  },
  {
    name: 'Anders',
    role: 'Marketing Manager',
    quote: 'It\'s clear from the start that they are experts in their field. They explain everything thoroughly and act as a true partner, proactively thinking along with you to maximize your website\'s potential.',
    rating: 5,
    datePublished: '2024-06-28',
  },
];

/** Schema.org Review objects - embed in an Organization's `review` field */
export const reviewSchema = testimonials.map((t) => ({
  '@type': 'Review',
  author: { '@type': 'Person', name: t.name, jobTitle: t.role },
  datePublished: t.datePublished,
  reviewBody: t.quote,
  reviewRating: { '@type': 'Rating', ratingValue: String(t.rating) },
}));
