import { useEffect } from 'react';
import { cities, email, faqItems, phones } from '../data/content';
import { getSiteUrl } from '../site';

const SITE_TITLE = 'Virenscent - Ароматизация помещений для бизнеса';
const SITE_DESCRIPTION =
  'Ароматизация помещений для бизнеса и интерьеров в Астане, Алматы и Шымкенте. Аренда аромадиффузоров, подбор ароматов, установка и еженедельный сервис.';
const SITE_IMAGE_PATH = '/og-cover.svg';

function upsertMeta(
  attribute: 'name' | 'property',
  key: string,
  content: string,
) {
  const selector = `meta[${attribute}="${key}"]`;
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  const selector = `link[rel="${rel}"]`;
  let element = document.head.querySelector(selector) as HTMLLinkElement | null;

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

function upsertJsonLd(id: string, data: unknown) {
  let element = document.head.querySelector(
    `script[data-seo-id="${id}"]`,
  ) as HTMLScriptElement | null;

  if (!element) {
    element = document.createElement('script');
    element.type = 'application/ld+json';
    element.dataset.seoId = id;
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(data);
}

export function SiteSeo() {
  useEffect(() => {
    const siteUrl = `${getSiteUrl()}/`;
    const imageUrl = new URL(SITE_IMAGE_PATH, siteUrl).toString();

    document.documentElement.lang = 'ru';
    document.title = SITE_TITLE;

    upsertMeta('name', 'description', SITE_DESCRIPTION);
    upsertMeta('name', 'robots', 'index, follow, max-image-preview:large');
    upsertMeta('name', 'theme-color', '#2fc86f');
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:locale', 'ru_RU');
    upsertMeta('property', 'og:site_name', 'Virenscent');
    upsertMeta('property', 'og:title', SITE_TITLE);
    upsertMeta('property', 'og:description', SITE_DESCRIPTION);
    upsertMeta('property', 'og:url', siteUrl);
    upsertMeta('property', 'og:image', imageUrl);
    upsertMeta('property', 'og:image:alt', 'Virenscent - aroma diffusion service');
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', SITE_TITLE);
    upsertMeta('name', 'twitter:description', SITE_DESCRIPTION);
    upsertMeta('name', 'twitter:image', imageUrl);

    upsertLink('canonical', siteUrl);

    upsertJsonLd('website', {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Virenscent',
      url: siteUrl,
      inLanguage: 'ru-KZ',
      description: SITE_DESCRIPTION,
    });

    upsertJsonLd('service', {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      '@id': `${siteUrl}#business`,
      name: 'Virenscent',
      url: siteUrl,
      image: imageUrl,
      description: SITE_DESCRIPTION,
      email,
      telephone: phones[0],
      areaServed: cities.map((city) => ({
        '@type': 'City',
        name: city,
      })),
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'KZ',
      },
      contactPoint: phones.map((phone) => ({
        '@type': 'ContactPoint',
        telephone: phone,
        contactType: 'customer support',
        areaServed: 'KZ',
        availableLanguage: ['ru', 'kk'],
      })),
      serviceType: [
        'Ароматизация помещений',
        'Аренда аромадиффузоров',
        'Подбор ароматов для бизнеса',
      ],
    });

    upsertJsonLd('faq', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    });
  }, []);

  return null;
}
