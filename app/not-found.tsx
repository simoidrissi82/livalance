import Link from 'next/link';

export const runtime = 'edge';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 py-24 text-center">
      <h1 className="text-3xl font-semibold tracking-tight text-gray-900">Seite nicht gefunden</h1>
      <p className="max-w-prose text-base text-gray-600">
        Die von dir aufgerufene Seite existiert nicht oder wurde verschoben. Bitte überprüfe die URL oder gehe zur Startseite zurück.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        Zur Startseite
      </Link>
    </main>
  );
}
