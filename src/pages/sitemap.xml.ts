import { pages, SITE } from '../utils/getPages';

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${SITE}${p.url}</loc>
    <changefreq>${p.changefreq ?? 'monthly'}</changefreq>
    <priority>${p.priority ?? 0.7}</priority>
  </url>`).join('\n')}
</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
