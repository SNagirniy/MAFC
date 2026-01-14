const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const seoConfig = {
  siteName: 'Маслівський аграрний фаховий коледж',
  siteUrl,

  defaultTitle:
    'Відокремлений структурний підрозділ Маслівський аграрний фаховий коледж ім. П.Х. Гаркавого Білоцерківського націоналного аграрного університету',

  defaultDescription:
    'Офіційний сайт Маслівського аграрного фахового коледжу: новини, освітні програми, циклові комісії, гуртки, вступна кампанія.',

  locale: 'uk_UA',

  defaultPosterOgImage: `${siteUrl}/default_news.jpg`,
  defaultOgImage: `${siteUrl}/logo.png`,
};