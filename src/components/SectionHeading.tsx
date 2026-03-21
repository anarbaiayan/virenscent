type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const alignment =
    align === 'center'
      ? 'mx-auto max-w-3xl text-center'
      : 'max-w-3xl text-left';

  return (
    <div className={alignment}>
      <span className="inline-flex rounded-full border border-brand/20 bg-brand-soft/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-deep sm:px-4 sm:text-xs sm:tracking-[0.22em] dark:bg-brand-soft/40 dark:text-brand-deep">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-[2rem] leading-[0.95] text-balance text-foreground sm:text-5xl sm:leading-none">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-6 text-muted-foreground sm:mt-5 sm:text-lg sm:leading-7">
        {description}
      </p>
    </div>
  );
}
