import { pages, SITE } from '../utils/getPages';

export async function GET() {
  const content = `# Game Seven Marketing\n\nSEO, AI Optimization & CRO specialists for e-commerce brands.\n\n## Pages\n\n${pages.map(p => `- [${p.title}](${SITE}${p.url}): ${p.description}`).join('\n')}`;
  return new Response(content, { headers: { 'Content-Type': 'text/plain' } });
}
