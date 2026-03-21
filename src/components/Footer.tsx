import { cities, email, navItems, phones } from '../data/content';
import { BrandLogo } from './BrandLogo';

export function Footer() {
  return (
    <footer className="border-t border-line/80 py-10">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
          <div>
            <BrandLogo
              size="md"
              caption="Aroma diffusion service"
              nameClassName="text-3xl font-semibold"
            />
            <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">
              Премиальный сервис ароматизации помещений с арендой оборудования,
              установкой и еженедельным обслуживанием.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Фотографии объектов и оборудования будут добавлены позже.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand">
              Быстрые ссылки
            </p>
            <div className="mt-5 flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground transition hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand">
              Контакты
            </p>
            <div className="mt-5 space-y-3 text-sm text-muted-foreground">
              <p>{cities.join(' • ')}</p>
              {phones.map((phone) => (
                <p key={phone}>{phone}</p>
              ))}
              <p>{email}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-line/80 pt-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Virenscent. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
