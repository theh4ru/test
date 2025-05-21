import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/assets/logo/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/logo/apple-touch-icon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />

        {/* 기본 SEO 설정 */}
        <meta name="robots" content="index, follow" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
