export type NavItem = {
  label: string;
  href: string;
};

export type Step = {
  title: string;
  description: string;
};

export type Device = {
  name: string;
  coverage: string;
  description: string;
  placements: string[];
  spaces: string[];
  benefits: string[];
};

export type AromaCard = {
  name: string;
  description: string;
  bestFor: string[];
  accent: string;
  category: string;
};

export type AromaCategory = {
  id: string;
  label: string;
  items: string[];
};

export type PricingPlan = {
  name: string;
  price: string;
  coverage: string;
  description: string;
  features: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const navItems: NavItem[] = [
  { label: 'О нас', href: '#about' },
  { label: 'Как это работает', href: '#process' },
  { label: 'Оборудование', href: '#devices' },
  { label: 'Ароматы', href: '#aromas' },
  { label: 'Тарифы', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Контакты', href: '#contact' },
];

export const heroStats = [
  'До 1000 м² покрытия',
  '50+ ароматов',
  'Обслуживание каждую неделю',
];

export const serviceSummary = [
  'Устанавливаем оборудование самостоятельно и подбираем формат размещения под помещение.',
  'Еженедельный сервис уже включен: чистка, контроль состояния и долив ароматической жидкости.',
  'Помогаем выбрать аромат под формат пространства, поток гостей и характер бренда.',
  'Если нужного аромата временно нет в наличии, предложим доступные альтернативы и сообщим о ближайшем поступлении.',
];

export const steps: Step[] = [
  {
    title: 'Оставляете заявку',
    description:
      'Связываемся, уточняем город, площадь помещения и желаемую атмосферу.',
  },
  {
    title: 'Выбираете прибор и аромат',
    description:
      'Подбираем устройство по площади и предлагаем ароматы под формат вашего пространства.',
  },
  {
    title: 'Мы устанавливаем оборудование',
    description:
      'Привозим прибор, настраиваем его и аккуратно размещаем в подходящей зоне.',
  },
  {
    title: 'Каждую неделю обслуживаем',
    description:
      'Приезжаем в фиксированный день, проводим чистку и доливаем ароматическую жидкость.',
  },
];

export const devices: Device[] = [
  {
    name: 'Compact Scent',
    coverage: 'До 200 м²',
    description:
      'Элегантное компактное решение для небольших пространств, где важны аккуратная подача и комфортная интенсивность.',
    placements: [
      'Крепление на стену',
      'Размещение на поверхности или столе',
      'Установка в подходящей зоне рядом с вентиляцией',
    ],
    spaces: ['Квартира', 'Офис', 'Салон', 'Бутик', 'Студия'],
    benefits: [
      'Подходит для небольших помещений',
      'Лаконичный корпус и аккуратный внешний вид',
      'Удобен для частных и камерных коммерческих пространств',
    ],
  },
  {
    name: 'Pro Scent',
    coverage: 'До 600 м²',
    description:
      'Более мощный прибор для просторных объектов и широкого коммерческого покрытия с сохранением премиального впечатления.',
    placements: [
      'Крепление на стену',
      'Размещение на поверхности или столе',
      'Установка в подходящей зоне рядом с вентиляцией',
    ],
    spaces: ['Шоурум', 'Клиника', 'Кафе', 'Магазин', 'Ресепшн'],
    benefits: [
      'Уверенно работает на больших площадях',
      'Подходит для активного клиентского потока',
      'Хорошо решает задачи широкого коммерческого покрытия',
    ],
  },
];

export const spaces = [
  'Квартира',
  'Дом',
  'Офис',
  'Салон красоты',
  'Бутик',
  'Магазин',
  'Клиника',
  'Студия',
  'Кафе',
  'Ресепшн',
  'Шоурум',
];

export const topAromas = ['Sex Mafia', 'Carroussel', 'Very Berry'];

export const availableNow = [
  'Sex Mafia',
  'Carroussel',
  'Very Berry',
  'New York City',
  'Yuzu Taka',
  'Yougurt Peach',
  'Challenge Chanel',
];

export const aromaCards: AromaCard[] = [
  {
    name: 'Sex Mafia',
    description:
      'Насыщенный, выразительный и запоминающийся аромат с соблазнительным характером. Подходит для пространств, где нужен яркий фирменный акцент.',
    bestFor: ['Барбершопы', 'Стильные студии', 'Lounge-зоны', 'Бутики'],
    accent: 'Яркий акцент',
    category: 'accent',
  },
  {
    name: 'Carroussel',
    description:
      'Фруктово-цветочный аромат с ярким, мягко-сладким и праздничным настроением. Создает эффект теплого, приятного и запоминающегося пространства.',
    bestFor: ['Салоны красоты', 'Шоурумы', 'Fashion-пространства', 'Клиентские зоны'],
    accent: 'Теплое впечатление',
    category: 'accent',
  },
  {
    name: 'Very Berry',
    description:
      'Ягодный аромат с сочным, сладким и современным характером. Хорошо воспринимается и легко запоминается.',
    bestFor: ['Магазины', 'Салоны', 'Студии', 'Молодежные пространства'],
    accent: 'Сочный характер',
    category: 'fruity',
  },
  {
    name: 'New York City',
    description:
      'Современный городской аромат со свежим и статусным звучанием. Подчеркивает аккуратность и деловой стиль пространства.',
    bestFor: ['Офисы', 'Бутики', 'Ресепшн', 'Современные студии'],
    accent: 'Городской статус',
    category: 'fresh',
  },
  {
    name: 'Yuzu Taka',
    description:
      'Свежий цитрусовый аромат с утонченным характером yuzu. Бодрит, освежает и делает атмосферу более легкой.',
    bestFor: ['Салоны', 'Переговорные', 'Ресепшн', 'Кофейни', 'Светлые помещения'],
    accent: 'Свежий цитрус',
    category: 'fresh',
  },
  {
    name: 'Yougurt Peach',
    description:
      'Мягкий фруктово-сливочный аромат с персиковым оттенком. Уютный, приятный и дружелюбный по восприятию.',
    bestFor: ['Бьюти-пространства', 'Магазины', 'Небольшие студии', 'Семейные зоны'],
    accent: 'Уютная мягкость',
    category: 'fruity',
  },
  {
    name: 'Challenge Chanel',
    description:
      'Элегантный аромат с ощущением чистоты, статуса и классической парфюмерной эстетики. Подходит для пространств, где важно подчеркнуть премиальность и ухоженность.',
    bestFor: ['Бутики', 'Салоны', 'Кабинеты', 'Ресепшн', 'Премиальные интерьеры'],
    accent: 'Классическая премиальность',
    category: 'woody',
  },
];

export const aromaCategories: AromaCategory[] = [
  {
    id: 'fresh',
    label: 'Цитрусовые и свежие',
    items: [
      'Yuzu Taka',
      'Alegria Mandarina',
      'Bergamote',
      'Bergamote / Orange',
      'Clementzest',
      'Pamplemousse',
      'New York',
      'New York City',
    ],
  },
  {
    id: 'fruity',
    label: 'Фруктовые и сочные',
    items: [
      'Pomme Verte',
      'Peach & Apricot',
      'Melon',
      'Very Berry',
      'Banane',
      'Pomm Fruit Exotiq',
      'Viva Joycy',
      'Bora-Bora',
      'Yougurt Peach',
    ],
  },
  {
    id: 'floral',
    label: 'Цветочные и мягкие',
    items: ['Allegra Flower', 'Jasmin', 'Peau d Ange', 'Tournesol', 'Amande'],
  },
  {
    id: 'marine',
    label: 'Морские и чистые',
    items: ['Marine', 'Nippon', 'Saint Tropez', 'Hidalgo Blue'],
  },
  {
    id: 'woody',
    label: 'Древесные и статусные',
    items: [
      'Opus',
      'Khlo Woods',
      'Genius Rock',
      'Gianni',
      'Escapade',
      'Helvete',
      'Challenge Chanel',
    ],
  },
  {
    id: 'accent',
    label: 'Яркие и акцентные',
    items: ['Sex Mafia', 'Warning Sexo', 'Carroussel'],
  },
  {
    id: 'gourmand',
    label: 'Гурманские',
    items: ['Cappuccino', 'Chocolat Mandarine', 'Malinette'],
  },
];

export const benefits = [
  'Установка включена',
  'Обслуживание каждую неделю',
  'Чистка и долив входят в стоимость',
  'Подбор аромата под формат помещения',
  'Можно выбрать решение под площадь объекта',
  'Аромат помогает формировать атмосферу пространства',
  'Не нужно покупать оборудование',
  'Подходит для бизнеса и частных интерьеров',
];

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Small device',
    price: '25 000 KZT',
    coverage: 'Для пространств до 200 м²',
    description:
      'Компактное решение для небольших помещений с тем же уровнем сервиса и аккуратной установкой.',
    features: [
      'Аренда прибора',
      'Установка',
      'Еженедельное обслуживание',
      'Чистка',
      'Долив ароматической жидкости',
      'Помощь с выбором аромата',
    ],
  },
  {
    name: 'Large device',
    price: '40 000 KZT',
    coverage: 'Для пространств до 400 м²',
    description:
      'Мощный формат для больших помещений и коммерческих объектов с более широким покрытием.',
    features: [
      'Аренда прибора',
      'Установка',
      'Еженедельное обслуживание',
      'Чистка',
      'Долив ароматической жидкости',
      'Помощь с выбором аромата',
    ],
  },
];

