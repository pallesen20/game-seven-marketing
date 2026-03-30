export const SITE = 'https://gamesevenmarketing.com';

export type PageEntry = {
  url: string;
  title: string;
  description: string;
  changefreq?: string;
  priority?: number;
};

import { audits } from '../data/audits';

export const pages: PageEntry[] = [
  {
    url: '/',
    title: 'Game Seven Marketing | SEO, AI Optimization & CRO',
    description: 'Game Seven Marketing - niche experts in SEO, AI Optimization and CRO for Shopify e-commerce brands. When you need the A-team.',
    changefreq: 'monthly',
    priority: 1.0,
  },
  {
    url: '/audits',
    title: 'SEO & AI Search Audits | Game Seven Marketing',
    description: 'Six specialist SEO audits for any website: Technical, Content, Schema, AI Search, Single Page, and Full Site.',
    changefreq: 'monthly',
    priority: 0.9,
  },
  ...audits.map(a => ({
    url: `/audits/${a.slug}`,
    title: a.metaTitle,
    description: a.description,
    changefreq: 'monthly' as const,
    priority: 0.8,
  })),
];
