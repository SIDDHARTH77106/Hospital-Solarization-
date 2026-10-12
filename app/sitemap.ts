import type { MetadataRoute } from 'next';
import { allSolutions } from './solutions/data';

const siteUrl = 'https://suryasangam.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { url: siteUrl, priority: 1, changeFrequency: 'weekly' as const },
    { url: `${siteUrl}/solutions`, priority: 0.9, changeFrequency: 'monthly' as const },
    ...allSolutions.map((solution) => ({
      url: `${siteUrl}${solution.url}`,
      priority: 0.85,
      changeFrequency: 'monthly' as const,
    })),
  ];

  return pages.map((page) => ({ ...page, lastModified: new Date() }));
}
