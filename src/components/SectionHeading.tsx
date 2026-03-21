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
      <span className="inline-flex rounded-full border border-brand/20 bg-brand-soft/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-brand-deep dark:bg-brand-soft/40 dark:text-brand-deep">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-4xl leading-none text-balance text-foreground sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
        {description}
      </p>
    </div>
  );
}
