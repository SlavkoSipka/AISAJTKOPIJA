export interface CaseStudyData {
  slug: string;
  projectTitle: {
    sr: string;
    en: string;
  };
  tagline: {
    sr: string;
    en: string;
  };
  metaTags: {
    client: string;
    year: string;
    services: {
      sr: string;
      en: string;
    };
  };
  heroImage: string;
  brief: {
    sr: string;
    en: string;
  };
  stats: {
    label: { sr: string; en: string };
    value: string;
  }[];
  challenge: {
    sr: string;
    en: string;
  };
  goal: {
    sr: string;
    en: string;
  };
  processSteps: {
    title: { sr: string; en: string };
    description: { sr: string; en: string };
    image: string;
    caption?: { sr: string; en: string };
  }[];
  results: {
    value: string;
    label: { sr: string; en: string };
  }[];
  seo: {
    title: { sr: string; en: string };
    description: { sr: string; en: string };
    keywords: { sr: string; en: string };
  };
  externalUrl: string;
}

export const caseStudies: CaseStudyData[] = [
  {
    slug: 'kralj-residence',
    projectTitle: {
      sr: 'Kralj Residence — Moderan Sajt za Apartmane',
      en: 'Kralj Residence — Modern Apartment Website',
    },
    tagline: {
      sr: 'Responzivan web sajt koji prezentuje apartmane i pospešuje direktne rezervacije.',
      en: 'A responsive website that showcases apartments and drives direct bookings.',
    },
    metaTags: {
      client: 'Kralj Residence',
      year: '2024',
      services: { sr: 'Web Dizajn, Razvoj, SEO', en: 'Web Design, Development, SEO' },
    },
    heroImage: 'https://res.cloudinary.com/dij7ynio3/image/upload/w_1200,f_webp,q_auto:good/v1739663014/kralj12_um1xrk',
    brief: {
      sr: 'Kralj Residence je premium ponuda apartmana u Beogradu. Cilj je bio kreirati moderan web sajt koji jasno prezentuje svaki apartman sa profesionalnim fotografijama, detaljima i mogućnošću direktnog kontakta. Sajt mora raditi brzo na svim uređajima i pozicionirati se na Google za lokalne pretrage.',
      en: 'Kralj Residence is a premium apartment offering in Belgrade. The goal was to create a modern website that clearly presents each apartment with professional photos, details and a direct contact option. The site must load fast on all devices and rank on Google for local searches.',
    },
    stats: [
      { label: { sr: 'Trajanje', en: 'Timeline' }, value: '3 ned.' },
      { label: { sr: 'Platforma', en: 'Platform' }, value: 'React' },
      { label: { sr: 'Uloga', en: 'Role' }, value: 'Full Design & Dev' },
      { label: { sr: 'Alati', en: 'Tools' }, value: 'Figma, React, TailwindCSS' },
    ],
    challenge: {
      sr: 'Klijent je imao zastareo sajt bez responzivnog dizajna, što je odbijalo korisnike sa mobilnih uređaja. Fotografije apartmana nisu bile optimizovane, a konverzija posete u kontakt je bila izuzetno niska. Sajt nije bio vidljiv na Google-u za ključne pretrage poput "apartmani Beograd".',
      en: 'The client had an outdated site with no responsive design, deterring mobile users. Apartment photos were unoptimized and the visit-to-contact conversion rate was very low. The site was invisible on Google for key searches like "apartments Belgrade".',
    },
    goal: {
      sr: 'Dizajnirati i razviti moderan, brz i SEO-optimizovan web sajt koji profesionalno predstavlja apartmane, povećava broj upita i gradi poverenje kod posetilaca od prvog klika. Fokus na korisničko iskustvo i jasnu strukturu.',
      en: 'Design and develop a modern, fast, SEO-optimized website that professionally showcases apartments, increases inquiries and builds trust from the first click. Focus on user experience and clear structure.',
    },
    processSteps: [
      {
        title: { sr: 'Istraživanje i Dizajn', en: 'Research & Design' },
        description: {
          sr: 'Analizirali smo konkurenciju i korisničke potrebe. Kreirali smo wireframe i vizuelni dizajn u Figma alatu, sa fokusom na čist, moderan izgled i intuitivnu navigaciju. Klijent je odobrio dizajn nakon jedne runde revizija.',
          en: 'We analyzed competitors and user needs. Created wireframes and visual design in Figma, focusing on a clean, modern look and intuitive navigation. The client approved the design after one round of revisions.',
        },
        image: 'https://placehold.co/800x500/1e1b4b/a78bfa?text=Design+Phase',
        caption: { sr: 'Wireframe i UI dizajn u Figma', en: 'Wireframe and UI design in Figma' },
      },
      {
        title: { sr: 'Razvoj i Optimizacija', en: 'Development & Optimization' },
        description: {
          sr: 'Sajt je razvijen u React-u sa TailwindCSS-om za brz i održiv kod. Sve slike su optimizovane za web, implementiran je lazy loading i moderan responsive dizajn. Vreme učitavanja je smanjeno na ispod 2 sekunde.',
          en: 'Built with React and TailwindCSS for fast, maintainable code. All images were optimized for web, lazy loading implemented, and a modern responsive design applied. Load time dropped below 2 seconds.',
        },
        image: 'https://placehold.co/800x500/1e1b4b/a78bfa?text=Development',
        caption: { sr: 'Čist kôd i brz sajt', en: 'Clean code and fast performance' },
      },
      {
        title: { sr: 'Lansiranje i SEO', en: 'Launch & SEO' },
        description: {
          sr: 'Nakon testiranja na svim uređajima, sajt je lansiran sa kompletnom on-page SEO optimizacijom — meta tagovi, strukturirani podaci, sitemap i optimizovane slike. Klijent je dobio obuku za ažuriranje sadržaja.',
          en: 'After testing on all devices, the site launched with full on-page SEO — meta tags, structured data, sitemap and optimized images. The client received training for content updates.',
        },
        image: 'https://placehold.co/800x500/1e1b4b/a78bfa?text=Launch+%26+SEO',
        caption: { sr: 'Lansiranje i SEO podešavanje', en: 'Launch and SEO setup' },
      },
    ],
    results: [
      { value: '+180%', label: { sr: 'Više Poseta', en: 'More Traffic' } },
      { value: '1.8s', label: { sr: 'Vreme Učitavanja', en: 'Load Time' } },
      { value: '5.0★', label: { sr: 'Ocena Klijenta', en: 'Client Rating' } },
      { value: '+85%', label: { sr: 'Više Upita', en: 'More Leads' } },
    ],
    seo: {
      title: {
        sr: 'Kralj Residence Case Study | Izrada Sajta za Apartmane - AI Sajt',
        en: 'Kralj Residence Case Study | Apartment Website Development - AI Sajt',
      },
      description: {
        sr: 'Pogledajte kako smo kreirali moderan web sajt za Kralj Residence apartmane u Beogradu. +180% poseta, brz sajt, SEO optimizacija. AI Sajt portfolio.',
        en: 'See how we created a modern website for Kralj Residence apartments in Belgrade. +180% traffic, fast site, SEO optimization. AI Sajt portfolio.',
      },
      keywords: {
        sr: 'kralj residence, izrada sajta za apartmane, web dizajn beograd, portfolio, case study',
        en: 'kralj residence, apartment website development, web design belgrade, portfolio, case study',
      },
    },
    externalUrl: 'https://kraljresidence.rs',
  },
  {
    slug: 'bn-autofolije',
    projectTitle: {
      sr: 'BN Autofolije — Web Sajt za Auto Detailing',
      en: 'BN Autofolije — Car Detailing Website',
    },
    tagline: {
      sr: 'Profesionalna prezentacija auto detailing usluga sa galerijom radova.',
      en: 'Professional presentation of car detailing services with a work gallery.',
    },
    metaTags: {
      client: 'BN Autofolije',
      year: '2024',
      services: { sr: 'Web Dizajn, Razvoj, SEO', en: 'Web Design, Development, SEO' },
    },
    heroImage: 'https://res.cloudinary.com/dij7ynio3/image/upload/w_1200,f_webp,q_auto:good/v1740502433/pozadina-min_gfbxfp',
    brief: {
      sr: 'BN Autofolije je kompanija za zatamnjivanje stakala i zaštitne folije iz Novog Sada. Želeli su moderan sajt koji će profesionalno predstaviti njihove usluge, prikazati galeriju radova i generisati nove upite putem kontakt forme. Ključno je bilo da sajt izgleda premium i da se pozicionira na Google za lokalne pretrage.',
      en: 'BN Autofolije is a car window tinting and protective film company from Novi Sad. They wanted a modern site to professionally showcase services, display a work gallery and generate new leads via contact form. Key requirements were a premium look and Google ranking for local searches.',
    },
    stats: [
      { label: { sr: 'Trajanje', en: 'Timeline' }, value: '2 ned.' },
      { label: { sr: 'Platforma', en: 'Platform' }, value: 'React' },
      { label: { sr: 'Uloga', en: 'Role' }, value: 'Full Design & Dev' },
      { label: { sr: 'Alati', en: 'Tools' }, value: 'Figma, React, TailwindCSS' },
    ],
    challenge: {
      sr: 'Klijent nije imao web prisustvo — celokupan marketing se oslanjao na Instagram i preporuke. Potencijalni kupci nisu mogli da pronađu cenovnik, galeriju radova ili kontakt informacije na jednom mestu. Konkurencija je već zauzela prve pozicije na Google-u.',
      en: 'The client had no web presence — all marketing relied on Instagram and word-of-mouth. Potential customers couldn\'t find pricing, work gallery or contact info in one place. Competitors already held top Google positions.',
    },
    goal: {
      sr: 'Kreirati brz, vizuelno upečatljiv sajt koji prikazuje usluge i galeriju radova, generiše upite putem kontakt forme i rangira se na Google za "zatamnjivanje stakala Novi Sad" i slične pretrage.',
      en: 'Create a fast, visually striking site that showcases services and work gallery, generates leads through a contact form and ranks on Google for "car tinting Novi Sad" and similar queries.',
    },
    processSteps: [
      {
        title: { sr: 'Analiza i Planiranje', en: 'Analysis & Planning' },
        description: {
          sr: 'Konsultacije sa klijentom i analiza konkurencije u auto detailing industriji. Definisali smo strukturu sajta, ključne stranice i SEO strategiju za lokalne pretrage.',
          en: 'Client consultations and competitor analysis in the auto detailing industry. We defined the site structure, key pages and SEO strategy for local searches.',
        },
        image: 'https://placehold.co/800x500/1e1b4b/a78bfa?text=Analysis',
        caption: { sr: 'Analiza konkurencije i planiranje', en: 'Competitor analysis and planning' },
      },
      {
        title: { sr: 'Dizajn i Galerija', en: 'Design & Gallery' },
        description: {
          sr: 'Kreirali smo tamnu, premium temu koja odgovara auto detailing industriji. Galerija radova sa pre/posle fotografijama je implementirana sa smooth animacijama i lazy loading-om.',
          en: 'Created a dark, premium theme fitting the auto detailing industry. A before/after work gallery was implemented with smooth animations and lazy loading.',
        },
        image: 'https://placehold.co/800x500/1e1b4b/a78bfa?text=Design+%26+Gallery',
        caption: { sr: 'Premium tamna tema za auto brend', en: 'Premium dark theme for auto brand' },
      },
      {
        title: { sr: 'SEO i Lansiranje', en: 'SEO & Launch' },
        description: {
          sr: 'Kompletna on-page SEO optimizacija sa fokusom na lokalne ključne reči. Google My Business integracija i strukturirani podaci. Sajt je lansiran sa punom obuku za klijenta.',
          en: 'Complete on-page SEO optimization focused on local keywords. Google My Business integration and structured data. Site launched with full client training.',
        },
        image: 'https://placehold.co/800x500/1e1b4b/a78bfa?text=SEO+%26+Launch',
        caption: { sr: 'Lokalni SEO i Google vidljivost', en: 'Local SEO and Google visibility' },
      },
    ],
    results: [
      { value: '+320%', label: { sr: 'Više Upita', en: 'More Inquiries' } },
      { value: '1.5s', label: { sr: 'Vreme Učitavanja', en: 'Load Time' } },
      { value: '5.0★', label: { sr: 'Ocena Klijenta', en: 'Client Rating' } },
      { value: 'Top 3', label: { sr: 'Google Pozicija', en: 'Google Position' } },
    ],
    seo: {
      title: {
        sr: 'BN Autofolije Case Study | Izrada Sajta za Auto Detailing - AI Sajt',
        en: 'BN Autofolije Case Study | Car Detailing Website - AI Sajt',
      },
      description: {
        sr: 'Pogledajte kako smo kreirali profesionalan web sajt za BN Autofolije. +320% upita, Google top 3 pozicija, moderan dizajn. AI Sajt portfolio.',
        en: 'See how we created a professional website for BN Autofolije. +320% inquiries, Google top 3, modern design. AI Sajt portfolio.',
      },
      keywords: {
        sr: 'bn autofolije, izrada sajta za auto detailing, web dizajn novi sad, portfolio, case study',
        en: 'bn autofolije, car detailing website, web design novi sad, portfolio, case study',
      },
    },
    externalUrl: 'https://bnautofolije.com',
  },
  {
    slug: 'prestige-gradnja',
    projectTitle: {
      sr: 'Prestige Gradnja — Sajt za Nekretnine',
      en: 'Prestige Gradnja — Real Estate Website',
    },
    tagline: {
      sr: 'Moderan sajt koji prezentuje objekte i generiše kvalitetne upite za nekretnine.',
      en: 'A modern site that showcases properties and generates quality real estate leads.',
    },
    metaTags: {
      client: 'Prestige Gradnja',
      year: '2024',
      services: { sr: 'Web Dizajn, Razvoj', en: 'Web Design, Development' },
    },
    heroImage: 'https://aislike.rs/aisajt/prestige-min.png',
    brief: {
      sr: 'Prestige Gradnja gradi stambene objekte u Beogradu i okolini. Potreban im je bio sajt koji predstavlja projekte sa fotografijama, planovima spratova i kontakt formom. Fokus na kredibilitet i profesionalnu prezentaciju za kupce nekretnina.',
      en: 'Prestige Gradnja builds residential projects in and around Belgrade. They needed a site showcasing projects with photos, floor plans and contact form. Focus on credibility and professional presentation for property buyers.',
    },
    stats: [
      { label: { sr: 'Trajanje', en: 'Timeline' }, value: '4 ned.' },
      { label: { sr: 'Platforma', en: 'Platform' }, value: 'React' },
      { label: { sr: 'Uloga', en: 'Role' }, value: 'Full Design & Dev' },
      { label: { sr: 'Alati', en: 'Tools' }, value: 'Figma, React, TailwindCSS' },
    ],
    challenge: {
      sr: 'Klijent je koristio samo društvene mreže za promociju. Potencijalni kupci su imali poteškoća da pronađu informacije o projektima, cenama i dostupnosti. Nedostajao je centralizovan, profesionalan digitalni nastup.',
      en: 'The client relied only on social media for promotion. Potential buyers struggled to find project info, prices and availability. A centralized, professional digital presence was missing.',
    },
    goal: {
      sr: 'Kreirati sveobuhvatan sajt za nekretnine sa prikazom projekata, galerijom, planovima spratova i formom za upite. Sajt mora delovati premium i graditi poverenje.',
      en: 'Build a comprehensive real estate site with project showcase, gallery, floor plans and enquiry form. The site must feel premium and build trust.',
    },
    processSteps: [
      {
        title: { sr: 'Istraživanje i Struktura', en: 'Research & Structure' },
        description: {
          sr: 'Mapirali smo potrebe kupaca nekretnina i definisali informacionu arhitekturu. Svaki projekat ima svoju stranicu sa galerijom, planom sprata i kontakt formom.',
          en: 'We mapped property buyer needs and defined the information architecture. Each project has its own page with gallery, floor plan and contact form.',
        },
        image: 'https://placehold.co/800x500/1e1b4b/a78bfa?text=Research',
        caption: { sr: 'Informaciona arhitektura sajta', en: 'Site information architecture' },
      },
      {
        title: { sr: 'Dizajn i Razvoj', en: 'Design & Development' },
        description: {
          sr: 'Profesionalan dizajn sa fokusom na velike fotografije objekata i jasnu navigaciju. Implementiran je sistem za prikaz spratova i interaktivna galerija.',
          en: 'Professional design focused on large property photos and clear navigation. A floor plan display system and interactive gallery were implemented.',
        },
        image: 'https://placehold.co/800x500/1e1b4b/a78bfa?text=Design',
        caption: { sr: 'Premium dizajn za nekretnine', en: 'Premium real estate design' },
      },
      {
        title: { sr: 'Lansiranje i Promocija', en: 'Launch & Promotion' },
        description: {
          sr: 'Sajt je lansiran sa SEO bazom i integrisan sa društvenim mrežama. Klijent koristi sajt kao centralno mesto za sve promocije i komunikaciju sa kupcima.',
          en: 'The site launched with an SEO foundation and social media integration. The client uses it as the central hub for all promotions and buyer communications.',
        },
        image: 'https://placehold.co/800x500/1e1b4b/a78bfa?text=Launch',
        caption: { sr: 'Lansiranje sajta', en: 'Website launch' },
      },
    ],
    results: [
      { value: '+150%', label: { sr: 'Više Upita', en: 'More Inquiries' } },
      { value: '2.1s', label: { sr: 'Vreme Učitavanja', en: 'Load Time' } },
      { value: '5.0★', label: { sr: 'Ocena Klijenta', en: 'Client Rating' } },
      { value: '+200%', label: { sr: 'Online Vidljivost', en: 'Online Visibility' } },
    ],
    seo: {
      title: {
        sr: 'Prestige Gradnja Case Study | Izrada Sajta za Nekretnine - AI Sajt',
        en: 'Prestige Gradnja Case Study | Real Estate Website - AI Sajt',
      },
      description: {
        sr: 'Pogledajte kako smo kreirali sajt za Prestige Gradnja nekretnine. +150% upita, profesionalan prikaz projekata. AI Sajt portfolio.',
        en: 'See how we built a site for Prestige Gradnja real estate. +150% inquiries, professional project showcase. AI Sajt portfolio.',
      },
      keywords: {
        sr: 'prestige gradnja, izrada sajta za nekretnine, web dizajn beograd, portfolio, case study',
        en: 'prestige gradnja, real estate website, web design belgrade, portfolio, case study',
      },
    },
    externalUrl: 'https://prestigegradnja.rs',
  },
  {
    slug: 'custom-rc-parts',
    projectTitle: {
      sr: 'Custom RC Parts — E-commerce Web Shop',
      en: 'Custom RC Parts — E-commerce Web Shop',
    },
    tagline: {
      sr: 'Online prodavnica za RC delove sa katalogom, korpa i plaćanje.',
      en: 'Online store for RC parts with catalog, cart and payment integration.',
    },
    metaTags: {
      client: 'Custom RC Parts',
      year: '2024',
      services: { sr: 'Web Shop, Razvoj, SEO', en: 'Web Shop, Development, SEO' },
    },
    heroImage: 'https://aislike.rs/aisajt/rc-min.png',
    brief: {
      sr: 'Custom RC Parts je specijalizovana prodavnica za RC automobile, delove i opremu. Potreban je bio kompletan web shop sa kategorijama proizvoda, korpa, online plaćanje i praćenje narudžbina. Fokus na korisničko iskustvo i konverziju.',
      en: 'Custom RC Parts is a specialized store for RC cars, parts and equipment. A full e-commerce shop was needed with product categories, cart, online payment and order tracking. Focus on user experience and conversion.',
    },
    stats: [
      { label: { sr: 'Trajanje', en: 'Timeline' }, value: '5 ned.' },
      { label: { sr: 'Platforma', en: 'Platform' }, value: 'E-commerce' },
      { label: { sr: 'Uloga', en: 'Role' }, value: 'Full Design & Dev' },
      { label: { sr: 'Alati', en: 'Tools' }, value: 'Figma, React, Stripe' },
    ],
    challenge: {
      sr: 'RC zajednica je uglavnom kupovala preko društvenih mreža i grupnih poruka. Klijent je gubio prodaju jer nije imao formalizovanu online prodavnicu. Organizacija proizvoda i inventara je bila haotična.',
      en: 'The RC community mostly bought through social media and group messages. The client was losing sales without a formalized online store. Product and inventory organization was chaotic.',
    },
    goal: {
      sr: 'Razviti funkcionalan web shop sa jasnim kategorijama, filterima za pretragu, korpa za kupovinu i integracija sa online plaćanjem. Sve na jednom mestu za RC entuzijaste.',
      en: 'Build a functional web shop with clear categories, search filters, shopping cart and online payment integration. Everything in one place for RC enthusiasts.',
    },
    processSteps: [
      {
        title: { sr: 'Planiranje Strukture', en: 'Structure Planning' },
        description: {
          sr: 'Definisali smo kategorije proizvoda, tok kupovine i strukturu web shopa. Svaka kategorija je optimizovana za brzu pretragu i filtriranje.',
          en: 'We defined product categories, purchase flow and shop structure. Each category is optimized for quick search and filtering.',
        },
        image: 'https://placehold.co/800x500/1e1b4b/a78bfa?text=Planning',
        caption: { sr: 'Struktura web shopa', en: 'Web shop structure' },
      },
      {
        title: { sr: 'Dizajn i Razvoj Shopa', en: 'Shop Design & Development' },
        description: {
          sr: 'Kreiran je moderan e-commerce interfejs sa fokusom na proizvode. Implementirana je korpa za kupovinu, Stripe integracija i sistem za praćenje narudžbina.',
          en: 'A modern e-commerce interface was created with focus on products. Shopping cart, Stripe integration and order tracking system were implemented.',
        },
        image: 'https://placehold.co/800x500/1e1b4b/a78bfa?text=E-commerce+Dev',
        caption: { sr: 'E-commerce interfejs', en: 'E-commerce interface' },
      },
      {
        title: { sr: 'Testiranje i Lansiranje', en: 'Testing & Launch' },
        description: {
          sr: 'Temeljno testiranje svih funkcionalnosti: plaćanje, korpa, email notifikacije. Lansiranje sa optimizovanim proizvodnim stranicama za SEO.',
          en: 'Thorough testing of all features: payment, cart, email notifications. Launched with SEO-optimized product pages.',
        },
        image: 'https://placehold.co/800x500/1e1b4b/a78bfa?text=Testing+%26+Launch',
        caption: { sr: 'Testiranje i lansiranje', en: 'Testing and launch' },
      },
    ],
    results: [
      { value: '+400%', label: { sr: 'Rast Prodaje', en: 'Sales Growth' } },
      { value: '2.0s', label: { sr: 'Vreme Učitavanja', en: 'Load Time' } },
      { value: '5.0★', label: { sr: 'Ocena Klijenta', en: 'Client Rating' } },
      { value: '500+', label: { sr: 'Proizvoda Online', en: 'Products Online' } },
    ],
    seo: {
      title: {
        sr: 'Custom RC Parts Case Study | Izrada Web Shopa - AI Sajt',
        en: 'Custom RC Parts Case Study | E-commerce Development - AI Sajt',
      },
      description: {
        sr: 'Pogledajte kako smo kreirali web shop za Custom RC Parts. +400% rast prodaje, 500+ proizvoda online. AI Sajt portfolio.',
        en: 'See how we built an e-commerce shop for Custom RC Parts. +400% sales growth, 500+ products online. AI Sajt portfolio.',
      },
      keywords: {
        sr: 'custom rc parts, izrada web shopa, e-commerce, online prodavnica, case study',
        en: 'custom rc parts, web shop development, e-commerce, online store, case study',
      },
    },
    externalUrl: 'https://customrc.parts',
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudyData | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

/** Map from external portfolio URL → case study slug (for linking from portfolio cards) */
export const portfolioUrlToSlug: Record<string, string> = {
  'https://kraljresidence.rs': 'kralj-residence',
  'https://bnautofolije.com/': 'bn-autofolije',
  'https://bnautofolije.com': 'bn-autofolije',
  'https://prestigegradnja.rs/': 'prestige-gradnja',
  'https://prestigegradnja.rs': 'prestige-gradnja',
  'https://customrc.parts': 'custom-rc-parts',
  'https://customrc.parts/': 'custom-rc-parts',
};
