type BookingEmbedProps = {
  locale: string;
};

const bookingUrls: Record<string, string> = {
  de: 'https://cal.com/livalance/erstgespraech?embed=true',
  en: 'https://cal.com/livalance/intro-call?embed=true'
};

export function BookingEmbed({locale}: BookingEmbedProps) {
  const src = bookingUrls[locale] ?? bookingUrls.en;

  return (
    <div className="h-[680px] w-full overflow-hidden rounded-3xl border border-slate-200 bg-brand-surface shadow-soft">
      <iframe
        title="Cal.com booking"
        src={src}
        className="h-full w-full"
        allow="camera; microphone; fullscreen"
      />
    </div>
  );
}
