/**
 * Partyretter – i18n Translation System
 * Sprachen: de, en, fr, es, it, pl, tr, ru, nl
 *
 * Nutzung im HTML: data-i18n="KEY" oder data-i18n-placeholder="KEY"
 * Erweitern: Einfach neues Sprach-Objekt hinzufügen + in LANGUAGES eintragen.
 */

const LANGUAGES = {
  de: { flag: '🇩🇪', name: 'Deutsch' },
  en: { flag: '🇬🇧', name: 'English' },
  fr: { flag: '🇫🇷', name: 'Français' },
  es: { flag: '🇪🇸', name: 'Español' },
  it: { flag: '🇮🇹', name: 'Italiano' },
  pl: { flag: '🇵🇱', name: 'Polski' },
  tr: { flag: '🇹🇷', name: 'Türkçe' },
  ru: { flag: '🇷🇺', name: 'Русский' },
  nl: { flag: '🇳🇱', name: 'Nederlands' },
};

const T = {
  /* ── NAVIGATION ── */
  nav_events: {
    de: '<img src="logos/privatkoch.png" alt="" style="width:20px;height:20px;object-fit:contain;vertical-align:middle"> Koch-Events', en: '<img src="logos/privatkoch.png" alt="" style="width:20px;height:20px;object-fit:contain;vertical-align:middle"> Cooking Events', fr: '<img src="logos/privatkoch.png" alt="" style="width:20px;height:20px;object-fit:contain;vertical-align:middle"> Événements Culinaires',
    es: '<img src="logos/privatkoch.png" alt="" style="width:20px;height:20px;object-fit:contain;vertical-align:middle"> Eventos de Cocina', it: '<img src="logos/privatkoch.png" alt="" style="width:20px;height:20px;object-fit:contain;vertical-align:middle"> Eventi Culinari', pl: '<img src="logos/privatkoch.png" alt="" style="width:20px;height:20px;object-fit:contain;vertical-align:middle"> Wydarzenia Kulinarne',
    tr: '<img src="logos/privatkoch.png" alt="" style="width:20px;height:20px;object-fit:contain;vertical-align:middle"> Yemek Etkinlikleri', ru: '<img src="logos/privatkoch.png" alt="" style="width:20px;height:20px;object-fit:contain;vertical-align:middle"> Кулинарные события', nl: '<img src="logos/privatkoch.png" alt="" style="width:20px;height:20px;object-fit:contain;vertical-align:middle"> Kook-evenementen',
  },
  nav_trucks: {
    de: '<img src="logos/foodtruck.png" alt="" style="width:20px;height:20px;object-fit:contain;vertical-align:middle"> Foodtruck-Karte', en: '<img src="logos/foodtruck.png" alt="" style="width:20px;height:20px;object-fit:contain;vertical-align:middle"> Foodtruck Map', fr: '<img src="logos/foodtruck.png" alt="" style="width:20px;height:20px;object-fit:contain;vertical-align:middle"> Carte Foodtrucks',
    es: '<img src="logos/foodtruck.png" alt="" style="width:20px;height:20px;object-fit:contain;vertical-align:middle"> Mapa Foodtrucks', it: '<img src="logos/foodtruck.png" alt="" style="width:20px;height:20px;object-fit:contain;vertical-align:middle"> Mappa Foodtruck', pl: '<img src="logos/foodtruck.png" alt="" style="width:20px;height:20px;object-fit:contain;vertical-align:middle"> Mapa Foodtrucków',
    tr: '<img src="logos/foodtruck.png" alt="" style="width:20px;height:20px;object-fit:contain;vertical-align:middle"> Foodtruck Haritası', ru: '<img src="logos/foodtruck.png" alt="" style="width:20px;height:20px;object-fit:contain;vertical-align:middle"> Карта Фудтраков', nl: '<img src="logos/foodtruck.png" alt="" style="width:20px;height:20px;object-fit:contain;vertical-align:middle"> Foodtruck Kaart',
  },
  nav_blog: {
    de: '<img src="logos/rezepte.png" alt="" style="width:20px;height:20px;object-fit:contain;vertical-align:middle"> Rezepte', en: '<img src="logos/rezepte.png" alt="" style="width:20px;height:20px;object-fit:contain;vertical-align:middle"> Recipes', fr: '<img src="logos/rezepte.png" alt="" style="width:20px;height:20px;object-fit:contain;vertical-align:middle"> Recettes',
    es: '<img src="logos/rezepte.png" alt="" style="width:20px;height:20px;object-fit:contain;vertical-align:middle"> Recetas', it: '<img src="logos/rezepte.png" alt="" style="width:20px;height:20px;object-fit:contain;vertical-align:middle"> Ricette', pl: '<img src="logos/rezepte.png" alt="" style="width:20px;height:20px;object-fit:contain;vertical-align:middle"> Przepisy',
    tr: '<img src="logos/rezepte.png" alt="" style="width:20px;height:20px;object-fit:contain;vertical-align:middle"> Tarifler', ru: '<img src="logos/rezepte.png" alt="" style="width:20px;height:20px;object-fit:contain;vertical-align:middle"> Рецепты', nl: '<img src="logos/rezepte.png" alt="" style="width:20px;height:20px;object-fit:contain;vertical-align:middle"> Recepten',
  },
  nav_login: {
    de: 'Anmelden', en: 'Log in', fr: 'Connexion',
    es: 'Iniciar sesión', it: 'Accedi', pl: 'Zaloguj się',
    tr: 'Giriş Yap', ru: 'Войти', nl: 'Inloggen',
  },
  nav_cta: {
    de: 'Event ausschreiben →', en: 'Post event →', fr: 'Publier un événement →',
    es: 'Publicar evento →', it: 'Pubblica evento →', pl: 'Opublikuj wydarzenie →',
    tr: 'Etkinlik yayınla →', ru: 'Опубликовать событие →', nl: 'Evenement plaatsen →',
  },

  /* ── HERO ── */
  hero_mascot_sub: {
    de: 'Lass Dich bekochen – dein Partyretter', en: 'Let yourself be cooked for – your party saver',
    fr: 'Laissez-vous cuisiner – votre sauveteur de fête', es: 'Déjate cocinar – tu salvador de fiestas',
    it: 'Lasciati cucinare – il tuo salvafesta', pl: 'Daj się ugotować – twój ratunek imprezy',
    tr: 'Kendine pişirilmesine izin ver – parti kurtarıcın', ru: 'Дайте себе отдохнуть – ваш спаситель вечеринки',
    nl: 'Laat je verwennen – jouw feestredder',
  },
  hero_h1_1: {
    de: 'Dein Koch.', en: 'Your Chef.', fr: 'Votre Chef.',
    es: 'Tu Chef.', it: 'Il Tuo Chef.', pl: 'Twój Kucharz.',
    tr: 'Senin Şefin.', ru: 'Твой Шеф.', nl: 'Jouw Kok.',
  },
  hero_h1_2: {
    de: 'Deine Party. Dein Moment.', en: 'Your Party. Your Moment.', fr: 'Votre Fête. Votre Moment.',
    es: 'Tu Fiesta. Tu Momento.', it: 'La Tua Festa. Il Tuo Momento.', pl: 'Twoja Impreza. Twój Moment.',
    tr: 'Senin Partин. Senin Anın.', ru: 'Твоя Вечеринка. Твой Момент.', nl: 'Jouw Feest. Jouw Moment.',
  },
  hero_sub: {
    de: 'Profiköche, Foodtrucks & mehr – einfach suchen, buchen, feiern.',
    en: 'Professional chefs, foodtrucks & more – search, book, celebrate.',
    fr: 'Chefs pros, foodtrucks & plus – cherchez, réservez, célébrez.',
    es: 'Chefs profesionales, foodtrucks & más – busca, reserva, celebra.',
    it: 'Chef professionisti, foodtruck & altro – cerca, prenota, festeggia.',
    pl: 'Profesjonalni kucharze, foodtrucki i więcej – szukaj, rezerwuj, świętuj.',
    tr: 'Profesyonel şefler, foodtrucklar ve daha fazlası – ara, rezervasyon yap, kutla.',
    ru: 'Профессиональные повара, фудтраки и многое другое – ищите, бронируйте, празднуйте.',
    nl: 'Professionele koks, foodtrucks & meer – zoek, boek, vier feest.',
  },
  tab_search: {
    de: '🔍 Suchen', en: '🔍 Search', fr: '🔍 Rechercher',
    es: '🔍 Buscar', it: '🔍 Cerca', pl: '🔍 Szukaj',
    tr: '🔍 Ara', ru: '🔍 Поиск', nl: '🔍 Zoeken',
  },
  tab_offer: {
    de: '📣 Anbieten', en: '📣 Offer', fr: '📣 Proposer',
    es: '📣 Ofrecer', it: '📣 Offrire', pl: '📣 Oferować',
    tr: '📣 Teklif Ver', ru: '📣 Предложить', nl: '📣 Aanbieden',
  },
  tab_partyretter: {
    de: '🎉 Partyretter werden', en: '🎉 Become a Partyretter', fr: '🎉 Devenir Partyretter',
    es: '🎉 Ser Partyretter', it: '🎉 Diventa Partyretter', pl: '🎉 Zostań Partyretter',
    tr: '🎉 Partyretter Ol', ru: '🎉 Стать Partyretter', nl: '🎉 Word Partyretter',
  },
  search_where: {
    de: 'Wo', en: 'Where', fr: 'Où',
    es: 'Dónde', it: 'Dove', pl: 'Gdzie',
    tr: 'Nerede', ru: 'Где', nl: 'Waar',
  },
  search_where_ph: {
    de: 'Stadt oder PLZ', en: 'City or postcode', fr: 'Ville ou code postal',
    es: 'Ciudad o código postal', it: 'Città o CAP', pl: 'Miasto lub kod pocztowy',
    tr: 'Şehir veya posta kodu', ru: 'Город или почтовый индекс', nl: 'Stad of postcode',
  },
  search_radius: {
    de: 'Umkreis', en: 'Radius', fr: 'Rayon',
    es: 'Radio', it: 'Raggio', pl: 'Promień',
    tr: 'Yarıçap', ru: 'Радиус', nl: 'Straal',
  },
  search_when: {
    de: 'Wann', en: 'When', fr: 'Quand',
    es: 'Cuándo', it: 'Quando', pl: 'Kiedy',
    tr: 'Ne Zaman', ru: 'Когда', nl: 'Wanneer',
  },

  /* ── TRUST BAR ── */
  trust_providers: {
    de: 'Geprüfte Anbieter', en: 'Verified providers', fr: 'Prestataires vérifiés',
    es: 'Proveedores verificados', it: 'Fornitori verificati', pl: 'Zweryfikowani dostawcy',
    tr: 'Doğrulanmış sağlayıcılar', ru: 'Проверенные поставщики', nl: 'Geverifieerde aanbieders',
  },
  trust_rating: {
    de: 'Bewertungen & Fotos', en: 'Reviews & photos', fr: 'Avis & photos',
    es: 'Valoraciones y fotos', it: 'Recensioni e foto', pl: 'Opinie i zdjęcia',
    tr: 'Değerlendirmeler ve fotoğraflar', ru: 'Отзывы и фото', nl: 'Beoordelingen en foto\'s',
  },
  trust_events: {
    de: 'Events einfach planen', en: 'Plan events easily', fr: 'Planifier facilement des événements',
    es: 'Planifica eventos fácilmente', it: 'Pianifica eventi facilmente', pl: 'Planuj wydarzenia łatwo',
    tr: 'Etkinlikleri kolayca planlayın', ru: 'Планируйте события легко', nl: 'Plan evenementen eenvoudig',
  },

  /* ── SECTIONS ── */
  sec_popular: {
    de: '🔥 Beliebt in deiner Nähe', en: '🔥 Popular near you', fr: '🔥 Populaire près de chez vous',
    es: '🔥 Popular cerca de ti', it: '🔥 Popolare vicino a te', pl: '🔥 Popularne w pobliżu',
    tr: '🔥 Yakınındaki Popüler', ru: '🔥 Популярное рядом с вами', nl: '🔥 Populair bij jou in de buurt',
  },
  sec_show_all: {
    de: 'Alle anzeigen →', en: 'View all →', fr: 'Voir tout →',
    es: 'Ver todo →', it: 'Vedi tutto →', pl: 'Zobacz wszystko →',
    tr: 'Tümünü gör →', ru: 'Посмотреть все →', nl: 'Alles bekijken →',
  },
  sec_recent: {
    de: '🕐 Neueste Anzeigen in deinem Umkreis', en: '🕐 Latest listings near you', fr: '🕐 Dernières annonces près de chez vous',
    es: '🕐 Últimos anuncios cerca de ti', it: '🕐 Ultimi annunci vicino a te', pl: '🕐 Najnowsze ogłoszenia w pobliżu',
    tr: '🕐 Yakınındaki Son İlanlar', ru: '🕐 Новые объявления рядом', nl: '🕐 Nieuwste advertenties bij jou',
  },
  sec_requests: {
    de: '📣 Suchanfragen in deiner Nähe', en: '📣 Event requests near you', fr: '📣 Demandes d\'événements près de vous',
    es: '📣 Solicitudes de eventos cerca', it: '📣 Richieste eventi vicino a te', pl: '📣 Zapytania o imprezy w pobliżu',
    tr: '📣 Yakınındaki Etkinlik Talepleri', ru: '📣 Запросы на мероприятия рядом', nl: '📣 Evenementverzoeken bij jou',
  },
  sec_requests_sub: {
    de: 'Kunden suchen Anbieter – bewirb dich direkt auf offene Eventanfragen',
    en: 'Customers are looking for providers – apply directly to open event requests',
    fr: 'Des clients cherchent des prestataires – postulez directement aux demandes ouvertes',
    es: 'Los clientes buscan proveedores – solicita directamente las peticiones abiertas',
    it: 'I clienti cercano fornitori – candidati direttamente alle richieste aperte',
    pl: 'Klienci szukają dostawców – aplikuj bezpośrednio na otwarte zlecenia',
    tr: 'Müşteriler sağlayıcı arıyor – açık etkinlik taleplerine doğrudan başvur',
    ru: 'Клиенты ищут поставщиков – подайте заявку на открытые запросы',
    nl: 'Klanten zoeken aanbieders – reageer direct op openstaande evenementverzoeken',
  },
  sec_lastminute: {
    de: 'Last-Minute Angebote', en: 'Last-Minute Deals', fr: 'Offres Last-Minute',
    es: 'Ofertas de Última Hora', it: 'Offerte Last-Minute', pl: 'Oferty Last-Minute',
    tr: 'Son Dakika Teklifleri', ru: 'Предложения в последний момент', nl: 'Last-Minute Aanbiedingen',
  },
  sec_sponsored: {
    de: '💛 WERBUNG', en: '💛 SPONSORED', fr: '💛 PUBLICITÉ',
    es: '💛 PUBLICIDAD', it: '💛 PUBBLICITÀ', pl: '💛 REKLAMA',
    tr: '💛 REKLAM', ru: '💛 РЕКЛАМА', nl: '💛 ADVERTENTIE',
  },
  sec_sponsored_sub: {
    de: 'Gesponserte Anzeigen', en: 'Sponsored listings', fr: 'Annonces sponsorisées',
    es: 'Anuncios patrocinados', it: 'Annunci sponsorizzati', pl: 'Ogłoszenia sponsorowane',
    tr: 'Sponsorlu ilanlar', ru: 'Спонсируемые объявления', nl: 'Gesponsorde advertenties',
  },
  sec_advertise: {
    de: 'Hier werben →', en: 'Advertise here →', fr: 'Annoncez ici →',
    es: 'Anunciate aquí →', it: 'Pubblicità qui →', pl: 'Reklamuj tutaj →',
    tr: 'Buraya reklam ver →', ru: 'Рекламируйтесь здесь →', nl: 'Adverteer hier →',
  },

  /* ── SO GEHT'S ── */
  howto_title: {
    de: 'So funktioniert Partyretter', en: 'How Partyretter works', fr: 'Comment fonctionne Partyretter',
    es: 'Cómo funciona Partyretter', it: 'Come funziona Partyretter', pl: 'Jak działa Partyretter',
    tr: 'Partyretter nasıl çalışır', ru: 'Как работает Partyretter', nl: 'Hoe werkt Partyretter',
  },
  howto_sub: {
    de: 'In 3 Schritten zum perfekten Event – einfach, schnell, zuverlässig.',
    en: '3 steps to the perfect event – simple, fast, reliable.',
    fr: '3 étapes pour l\'événement parfait – simple, rapide, fiable.',
    es: '3 pasos para el evento perfecto – simple, rápido, confiable.',
    it: '3 passi per l\'evento perfetto – semplice, veloce, affidabile.',
    pl: '3 kroki do idealnego eventu – prosto, szybko, niezawodnie.',
    tr: 'Mükemmel etkinlik için 3 adım – basit, hızlı, güvenilir.',
    ru: '3 шага до идеального мероприятия – просто, быстро, надёжно.',
    nl: '3 stappen naar het perfecte evenement – eenvoudig, snel, betrouwbaar.',
  },
  step1_label: {
    de: 'Schritt 1', en: 'Step 1', fr: 'Étape 1',
    es: 'Paso 1', it: 'Passo 1', pl: 'Krok 1',
    tr: 'Adım 1', ru: 'Шаг 1', nl: 'Stap 1',
  },
  step1_title: {
    de: 'Suchen & Vergleichen', en: 'Search & Compare', fr: 'Chercher & Comparer',
    es: 'Buscar & Comparar', it: 'Cerca & Confronta', pl: 'Szukaj i Porównuj',
    tr: 'Ara ve Karşılaştır', ru: 'Поиск и сравнение', nl: 'Zoeken & Vergelijken',
  },
  step1_desc: {
    de: 'Gib deinen Standort und dein Datum ein. Finde sofort geprüfte Köche, Foodtrucks, Caterer und mehr in deiner Nähe.',
    en: 'Enter your location and date. Instantly find verified chefs, foodtrucks, caterers and more near you.',
    fr: 'Entrez votre lieu et date. Trouvez instantanément des chefs, foodtrucks, traiteurs vérifiés près de chez vous.',
    es: 'Introduce tu ubicación y fecha. Encuentra al instante chefs, foodtrucks, caterers verificados cerca de ti.',
    it: 'Inserisci la tua posizione e data. Trova subito chef, foodtruck, catering verificati vicino a te.',
    pl: 'Wprowadź swoje miejsce i datę. Natychmiast znajdź zweryfikowanych kucharzy, foodtrucki, firmy cateringowe.',
    tr: 'Konumunu ve tarihini gir. Yakınındaki doğrulanmış şefleri, foodtruckları, catering şirketlerini anında bul.',
    ru: 'Введите ваше местоположение и дату. Мгновенно найдите проверенных поваров, фудтраки, кейтеринг рядом.',
    nl: 'Voer je locatie en datum in. Vind direct geverifieerde koks, foodtrucks, cateraars en meer bij jou in de buurt.',
  },
  step2_label: {
    de: 'Schritt 2', en: 'Step 2', fr: 'Étape 2',
    es: 'Paso 2', it: 'Passo 2', pl: 'Krok 2',
    tr: 'Adım 2', ru: 'Шаг 2', nl: 'Stap 2',
  },
  step2_title: {
    de: 'Anfragen & Abstimmen', en: 'Request & Discuss', fr: 'Demander & Discuter',
    es: 'Solicitar & Coordinar', it: 'Richiedere & Discutere', pl: 'Zapytaj i Uzgodnij',
    tr: 'İste ve Müzakere Et', ru: 'Запрос и обсуждение', nl: 'Aanvragen & Afstemmen',
  },
  step2_desc: {
    de: 'Schick eine Anfrage direkt an deinen Wunsch-Anbieter. Kläre Details, Menü und Preis – alles über die Plattform.',
    en: 'Send a request directly to your preferred provider. Discuss details, menu and price – all via the platform.',
    fr: 'Envoyez une demande directement à votre prestataire préféré. Clarifiez les détails, le menu et le prix.',
    es: 'Envía una solicitud directamente a tu proveedor preferido. Aclara detalles, menú y precio en la plataforma.',
    it: 'Invia una richiesta direttamente al tuo fornitore preferito. Chiarisci dettagli, menù e prezzo sulla piattaforma.',
    pl: 'Wyślij zapytanie bezpośrednio do wybranego dostawcy. Ustal szczegóły, menu i cenę – wszystko przez platformę.',
    tr: 'Tercih ettiğin sağlayıcıya doğrudan istek gönder. Detayları, menüyü ve fiyatı platform üzerinden görüş.',
    ru: 'Отправьте запрос напрямую выбранному поставщику. Обсудите детали, меню и цену на платформе.',
    nl: 'Stuur een aanvraag direct naar je favoriete aanbieder. Bespreek details, menu en prijs – alles via het platform.',
  },
  step3_label: {
    de: 'Schritt 3', en: 'Step 3', fr: 'Étape 3',
    es: 'Paso 3', it: 'Passo 3', pl: 'Krok 3',
    tr: 'Adım 3', ru: 'Шаг 3', nl: 'Stap 3',
  },
  step3_title: {
    de: 'Buchen & Feiern', en: 'Book & Celebrate', fr: 'Réserver & Fêter',
    es: 'Reservar & Celebrar', it: 'Prenotare & Festeggiare', pl: 'Zarezerwuj i Świętuj',
    tr: 'Rezervasyon Yap ve Kutla', ru: 'Бронировать и праздновать', nl: 'Boeken & Vieren',
  },
  step3_desc: {
    de: 'Buchung bestätigen – fertig. Dein Anbieter kommt pünktlich, du lehnst dich zurück und genießt dein Event.',
    en: 'Confirm the booking – done. Your provider arrives on time, you sit back and enjoy your event.',
    fr: 'Confirmez la réservation – c\'est fait. Votre prestataire arrive à l\'heure, vous profitez de votre événement.',
    es: 'Confirma la reserva – listo. Tu proveedor llega a tiempo, tú te relajas y disfrutas tu evento.',
    it: 'Conferma la prenotazione – fatto. Il tuo fornitore arriva puntuale, tu ti godi il tuo evento.',
    pl: 'Potwierdź rezerwację – gotowe. Twój dostawca przyjedzie punktualnie, ty siedzisz i cieszysz się imprezą.',
    tr: 'Rezervasyonu onayla – tamam. Sağlayıcın zamanında gelir, sen etkinliğinin tadını çıkarırsın.',
    ru: 'Подтвердите бронирование – готово. Ваш поставщик прибудет вовремя, вы расслабляетесь и наслаждаетесь.',
    nl: 'Bevestig de boeking – klaar. Je aanbieder komt op tijd, jij leunt achterover en geniet van je evenement.',
  },

  /* ── TWEE WEGEN ── */
  twoways_title: {
    de: 'Zwei Wege – ein Ziel', en: 'Two paths – one goal', fr: 'Deux chemins – un objectif',
    es: 'Dos caminos – un objetivo', it: 'Due strade – un obiettivo', pl: 'Dwie drogi – jeden cel',
    tr: 'İki Yol – Bir Hedef', ru: 'Два пути – одна цель', nl: 'Twee wegen – één doel',
  },
  twoways_sub: {
    de: 'Ob du ein Event planst oder selbst Anbieter bist – Partyretter ist deine Plattform.',
    en: 'Whether you\'re planning an event or you\'re a provider – Partyretter is your platform.',
    fr: 'Que vous planifiez un événement ou soyez prestataire – Partyretter est votre plateforme.',
    es: 'Ya sea que planees un evento o seas proveedor – Partyretter es tu plataforma.',
    it: 'Che tu stia pianificando un evento o sia un fornitore – Partyretter è la tua piattaforma.',
    pl: 'Niezależnie czy planujesz event czy jesteś dostawcą – Partyretter to twoja platforma.',
    tr: 'İster bir etkinlik planlıyor ol ister sağlayıcı – Partyretter senin platformun.',
    ru: 'Планируете мероприятие или являетесь поставщиком – Partyretter ваша платформа.',
    nl: 'Of je nu een evenement plant of aanbieder bent – Partyretter is jouw platform.',
  },
  for_customers: {
    de: 'Für Kunden', en: 'For Customers', fr: 'Pour les Clients',
    es: 'Para Clientes', it: 'Per i Clienti', pl: 'Dla Klientów',
    tr: 'Müşteriler İçin', ru: 'Для клиентов', nl: 'Voor Klanten',
  },
  for_providers: {
    de: 'Für Anbieter', en: 'For Providers', fr: 'Pour les Prestataires',
    es: 'Para Proveedores', it: 'Per i Fornitori', pl: 'Dla Dostawców',
    tr: 'Sağlayıcılar İçin', ru: 'Для поставщиков', nl: 'Voor Aanbieders',
  },
  cta_search_btn: {
    de: 'Jetzt suchen →', en: 'Search now →', fr: 'Chercher maintenant →',
    es: 'Buscar ahora →', it: 'Cerca ora →', pl: 'Szukaj teraz →',
    tr: 'Şimdi Ara →', ru: 'Найти сейчас →', nl: 'Nu zoeken →',
  },
  cta_provider_btn: {
    de: 'Anbieter werden →', en: 'Become a provider →', fr: 'Devenir prestataire →',
    es: 'Ser proveedor →', it: 'Diventa fornitore →', pl: 'Zostań dostawcą →',
    tr: 'Sağlayıcı Ol →', ru: 'Стать поставщиком →', nl: 'Word aanbieder →',
  },
  customer_p1: {
    de: 'Geprüfte Anbieter in deiner Region', en: 'Verified providers in your area', fr: 'Prestataires vérifiés dans votre région',
    es: 'Proveedores verificados en tu región', it: 'Fornitori verificati nella tua zona', pl: 'Zweryfikowani dostawcy w Twoim regionie',
    tr: 'Bölgenizdeki doğrulanmış sağlayıcılar', ru: 'Проверенные поставщики в вашем регионе', nl: 'Geverifieerde aanbieders in jouw regio',
  },
  customer_p2: {
    de: 'Einfache Anfrage in 2 Minuten', en: 'Easy request in 2 minutes', fr: 'Demande facile en 2 minutes',
    es: 'Solicitud sencilla en 2 minutos', it: 'Richiesta semplice in 2 minuti', pl: 'Proste zapytanie w 2 minuty',
    tr: '2 dakikada kolay talep', ru: 'Простой запрос за 2 минуты', nl: 'Eenvoudig verzoek in 2 minuten',
  },
  customer_p3: {
    de: 'Event ausschreiben & Angebote sammeln', en: 'Post your event & collect offers', fr: 'Publiez votre événement & recevez des offres',
    es: 'Publica tu evento y recibe ofertas', it: 'Pubblica l\'evento e raccogli offerte', pl: 'Opisz event i zbieraj oferty',
    tr: 'Etkinliğini yayınla ve teklifler al', ru: 'Опубликуйте мероприятие и получите предложения', nl: 'Evenement plaatsen & offertes verzamelen',
  },
  customer_p4: {
    de: 'Bewertungen & Fotos für Vertrauen', en: 'Reviews & photos for trust', fr: 'Avis & photos pour la confiance',
    es: 'Valoraciones y fotos para confianza', it: 'Recensioni e foto per la fiducia', pl: 'Opinie i zdjęcia dla zaufania',
    tr: 'Güven için değerlendirmeler ve fotoğraflar', ru: 'Отзывы и фото для доверия', nl: 'Beoordelingen & foto\'s voor vertrouwen',
  },
  provider_p1: {
    de: 'Kostenloses Profil erstellen', en: 'Create a free profile', fr: 'Créer un profil gratuit',
    es: 'Crear un perfil gratuito', it: 'Crea un profilo gratuito', pl: 'Utwórz darmowy profil',
    tr: 'Ücretsiz profil oluştur', ru: 'Создайте бесплатный профиль', nl: 'Maak gratis een profiel',
  },
  provider_p2: {
    de: 'Neue Kunden ohne Eigenmarketing', en: 'New customers without self-marketing', fr: 'Nouveaux clients sans auto-marketing',
    es: 'Nuevos clientes sin automarketing', it: 'Nuovi clienti senza automarketing', pl: 'Nowi klienci bez własnego marketingu',
    tr: 'Kendi pazarlaması olmadan yeni müşteriler', ru: 'Новые клиенты без саморекламы', nl: 'Nieuwe klanten zonder eigenmarketing',
  },
  provider_p3: {
    de: 'Auf Suchanfragen bewerben', en: 'Apply to event requests', fr: 'Postuler aux demandes d\'événements',
    es: 'Solicitar peticiones de eventos', it: 'Candidarsi alle richieste di eventi', pl: 'Aplikuj na zapytania',
    tr: 'Etkinlik taleplerine başvur', ru: 'Подавайте заявки на запросы', nl: 'Reageer op evenementverzoeken',
  },
  provider_p4: {
    de: 'Starter kostenlos · nur 6 % bei Buchung', en: 'Starter free · only 6% on booking', fr: 'Starter gratuit · seulement 6% à la réservation',
    es: 'Starter gratis · solo 6% en la reserva', it: 'Starter gratuito · solo 6% alla prenotazione', pl: 'Starter gratis · tylko 6% przy rezerwacji',
    tr: 'Starter ücretsiz · sadece %6 komisyon', ru: 'Starter бесплатно · только 6% при бронировании', nl: 'Starter gratis · slechts 6% bij boeking',
  },

  /* ── PREISE ── */
  prices_title: {
    de: 'Preise & Provision', en: 'Pricing & Commission', fr: 'Tarifs & Commission',
    es: 'Precios & Comisión', it: 'Prezzi & Commissione', pl: 'Ceny & Prowizja',
    tr: 'Fiyatlar & Komisyon', ru: 'Цены и комиссия', nl: 'Prijzen & Provisie',
  },
  prices_sub: {
    de: 'Transparent, fair, ohne versteckte Kosten.', en: 'Transparent, fair, no hidden costs.',
    fr: 'Transparent, équitable, sans frais cachés.', es: 'Transparente, justo, sin costes ocultos.',
    it: 'Trasparente, equo, senza costi nascosti.', pl: 'Transparentnie, uczciwie, bez ukrytych kosztów.',
    tr: 'Şeffaf, adil, gizli maliyet yok.', ru: 'Прозрачно, честно, без скрытых затрат.', nl: 'Transparant, eerlijk, geen verborgen kosten.',
  },
  price_customer_label: {
    de: 'Für Kunden', en: 'For Customers', fr: 'Pour les Clients',
    es: 'Para Clientes', it: 'Per i Clienti', pl: 'Dla Klientów',
    tr: 'Müşteriler İçin', ru: 'Для клиентов', nl: 'Voor Klanten',
  },
  price_customer_desc: {
    de: 'Suchen, Anfragen und Vergleichen ist völlig kostenlos.',
    en: 'Searching, requesting and comparing is completely free.',
    fr: 'Chercher, demander et comparer est totalement gratuit.',
    es: 'Buscar, solicitar y comparar es completamente gratuito.',
    it: 'Cercare, richiedere e confrontare è completamente gratuito.',
    pl: 'Wyszukiwanie, zapytania i porównywanie są całkowicie bezpłatne.',
    tr: 'Arama, talep ve karşılaştırma tamamen ücretsizdir.',
    ru: 'Поиск, запросы и сравнение абсолютно бесплатны.',
    nl: 'Zoeken, aanvragen en vergelijken is volledig gratis.',
  },
  price_provider_label: {
    de: 'Für Anbieter', en: 'For Providers', fr: 'Pour les Prestataires',
    es: 'Para Proveedores', it: 'Per i Fornitori', pl: 'Dla Dostawców',
    tr: 'Sağlayıcılar İçin', ru: 'Для поставщиков', nl: 'Voor Aanbieders',
  },
  price_provider_desc: {
    de: 'Provision nur bei erfolgreicher Buchung. Kein Abo, kein Risiko.',
    en: 'Commission only on successful booking. No subscription, no risk.',
    fr: 'Commission uniquement sur réservation réussie. Pas d\'abonnement, pas de risque.',
    es: 'Comisión solo con reserva exitosa. Sin suscripción, sin riesgo.',
    it: 'Commissione solo su prenotazione riuscita. Nessun abbonamento, nessun rischio.',
    pl: 'Prowizja tylko przy udanej rezerwacji. Brak abonamentu, brak ryzyka.',
    tr: 'Komisyon yalnızca başarılı rezervasyonda. Abonelik yok, risk yok.',
    ru: 'Комиссия только при успешном бронировании. Без подписки, без риска.',
    nl: 'Provisie alleen bij succesvolle boeking. Geen abonnement, geen risico.',
  },
  prices_footer: {
    de: 'Kein Monatsabo · Keine versteckten Gebühren · Kündigung jederzeit möglich',
    en: 'No monthly subscription · No hidden fees · Cancel anytime',
    fr: 'Pas d\'abonnement mensuel · Pas de frais cachés · Résiliation à tout moment',
    es: 'Sin suscripción mensual · Sin tarifas ocultas · Cancela en cualquier momento',
    it: 'Nessun abbonamento mensile · Nessun costo nascosto · Disdetta in qualsiasi momento',
    pl: 'Brak miesięcznego abonamentu · Brak ukrytych opłat · Anuluj w dowolnym momencie',
    tr: 'Aylık abonelik yok · Gizli ücret yok · İstediğin zaman iptal et',
    ru: 'Без ежемесячной подписки · Без скрытых платежей · Отмена в любое время',
    nl: 'Geen maandabonnement · Geen verborgen kosten · Op elk moment opzeggen',
  },

  /* ── FOOTER ── */
  footer_tagline: {
    de: 'Von Dinner für 2 bis Festival für 500 – wir finden deinen Retter.',
    en: 'From dinner for 2 to festival for 500 – we find your party saver.',
    fr: 'Du dîner pour 2 au festival pour 500 – nous trouvons votre sauveur.',
    es: 'De cena para 2 a festival para 500 – encontramos tu salvador.',
    it: 'Dalla cena per 2 al festival per 500 – troviamo il tuo salvatore.',
    pl: 'Od kolacji dla 2 do festiwalu dla 500 – znajdziemy twojego ratownika.',
    tr: '2 kişilik akşam yemeğinden 500 kişilik festivale – kurtarıcını buluyoruz.',
    ru: 'От ужина на 2 до фестиваля на 500 – мы найдём вашего спасителя.',
    nl: 'Van diner voor 2 tot festival voor 500 – wij vinden jouw redder.',
  },
  footer_h_customers: {
    de: 'Für Kunden', en: 'For Customers', fr: 'Pour les Clients',
    es: 'Para Clientes', it: 'Per i Clienti', pl: 'Dla Klientów',
    tr: 'Müşteriler İçin', ru: 'Для клиентов', nl: 'Voor Klanten',
  },
  footer_h_providers: {
    de: 'Für Anbieter', en: 'For Providers', fr: 'Pour les Prestataires',
    es: 'Para Proveedores', it: 'Per i Fornitori', pl: 'Dla Dostawców',
    tr: 'Sağlayıcılar İçin', ru: 'Для поставщиков', nl: 'Voor Aanbieders',
  },
  footer_h_legal: {
    de: 'Rechtliches', en: 'Legal', fr: 'Mentions légales',
    es: 'Legal', it: 'Note legali', pl: 'Informacje prawne',
    tr: 'Yasal', ru: 'Правовая информация', nl: 'Juridisch',
  },
  footer_copy: {
    de: '© 2026 Partyretter · Alle Rechte vorbehalten',
    en: '© 2026 Partyretter · All rights reserved',
    fr: '© 2026 Partyretter · Tous droits réservés',
    es: '© 2026 Partyretter · Todos los derechos reservados',
    it: '© 2026 Partyretter · Tutti i diritti riservati',
    pl: '© 2026 Partyretter · Wszelkie prawa zastrzeżone',
    tr: '© 2026 Partyretter · Tüm hakları saklıdır',
    ru: '© 2026 Partyretter · Все права защищены',
    nl: '© 2026 Partyretter · Alle rechten voorbehouden',
  },
  footer_madein: {
    de: 'Made with ❤️ in Ulm', en: 'Made with ❤️ in Ulm', fr: 'Fait avec ❤️ à Ulm',
    es: 'Hecho con ❤️ en Ulm', it: 'Fatto con ❤️ a Ulm', pl: 'Zrobione z ❤️ w Ulm',
    tr: 'Ulm\'da ❤️ ile yapıldı', ru: 'Сделано с ❤️ в Ульме', nl: 'Gemaakt met ❤️ in Ulm',
  },

  /* ── SIDEBAR CATEGORIES (static labels) ── */
  kat_heading: {
    de: 'Kategorien', en: 'Categories', fr: 'Catégories',
    es: 'Categorías', it: 'Categorie', pl: 'Kategorie',
    tr: 'Kategoriler', ru: 'Категории', nl: 'Categorieën',
  },
  kat_show_all: {
    de: 'Alle anzeigen', en: 'View all', fr: 'Voir tout',
    es: 'Ver todo', it: 'Vedi tutto', pl: 'Zobacz wszystko',
    tr: 'Tümünü gör', ru: 'Посмотреть все', nl: 'Alles bekijken',
  },
};

