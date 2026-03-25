# Partyretter – Kompletter Projektplan

## Was ist Partyretter?
Eine deutsche Eventplattform: **Kunden** finden Köche, Foodtrucks, Caterer und Entertainment für ihre Events. **Anbieter** erstellen Profile und bieten ihre Leistungen an. Kunden buchen direkt über die Plattform.

- **Website:** partyretter.com (Marketing, SEO, Infos)
- **App:** app.partyretter.com (Login, Buchungen, Dashboards – Bubble.io)
- **GitHub:** github.com/mcmo600/partyretter

---

## Benutzer-Funktionen

### 👤 Der Kunde (Veranstalter / Privatkunde)

#### Bereits fertig:
- Koch-Events ansehen (kochevents.html)
- Foodtrucks auf Karte suchen mit GPS + Autocomplete + Kategorie-Filter (foodtruck-standorte.html)
- Privatköche-Liste durchstöbern (privatkoech-liste.html)
- Locations/Restaurants ansehen (restaurants.html)
- Event-Zubehör ansehen (event-zubehoer.html)
- Hochzeits-Landingpage (landingpage-hochzeit.html)
- Blog lesen – 12 Artikel (blog.html)
- Registrieren als Kunde (app.partyretter.com/registrierung)
- Anmelden (app.partyretter.com/login)
- Event planen – Formular mit 30 Services, Datum, Gäste, Budget (event-planen.html)
- Preise einsehen (preise.html)

#### Noch zu bauen (in Bubble):
1. **Event ausschreiben** – Kunde beschreibt sein Event (Datum, Gäste, Budget, gewünschte Services). Nachricht geht an passende Anbieter raus.
2. **Anbieter-Reichweite wählen** – Kunde bestimmt: "An die besten 5", "An die besten 10" oder "An alle Anbieter". Damit wird er nicht mit Nachrichten überflutet.
3. **Angebote empfangen + vergleichen** – Anbieter schicken Angebote (Preis, Menü, Details). Kunde vergleicht im Dashboard.
4. **Anbieter-Profile ansehen** – Fotos, Menüs, Bewertungen, Verfügbarkeit eines Anbieters einsehen.
5. **Buchen + Bezahlen** – Angebot auswählen → Stripe-Zahlung → Buchungsbestätigung per E-Mail.
6. **Nachrichten** – Chat mit dem Anbieter (Fragen klären, Details besprechen).
7. **Buchungen verwalten** – Dashboard: offene Anfragen, laufende Buchungen, vergangene Events.
8. **Bewertung abgeben** – Nach dem Event: Sterne + Text-Bewertung für den Anbieter.
9. **Stornieren** – Bis 48h vor Event kostenlos stornierbar.
10. **E-Mail-Benachrichtigungen** – Buchungsbestätigung, neue Angebote, Event-Erinnerung (via SendGrid).

#### Kunden-Flow:
```
1. Kunde besucht partyretter.com
2. Sucht nach Anbieter ODER klickt "Event planen"
3. Beschreibt sein Event (Datum, Gäste, Budget, gewünschte Services)
4. Wählt: "Nachricht an die besten 5 / 10 / alle Anbieter"
5. Passende Anbieter erhalten Benachrichtigung per E-Mail
6. Anbieter schicken Angebote zurück
7. Kunde vergleicht Angebote im Dashboard
8. Kunde wählt Angebot → Bezahlt über Stripe
9. Event findet statt
10. Kunde bewertet den Anbieter
```

---

### 👨‍🍳 Der Anbieter (Koch, Foodtruck, Caterer, Location, Entertainment)

