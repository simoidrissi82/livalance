type BookingEmbedProps = {
  locale: string;
};

const fallbackUrls: Record<string, string> = {
  de: 'https://cal.com/livalance?embed=true&locale=de',
  en: 'https://cal.com/livalance?embed=true&locale=en'
};

function buildEmbedUrl(baseUrl: string | undefined, locale: string) {
  if (!baseUrl) {
    return fallbackUrls[locale] ?? fallbackUrls.en;
  }

  try {
    const url = new URL(baseUrl);
    url.searchParams.set('embed', 'true');
    url.searchParams.set('locale', locale);
    return url.toString();
  } catch {
    return fallbackUrls[locale] ?? fallbackUrls.en;
  }
}

export function BookingEmbed({locale}: BookingEmbedProps) {
  const src = buildEmbedUrl(process.env.NEXT_PUBLIC_CAL_URL, locale);

  return (
    <div className="h-[680px] w-full overflow-hidden rounded-3xl border border-slate-200 bg-brand-surface shadow-soft">
      <iframe
        title="Cal.com booking"
        src={src}
        className="size-full"
        allow="camera; microphone; fullscreen"
      />
    </div>
  );
}