/* ═══════════════════════════════════════════
   CORE ENGINE
   ═══════════════════════════════════════════ */
const I18N_KEY = 'mpr_lang';

function getLang() {
  return localStorage.getItem(I18N_KEY) ||
    (navigator.language || 'de').slice(0, 2).toLowerCase() in T.nav_login ? (navigator.language || 'de').slice(0, 2) : 'de';
}

function t(key, lang) {
  const l = lang || getLang();
  return (T[key] && (T[key][l] || T[key]['de'])) || key;
}

function applyLang(lang) {
  localStorage.setItem(I18N_KEY, lang);
  // Text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    el.innerHTML = t(key, lang);
  });
  // Placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPh, lang);
  });
  // HTML (for elements with inner markup)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t(el.dataset.i18nHtml, lang);
  });
  // Update switcher button label
  const btn = document.getElementById('lang-btn-label');
  if (btn && LANGUAGES[lang]) {
    btn.textContent = LANGUAGES[lang].flag + ' ' + lang.toUpperCase();
  }
  // Set html lang attribute
  document.documentElement.lang = lang;
}

/* ── Language Switcher UI ── */
function buildLangSwitcher() {
  const container = document.getElementById('lang-switcher');
  if (!container) return;

  const current = getLang();
  container.innerHTML = `
    <button id="lang-btn" onclick="toggleLangMenu(event)"
      style="display:flex;align-items:center;gap:6px;background:transparent;border:1px solid rgba(245,240,232,0.22);
             color:rgba(245,240,232,0.78);padding:7px 12px;border-radius:6px;font-size:13px;font-weight:600;
             cursor:pointer;font-family:inherit;transition:all 0.2s;"
      onmouseover="this.style.borderColor='var(--gold)';this.style.color='var(--gold)'"
      onmouseout="this.style.borderColor='rgba(245,240,232,0.22)';this.style.color='rgba(245,240,232,0.78)'">
      <span id="lang-btn-label">${LANGUAGES[current].flag} ${current.toUpperCase()}</span>
      <span style="font-size:10px;opacity:0.6;">▾</span>
    </button>
    <div id="lang-menu" style="display:none;position:absolute;top:calc(100% + 8px);right:0;
         background:#fff;border:1.5px solid #e8e2d8;border-radius:12px;
         box-shadow:0 8px 32px rgba(0,0,0,0.15);z-index:1000;min-width:170px;overflow:hidden;">
      ${Object.entries(LANGUAGES).map(([code, info]) => `
        <div onclick="selectLang('${code}')"
          style="display:flex;align-items:center;gap:10px;padding:10px 16px;cursor:pointer;
                 font-size:13.5px;font-weight:500;color:#1A1208;transition:background 0.15s;
                 ${code === current ? 'background:#fff8ee;font-weight:700;' : ''}"
          onmouseover="this.style.background='#f5f0e8'"
          onmouseout="this.style.background='${code === current ? '#fff8ee' : 'transparent'}'">
          <span style="font-size:18px;">${info.flag}</span>
          <span>${info.name}</span>
          ${code === current ? '<span style="margin-left:auto;color:#C8922A;font-size:14px;">✓</span>' : ''}
        </div>
      `).join('')}
    </div>`;
}

function toggleLangMenu(e) {
  e.stopPropagation();
  const menu = document.getElementById('lang-menu');
  menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
  if (menu.style.display === 'block') {
    document.addEventListener('click', closeLangMenu, true);
  }
}

function closeLangMenu() {
  const menu = document.getElementById('lang-menu');
  if (menu) menu.style.display = 'none';
  document.removeEventListener('click', closeLangMenu, true);
}

function selectLang(code) {
  closeLangMenu();
  applyLang(code);
  buildLangSwitcher(); // rebuild to update active check
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', function() {
  buildLangSwitcher();
  applyLang(getLang());
});
