import { staticPagesMetadata } from './staticPagesMetadata';
import { seoConfig } from '../../seo.config';


export default function generateStaticPageMeta(path) {
  const cleanPath = path.split('?')[0];

  const pageMeta = staticPagesMetadata.find(
    (page) => page.link === cleanPath
  );

  if (!pageMeta) {
    return {};
  }

  const hasQuery = path.includes('?');

  return {
    title: pageMeta.item,
    description: pageMeta.description,

    alternates: {
      canonical: `${seoConfig.siteUrl}${cleanPath}`,
    },

    ...(hasQuery && {
      robots: {
        index: false,
        follow: true,
      },
    }),
  };
}