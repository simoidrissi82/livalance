import {LocaleDetector} from '@/components/LocaleDetector';

export default function RootPage() {
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content="0;url=/de/" />
        <style>{`body { margin: 0; background: #f6f7f4; }`}</style>
      </head>
      <body>
        <LocaleDetector />
      </body>
    </html>
  );
}
