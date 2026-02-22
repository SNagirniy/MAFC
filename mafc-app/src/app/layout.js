import { open_sans } from '@/globalStyles/fonts';
import 'normalize.css/normalize.css';
import "../globalStyles/main.scss";
import PageLayout from '@/components/layouts/PageLayout';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { getContactsData } from '@/server/strapi/strapi';
import GoogleTranslateProvider from '@/components/modules/GoogleTranslate/GoogleTranslate';
import Script from 'next/script';
import { seoConfig } from '../../seo.config';

export const revalidate = 3600;

export const metadata = {
  metadataBase: new URL(seoConfig.siteUrl),

  title: {
    default: seoConfig.defaultTitle,
    template: `%s | ${seoConfig.siteName}`,
  },

  description: seoConfig.defaultDescription,

  openGraph: {
    type: 'website',
    locale: seoConfig.locale,
    siteName: seoConfig.siteName,
    images: [seoConfig.defaultOgImage],
  },

  alternates: {
    canonical: seoConfig.siteUrl,
  },
};


export default async function RootLayout({ children }) {
const contactsData = {};

const contacts = !contactsData || contactsData?.error? {sub_title: 'Відокремлений структурний підрозділ "Маслівський аграрний фаховий коледж ім. П.Х. Гаркавого Білоцерківського національного аграрного університету"'} : contactsData[0];


  return (
    <html lang="uk">
      <head>
    <link rel="stylesheet" href="https://cdn.ckeditor.com/ckeditor5/46.0.0/ckeditor5-content.css" />
  </head>
      <body className={`${open_sans.className}`}>
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
        <Script
          id="google-translate-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                new google.translate.TranslateElement(
                  { pageLanguage: 'uk', includedLanguages: 'uk,en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE },
                  'google_translate_element'
                );
              }
            `,
          }}
        />
         <GoogleTranslateProvider />

        <PageLayout contactsData={contacts}>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="light"
            className="toast_container"
            />
            {children}
        </PageLayout>
      </body>
    </html>
  );
}
