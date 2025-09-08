import '@/styles/global.css';

import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';

import { Footer } from '@/templates/Footer';
import { Navbar } from '@/templates/Navbar';
import { AllLocales } from '@/utils/AppConfig';

const svnCookies = localFont({
  src: '../../../public/fonts/SVN-Cookies.ttf',
  variable: '--font-svn-cookies',
  display: 'swap',
});
const svnGrocery = localFont({
  src: '../../../public/fonts/SVN-Grocery-Rounded.ttf',
  variable: '--font-svn-grocery',
  display: 'swap',
});

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: '/favicon.ico',
  },
};

export function generateStaticParams() {
  return AllLocales.map(locale => ({ locale }));
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  unstable_setRequestLocale(locale);

  // Using internationalization in Client Components
  const messages = await getMessages();

  // The `suppressHydrationWarning` in <html> is used to prevent hydration errors caused by `next-themes`.
  // Solution provided by the package itself: https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app

  return (
    <html
      lang={locale}
      className={`${svnGrocery.className} ${svnGrocery.variable} ${svnCookies.variable}`}
      suppressHydrationWarning
    >
      <body
        className="bg-background text-foreground w-full overflow-x-hidden antialiased"
        suppressHydrationWarning
      >
        {/* PRO: Dark mode support for Shadcn UI */}
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {props.children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
