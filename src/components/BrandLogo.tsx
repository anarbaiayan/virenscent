import logo from '../assets/virenscent2-logo.png';

type BrandLogoProps = {
  size?: 'sm' | 'md' | 'lg';
  showName?: boolean;
  caption?: string;
  nameClassName?: string;
  className?: string;
};

const sizeClasses = {
  sm: 'h-11 w-11 rounded-2xl p-1.5',
  md: 'h-14 w-14 rounded-[1.35rem] p-2',
  lg: 'h-20 w-20 rounded-[1.75rem] p-3',
};

export function BrandLogo({
  size = 'md',
  showName = true,
  caption,
  nameClassName = '',
  className = '',
}: BrandLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span
        className={`inline-flex items-center justify-center border border-brand/15 bg-white/85 shadow-soft dark:bg-white/10 ${sizeClasses[size]}`}
      >
        <img
          src={logo}
          alt="Логотип Virenscent"
          className="h-full w-full object-contain"
        />
      </span>

      {showName ? (
        <div>
          <p
            className={`font-display leading-none text-foreground ${nameClassName || 'text-2xl font-semibold'}`}
          >
            Virenscent
          </p>
          {caption ? (
            <p className="mt-1 text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
              {caption}
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