#### Bereits fertig:
- Registrieren als Anbieter (app.partyretter.com/registrierung)
- Anmelden (app.partyretter.com/login)
- Preise/Konditionen einsehen (preise.html#anbieter)
- Onboarding-Infos lesen (anbieter-onboarding.html)
- Vorteile lesen (anbieter-vorteile.html)
- Funktionen ansehen (anbieter-funktionen.html)
- Demo-Profil als Vorlage (anbieter-profil-vorlage.html)

#### Noch zu bauen (in Bubble):
1. **Profil erstellen** – Name, Beschreibung, Fotos, Spezialisierung, Einsatzgebiet (Standort + Umkreis).
2. **Menüs anlegen** (Koch/Caterer) – Gerichte, Zutaten, Allergene, Preise pro Person.
3. **Standort speichern** (Foodtruck) – Position auf Karte eintragen, Öffnungszeiten, Route.
4. **Verfügbarkeit einstellen** – Kalender: welche Tage verfügbar, welche gebucht.
5. **Anfragen empfangen** – E-Mail + Dashboard-Benachrichtigung: "Neues Event in deiner Nähe!"
6. **Angebote erstellen** – Preis, Menü-Vorschlag, Besonderheiten → an Kunde senden.
7. **Buchungen verwalten** – Übersicht: offene Anfragen, bestätigte Buchungen, Kalender-Ansicht.
8. **Nachrichten** – Chat mit dem Kunden.
9. **Bewertungen sehen** – Kundenbewertungen auf dem eigenen Profil.
10. **Abrechnungen** – Umsatz, Provisionen, Auszahlungen einsehen (Stripe Connect).
11. **Starter → Pro upgraden** – Von 6% auf 3% Provision wechseln (10€/Monat Abo).

#### Anbieter-Flow:
```
1. Anbieter registriert sich auf app.partyretter.com
2. Erstellt sein Profil (Fotos, Beschreibung, Menüs/Angebote)
3. Stellt Verfügbarkeit im Kalender ein
4. Erhält E-Mail: "Neues Event passt zu dir!"
5. Schaut sich die Anfrage an im Dashboard
6. Erstellt ein Angebot (Preis, Details, Menü-Vorschlag)
7. Kunde bucht → Anbieter erhält Bestätigung
8. Event findet statt
9. Geld wird ausgezahlt (abzüglich 6% Starter oder 3% Pro Provision)
10. Kunde bewertet → Bewertung erscheint auf Profil
```

---

## 💰 Geschäftsmodell (Freemium)

| Plan | Monatlich | Provision | Zielgruppe |
|------|-----------|-----------|------------|
| Kostenlos (Kunde) | 0 € | 0 % | Kunden – suchen, anfragen, buchen ist immer kostenlos |
| Starter (Anbieter) | 0 € | 6 % | Neue Anbieter zum Ausprobieren |
| Pro (Anbieter) | 10 € | 3 % | Professionelle Anbieter mit Top-Platzierung |

- Jahresabo Pro: 12 Monate Mindestlaufzeit, danach monatlich kündbar
- Kunden können kostenlos stornieren bis 48h vor Event
- Anbieter bei Stornierung: Verlust der Provision, ggf. Ersatzpflicht

**Partyretter verdient an:**
- 6% oder 3% Provision pro erfolgreicher Buchung
- 10€/Monat Pro-Abo von professionellen Anbietern

---

## 🔧 Tech-Stack

| Bereich | Technologie | Status |
|---------|-------------|--------|
| Marketing-Website | Reines HTML/CSS/JS auf Vercel | ✅ 30+ Seiten live |
| App/Backend/Datenbank | Bubble.io | ✅ Login + Registrierung funktioniert |
| Zahlungen | Stripe | ✅ Test-Keys in Bubble eingetragen |
| E-Mail-Versand | SendGrid | ✅ DNS verifiziert, Testphase bis 22.05.2026 |
| Karten/Standortsuche | Leaflet + OpenStreetMap + Nominatim | ✅ Kein Google nötig |
| Domain | partyretter.com (united-domains) | ✅ |
| E-Mail | info@partyretter.com (united-domains Mail M) | ✅ |
| Versionskontrolle | GitHub (mcmo600/partyretter) | ✅ |
| Deployment | Vercel (Auto-Deploy bei git push) | ✅ |

### Wichtige Entscheidungen:
- **Kein Google:** Kein Google OAuth, kein Google Maps. Login nur per E-Mail + Passwort. Karten mit Leaflet/OpenStreetMap.
- **Bubble.io für Backend:** Datenbank, Login, Buchungen, Bezahlung – alles in Bubble. Die HTML-Seiten auf Vercel sind nur Marketing/SEO.
- **Sofort committen:** Nach JEDER Änderung sofort git add + commit + push. Projekt liegt auf OneDrive, Sync kann Dateien zurücksetzen.
- **i18n.js prüfen:** Die Übersetzungsdatei (i18n.js) überschreibt HTML-Texte zur Laufzeit. Bei Text-Änderungen IMMER auch i18n.js updaten.

---

## 🎨 Design-Vorgaben

| Element | Wert |
|---------|------|
| Gold | `#C8922A` |
| Dark | `#1A1208` |
| Cream | `#F5F0E8` |
| Headline-Font | Fraunces (Serif) |
| Body-Font | DM Sans |
| Sprache | Deutsch (i18n für 9 Sprachen vorbereitet) |
| Logo | logo.png (Koch-Cartoon mit "mein-Partyretter") – NICHT ändern! |

---

## 📁 Seitenstruktur (Stand 25.03.2026)

### Marketing/SEO:
- homepage.html – Hauptseite mit Hero, Kategorien, Preise
- privatkoech-liste.html – Privatköche durchstöbern
- foodtrucks-liste.html – Foodtrucks durchstöbern
- foodtruck-standorte.html – Karte mit Suche, GPS, Filter
- restaurants.html – Locations
- kochevents.html – Koch-Events
- event-zubehoer.html – Event-Zubehör
- landingpage-hochzeit.html – Hochzeits-Landingpage
- blog.html + 12 blog-*.html Artikel

### Neue Seiten:
- event-planen.html – Buchungsformular (30 Services, Anbieter-Reichweite)
- anbieter-profil-vorlage.html – Demo Koch-Profil (Vorlage für Bubble)

### Anbieter-Info:
- anbieter-vorteile.html – Warum Anbieter werden
- anbieter-funktionen.html – Was die Plattform bietet
- anbieter-onboarding.html – Schritt-für-Schritt Anleitung
- preise.html – Preise mit Tabs (Kunden/Anbieter), Deep-Links (#anbieter, #kunde)
- affiliate-programm.html

### Rechtliches:
- impressum.html
- datenschutz.html
- agb.html

### Sonstiges:
- coming-soon.html – Platzhalter für noch nicht verfügbare Features
- anbieter-checkliste-druck.html – Druckbare Checkliste
- einkaufszettel.html – PWA Einkaufszettel
- app.html – App-Startseite

### Tools:
- cookie-banner.js – DSGVO Cookie-Banner
- i18n.js – Mehrsprachigkeit (9 Sprachen, Deutsch = Standard)
- robots.txt, sitemap.xml, manifest.json, service-worker.js

---

## 🔑 Accounts (eingerichtet am 23.03.2026)

| Account | Anbieter | E-Mail | Status |
|---------|----------|--------|--------|
| E-Mail | united-domains (Mail M) | info@partyretter.com | ✅ Webmail: ud-mail.de |
| Stripe | stripe.com | info@partyretter.com | ✅ Test-Mode, Keys in Bubble |
| SendGrid | sendgrid.com | info@partyretter.com | ✅ DNS verifiziert, Free Tier |
| GitHub | github.com/mcmo600 | mcmo600@gmail.com | ✅ Repo: partyretter |
| Vercel | vercel.com | mcmo600@gmail.com | ✅ Auto-Deploy |
| Bubble | bubble.io | mcmo600@gmail.com | ✅ App: mcmo600 |
| DPMA | dpma.de | – | ✅ Marke "Partyretter" angemeldet |

### Laufende Kosten:
| Posten | Kosten |
|--------|--------|
| Domain partyretter.com | ~15 €/Jahr |
| E-Mail Mail M | 1,25 €/Monat (15 €/Jahr) |
| Vercel | 0 € (Free) |
| Bubble | 0 € (Starter) |
| SendGrid | 0 € (Free, 100 Mails/Tag) |
| Stripe | 1,5% + 0,25€ pro Zahlung (nur bei Buchung) |
| **Gesamt monatlich** | **~2,50 €** (ohne Transaktionen) |

---

## 🚧 Nächste Schritte (Priorität)

### Phase 1: Kernfunktionen (MVP)
1. **Anbieter-Profil in Bubble** – Fotos, Menüs, Preise, Verfügbarkeit
2. **Buchungs-Workflow** – Event-Anfrage → E-Mail an Anbieter → Angebot → Zahlung
3. **Nachrichtensystem** – Kunde ↔ Anbieter Chat
4. **Stripe Connect** – Anbieter-Auszahlungen
5. **E-Mail-Templates** (SendGrid) – Bestätigungen, Benachrichtigungen

### Phase 2: Vertrauen aufbauen
6. **Bewertungssystem** – Nach Event: Sterne + Text
7. **Anbieter-Profilseite** – Öffentlich sichtbar mit Bewertungen
8. **Kunden-Dashboard** – Buchungsübersicht
9. **Anbieter-Dashboard** – Anfragen, Kalender, Abrechnungen

### Phase 3: Wachstum
10. **SEO optimieren** – Google Search Console, strukturierte Daten
11. **Social Media** – TikTok @partyretter
12. **Affiliate-Programm** aktivieren

### Manuelle Aufgaben für Alexander:
- [ ] Gewerbeanmeldung (Pflicht für Stripe Live-Mode)
- [ ] Geschäftskonto eröffnen
- [ ] Stripe Unternehmen verifizieren
- [ ] SendGrid DMARC fixen: bei united-domains TXT `_dmarc` ändern von `p=keine;` zu `p=none;`
- [ ] Google Search Console verifizieren
- [ ] Alten GitHub-Token löschen
- [ ] Netlify kündigen

---

## ⚠️ Wichtige Regeln für Entwickler

1. **Immer auf Deutsch** – Alexander ist deutschsprachig, die Plattform ist Deutsch
2. **Kein Google** – Keine Google-Dienste verwenden (Maps, OAuth, Analytics)
3. **Sofort committen** – Nach jeder Änderung git add + commit + push
4. **i18n.js prüfen** – Überschreibt HTML-Texte zur Laufzeit, immer mitupdaten
5. **Keine Fake-Zahlen** – Keine erfundenen Statistiken (1.200+ Anbieter etc.)
6. **Logo nicht ändern** – logo.png (Koch-Cartoon) ist Alexander's Hauptlogo
7. **Alexander ist kein Entwickler** – Erklärungen einfach und klar halten
