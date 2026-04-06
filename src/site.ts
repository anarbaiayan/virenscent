const DEFAULT_SITE_URL = 'https://virenscent.vercel.app';

function normalizeSiteUrl(value: string) {
  return value.replace(/\/+$/, '');
}

export function getSiteUrl() {
  const configuredUrl = import.meta.env.VITE_SITE_URL?.trim();

  if (configuredUrl) {
    return normalizeSiteUrl(configuredUrl);
  }

  if (typeof window !== 'undefined' && window.location.origin) {
    return normalizeSiteUrl(window.location.origin);
  }

  return DEFAULT_SITE_URL;
}
