import {LocaleDetector} from '@/components/LocaleDetector';

export default function RootPage() {
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content="0;url=/de/" />
      </head>
      <body>
        <LocaleDetector />
        <p>Redirecting...</p>
      </body>
    </html>
  );
}