export const trustPlaceholders = [
  'Отзывы клиентов',
  'Реальные объекты',
  'Кейсы',
  'Логотипы партнеров',
  'Фото установок',
];

export const faqItems: FaqItem[] = [
  {
    question: 'На какой срок можно подключить услугу?',
    answer: 'Минимально удобно оформить на 1 месяц. Дальше можно продлевать.',
  },
  {
    question: 'Что входит в еженедельное обслуживание?',
    answer:
      'Наш специалист приезжает в согласованный день, проводит чистку оборудования и доливает ароматическую жидкость.',
  },
  {
    question: 'Можно ли менять аромат?',
    answer:
      'Да, но для стабильного эффекта лучше не менять аромат слишком часто. Так аромат лучше запоминается и формирует атмосферу пространства.',
  },
  {
    question: 'Что делать, если нужного аромата нет в наличии?',
    answer:
      'Мы предложим доступные варианты из презентации, а выбранный аромат можно будет поставить позже, ориентировочно через 2 недели.',
  },
  {
    question: 'Куда можно установить прибор?',
    answer:
      'На стену, на поверхность или в подходящую зону рядом с вентиляцией — в зависимости от помещения и типа оборудования.',
  },
  {
    question: 'Для каких помещений подходит услуга?',
    answer:
      'Для квартир, домов, салонов, бутиков, офисов, магазинов, клиник, студий, кафе и других пространств.',
  },
];

export const cities = ['Астана', 'Алматы', 'Шымкент'];

export const phones = ['+7 707 534 75 19', '+7 747 543 06 74'];

export const whatsappLinks = [
  'https://wa.me/77075347519?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%82%D0%B5%D0%BB(%D0%B0)%20%D0%B1%D1%8B%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%B5%D0%B5%20%D0%BE%D0%B1%20%D0%B0%D1%80%D0%BE%D0%BC%D0%B0%D1%82%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%B8%20%D0%BF%D0%BE%D0%BC%D0%B5%D1%89%D0%B5%D0%BD%D0%B8%D0%B9%20Virenscent.',
  'https://wa.me/77475430674?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%82%D0%B5%D0%BB(%D0%B0)%20%D0%B1%D1%8B%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%B5%D0%B5%20%D0%BE%D0%B1%20%D0%B0%D1%80%D0%BE%D0%BC%D0%B0%D1%82%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%B8%20%D0%BF%D0%BE%D0%BC%D0%B5%D1%89%D0%B5%D0%BD%D0%B8%D0%B9%20Virenscent.',
];

export const email = 'anarbajaan1@gmail.com';
