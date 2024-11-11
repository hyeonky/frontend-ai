import localFont from 'next/font/local';
import '../styles/globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <meta
          property="og:type"
          content="website"
        />
        <meta
          property="og:title"
          content="페이지 제목"
        />
        <meta
          property="og:description"
          content="페이지 설명"
        />
        <meta
          property="og:image"
          content="http://www.mysite.com/article/article1_featured_image.jpg"
        />
        <meta
          property="og:url"
          content="http://www.mysite.com/article/article1.html"
        />
        <meta
          name="twitter:card"
          content="summary"
        />
        <meta
          name="twitter:title"
          content="페이지 제목"
        />
        <meta
          name="twitter:description"
          content="페이지 설명"
        />
        <meta
          name="twitter:image"
          content="http://www.mysite.com/article/article1.html"
        />
        <meta
          name="twitter:domain"
          content="사이트 명"
        />
        <title>react-study</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div id="wrap">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}