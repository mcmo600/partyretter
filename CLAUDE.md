# Partyretter – Projektübersicht für Claude

## Was ist Partyretter?
Partyretter ist eine deutsche Eventplattform: Kunden finden dort Köche, Foodtrucks, Caterer und Entertainment für ihre Events. Anbieter erstellen Profile und bieten ihre Leistungen an. Kunden buchen direkt über die Plattform.

## Ziel
Die Plattform fehlerfrei fertigstellen, stabil zum Laufen bringen. Die Architektur soll erweiterbar sein und später mehrere Sprachen unterstützen.

## Tech-Stack

### Marketing-Website (fertig, live)
- **URL:** partyretter.com
- **Hosting:** Vercel (Auto-Deploy bei git push zu main)
- **GitHub:** mcmo600/partyretter (public, branch: main)
- **Technologie:** Reines Static HTML/CSS/JS, kein Build-Step, Framework = "Other"
- **Lokaler Ordner:** `01_Homepage_App/` (20 Marketing-Seiten + coming-soon.html)

### App-Plattform (in Entwicklung)
- **Replit** – echte Datenbank (PostgreSQL), Login, Buchungen, Bezahlung
- **Replit-Projekt:** replit.com/@mcmo600/German-Chat
- **Replit-Dev-URL:** 8a49cfe0-0778-46b6-a6c5-2f8b1988447b-00-32ssl52897fio.worf.replit.dev
- **Custom Domain (geplant):** app.partyretter.com → DNS noch einzutragen bei united-domains (A: 34.111.179.208, TXT: replit-verify=8a49cfe0-0778-46b6-a6c5-2f8b1988447b)
- Dashboards, Checkout, Nachrichten, Profile etc. laufen in Replit
- partyretter.com (index.html) leitet direkt auf app.partyretter.com weiter

### Seitenstruktur auf Vercel (Stand 19.03.2026)
**Marketing/SEO:** homepage, privatkoech-liste, foodtrucks-liste, restaurants, kochevents, event-zubehoer, landingpage-hochzeit, blog
**Anbieter-Info:** anbieter-vorteile, anbieter-funktionen, anbieter-onboarding, preise, affiliate-programm
**Rechtliches:** impressum, datenschutz, agb
**Sonstiges:** coming-soon (Platzhalter für App-Features), anbieter-checkliste-druck, index (Redirect)
**Tools:** cookie-banner.js, i18n.js (9 Sprachen vorbereitet), robots.txt, sitemap.xml

## DNS & Domain
- Domain: partyretter.com (registriert bei united-domains)
- A-Record: @ → 216.198.79.1
- CNAME: www → dc7136bee3229378.vercel-dns-017.com

## Marke
- **Trademark:** "Partyretter" – Wortmarke beim DPMA angemeldet (17.03.2026), Klasse 35+43, €290
- **E-Mail:** info@partyretter.com

## Social Media
- **TikTok:** @partyretter (tiktok.com/@partyretter) – Name "Partyretter" gesichert

## Git-Workflow
```bash
git add .
git commit -m "Beschreibung"
git push
```
Vercel deployed automatisch nach jedem Push.

## Erledigte Aufgaben (19.03.2026)
- [x] 31 App-Seiten aus Vercel entfernt → gesichert in `_ZUM_LÖSCHEN/Bubble_Vorlagen/`
- [x] coming-soon.html erstellt für noch nicht verfügbare App-Funktionen
- [x] 210+ kaputte Links auf coming-soon.html umgeleitet
- [x] partyretter.de → partyretter.com korrigiert
- [x] Git-Token aus Remote-URL entfernt (Sicherheitsfix)
- [x] Logo ausgetauscht (weißer Hintergrund entfernt, alte SVGs gelöscht)
- [x] Schriftzug "Partyretter" auf allen Seiten einheitlich (Gold + Cream)
- [x] robots.txt und sitemap.xml an neue Struktur angepasst
- [x] 21 kaputte Links + Fehler behoben (START.html, root-relative, MPR-Branding)
- [x] Design: Hero-Bereich mit Logo, zentrierter Content

## Erledigte Aufgaben (20.03.2026)
- [x] Replit-App deployed unter app.partyretter.com (DNS A-Records, TLS/HTTPS)
- [x] Login-Seite: Fullwidth (1440px), Google-Anmeldung sichtbar
- [x] Registrierung: Einsatzgebiet → Standort + Umkreis-Dropdown + Hinweistext
- [x] Registrierung: Fullwidth (1440px, max-width:100%)
- [x] 15 kaputte "Anfragen"-Buttons → coming-soon.html verlinkt
- [x] 4 CTA-Buttons → app.partyretter.com/registrierung umgeleitet
- [x] Favicon auf allen Seiten installiert
- [x] Impressum: Telefonnummer hinzugefügt
- [x] Blog: 12 vollständige Artikel mit echtem Inhalt erstellt
- [x] Blog: Alle "Weiterlesen" Links auf echte Artikel umgeleitet
- [x] Sitemap: 12 Blog-Artikel hinzugefügt
- [x] _ZUM_LÖSCHEN Ordner: bereits in .gitignore, nicht im Repo

## Erledigte Aufgaben (21.03.2026)
- [x] Replit: Alle Seiten live getestet (14 Seiten geprüft)
- [x] Replit: Kunden-Dashboard Header "MeinPartyRetter" → "Partyretter"
- [x] Replit: Login Header "Mein Party Retter" → "Partyretter"
- [x] Replit: Registrierung Debug-Button entfernt
- [x] Replit: Registrierung 24 kaputte .html Links → App-Routen
- [x] Replit: Kunden-Dashboard 9 kaputte .html Links → App-Routen
- [x] Replit: Datenschutz Adresse korrigiert (McMo/Musterstraße → Moser/Ulmer Str. 45)
- [x] Replit: AGB Platzhalter ausgefüllt ([Anschrift], [E-Mail], [Link])
- [x] Replit: Registrierung Details-Schritt entfernt (Wizard: 4→3 Schritte)
- [x] Replit: 3x erfolgreich deployed
- [x] Vercel: "Restaurants" → "Locations" auf allen Seiten umbenannt
- [x] Vercel: Homepage Fake-Statistiken entfernt, Hero-Kontrast verbessert
- [x] Vercel: "Partyretter werden" Tab-Text Farbe gefixt (war unsichtbar)
- [x] Vercel: Homepage komplett zur Landingpage umgebaut (redundante Sektionen entfernt)
- [x] Vercel: "Anbieten"-Tab aus Hero entfernt
- [x] Vercel: "Partyretter werden" Tab-Argumente überarbeitet (Sichtbarkeit, Verwaltung, Fokus)
- [x] Vercel: Alle Fake-Zahlen entfernt (1.200+, 500+, 4.8★ etc.)
- [x] Vercel: Meta-Descriptions auf 15 Seiten hinzugefügt
- [x] Vercel: Broken Link gefixt (Roadmap-Link in anbieter-funktionen)
- [x] Vercel: Anbieter-Onboarding: Verdienst-Boxen entfernt, Intro-Text verbessert
- [x] Vercel: Canonical & OG URL auf Homepage korrigiert (homepage.html → /)
- [x] Vercel: Navigation auf 28 Seiten vereinheitlicht (Koch-Events, Foodtruck-Standorte, Blog, Partyretter werden)
- [x] Vercel: Copyright 2025 → 2026 auf 15 Seiten korrigiert
- [x] Vercel: i18n.js auf 27 Seiten hinzugefügt (Mehrsprachigkeit vorbereitet)
- [x] Vercel: Fehlende Navigation auf 7 Seiten ergänzt (datenschutz, agb, coming-soon, etc.)
- [x] Vercel: Nav-Buttons vereinheitlicht – Anmelden + Inserat erstellen auf allen 17 Seiten

## Erledigte Aufgaben (22.03.2026)
- [x] Preise-Seite komplett überarbeitet (Tabs, Dashboard-Previews, FAQ, Buchhaltungs-Tools)
- [x] Homepage Preise an Freemium-Modell angeglichen (Starter 0€/6%, Pro 10€/3%)
- [x] Nav-Button "Inserat erstellen" → "Event ausschreiben" auf 30 Seiten
- [x] Replit: Registrierung 4→2 Rollen (Kunde + Anbieter), Passwort-Toggle
- [x] Replit: Login + Registrierung Logo gefixt (kaputte Bilder → Text-Logos)
- [x] Replit: Logo-Spacing gefixt (CSS flex/gap entfernt), 3x deployed
- [x] i18n.js komplett bereinigt (Fake-Zahlen, alte Texte überschrieben HTML)
- [x] 28 uncommittete Dateien committed (Home-Links, Datenschutz, Platzhalter)

## Erledigte Aufgaben (23.03.2026)
- [x] Homepage "Anbieter werden" → preise.html#anbieter (Direktlink zum Anbieter-Tab)
- [x] Preise Deep-Links: #anbieter und #kunde mit Tab-Buttons ausgeblendet
- [x] Starter/Pro Buttons → Registrierung mit ?plan=starter/pro&next=onboarding
- [x] Datenschutz: 3 Platzhalter ausgefüllt (Datenschutzbeauftragter, Stripe, Vercel/Bubble)
- [x] Foodtruck-Standorte: Komplett überarbeitet (Autocomplete, GPS, Kategorie-Filter, 16 Trucks)
- [x] Mobile Responsive: 30 Seiten mit Hamburger-Menü, responsive Grids, mobile CSS
- [x] Stripe Account eingerichtet + Test-API-Keys in Replit eingetragen
- [x] SendGrid Account eingerichtet + DNS-Einträge bei united-domains
- [x] E-Mail info@partyretter.com eingerichtet (united-domains Mail M, 1,25€/Monat)

## Erledigte Aufgaben (24.03.2026 – Nacht-Session)
- [x] event-planen.html: Buchungsformular (Event-Typ, Datum, Gäste, Budget, Wünsche)
- [x] anbieter-profil-vorlage.html: Demo Koch-Profil (Menüs, Bewertungen, Verfügbarkeit)
- [x] Homepage Hero-Bild: "mein-Partyretter" logo → modernes Brand-Panel
- [x] 12 Blog-Artikel: Nav-CTA + Sidebar-CTA → event-planen.html
- [x] 9 Listen-Seiten: Fake-Stats entfernt, CTAs korrigiert
- [x] 70+ Links: coming-soon → echte Seiten (event-planen, privatkoech-liste, restaurants)
- [x] i18n.js: Alle veralteten Übersetzungen bereinigt (nav_cta, trust, customer_p1, provider_p4)
- [x] Kochevents: Fake-Zahlen entfernt (84 Events, 12+ Städte, 4.9★)
- [x] Sitemap: 2 neue Seiten hinzugefügt
- [x] 2 Git-Backup-Tags erstellt (backup-23-03-2026-nacht, backup-24-03-2026-morgen)
- [x] coming-soon.html verbessert (Feature-Previews statt leerer Platzhalter)
- [x] Entscheidung: Kein Google OAuth, kein Google Maps (alles ohne Google)

## Erledigte Aufgaben (04.04.2026)
- [x] DNS: app.partyretter.com bereits korrekt eingetragen (A: 34.111.179.208, TXT: replit-verify) – war schon aktiv ✅
- [x] Zoho: Account vollständig gekündigt (spart 12,85 €/Monat) ✅
- [x] Zoho DNS-Records entfernt (zoho-verification TXT, zmail._domainkey TXT, include:zoho.eu aus SPF) ✅
- [x] DMARC: p=none bereits korrekt gesetzt ✅
- [x] Google OAuth: Projekt "Partyretter" in Google Cloud angelegt, OAuth-Client erstellt (Client-ID + Secret in REPLIT_GOOGLE_OAUTH.md) ✅
- [x] Netlify: Account gelöscht ✅

## Erledigte Aufgaben (06.04.2026)
- [x] Navigation auf 35 Seiten angeglichen (Koch-Events, Foodtruck-Karte, Locations, Rezepte, Preise)
- [x] Zurück-Button in Nav-Leiste integriert (neben Logo, sticky, auf allen Unterseiten)
- [x] 7 Kategorie-Cards mit Superhelden-Logos auf Homepage
- [x] Kategorie-Tabs auf Onboarding erweitert (+ Kuchen & Torten, Event Zubehör, Service & Personal)
- [x] 25 falsche Claims bereinigt in 17 Dateien
- [x] Demo-Badges auf 4 Fake-Angebote (Homepage)
- [x] Testversion-Banner eingefügt (goldener Gradient)
- [x] Sidebar-Scroll-Bug gefixt
- [x] Vercel CDN-Cache gelöst
- [x] mobile-fixes.css erstellt + auf 34 Seiten eingebunden
- [x] Mobile: Hero-Mascot ausgeblendet, Grids auf 1 Spalte, Sidebar versteckt, Padding reduziert
- [x] Replit Runde 4 Entwurf v3 erstellt (8 Punkte, Foodtruck-Karte korrigiert)
- [x] Tages-Zusammenfassung + Audit-Dokument + Design-Vorschläge erstellt

## Offene Aufgaben

### Replit (Agent baut gerade)
- [ ] Replit: Foto-Upload UI ins Bewertungsformular (T003) – läuft gerade 🔄
- [ ] Replit: Mobile Layouts fixen (Hero, "Zwei Wege", Footer, Anbieter-Karten) (T004) – läuft gerade 🔄
- [ ] Replit: "Wie funktioniert's"-Sektion + Vertrauens-Indikatoren auf Homepage – läuft gerade 🔄
- [ ] Replit: Deutsch als Standard-Sprache setzen – läuft gerade 🔄
- [ ] Replit: Doppelter /api/-Bug im Foodtruck-Formular fixen (PATCH /api/api/ → PATCH /api/)
- [ ] Replit: NAVIGATION-Sektion im Kunden-Dashboard Sidebar entfernen
- [ ] Replit: Anbieter-Profil bauen (Fotos, Menüs, Zutaten, Preise)
- [ ] Replit: Buchungs-Workflow (Anfrage → Angebot → Buchung → Zahlung)
- [ ] Replit: Nachrichtensystem (Kunde ↔ Anbieter)
- [ ] Replit: Bewertungssystem nach Event
- [ ] SendGrid: API-Key in Replit Secrets eintragen
- [ ] SendGrid: E-Mail-Templates bauen

### Google
- [x] Google OAuth Credentials erstellt (Client-ID + Secret gesichert in REPLIT_GOOGLE_OAUTH.md)
- [ ] Replit: Google OAuth implementieren – vollständige Anleitung in REPLIT_GOOGLE_OAUTH.md
- [ ] Google Cloud: App auf "Produktion" verifizieren (nach Go-Live, wenn echte Nutzer sich anmelden sollen)
- [ ] Google Search Console verifizieren (Alexander manuell)

### Stripe (wartet auf Gewerbe)
- [ ] Stripe: Unternehmen verifizieren (Alexander – braucht Gewerbe)
- [ ] Stripe: Live-Keys in Replit Secrets eintragen (nach Verifizierung)
- [ ] Stripe Connect für Anbieter-Auszahlungen

### Alexander manuell
- [ ] Alten GitHub-Token auf github.com löschen
- [x] Netlify kündigen ✅
- [ ] index.html Redirect zu app.partyretter.com → git push ausführen

## Accounts & Kosten
| Posten | Anbieter | Kosten | Status |
|--------|----------|--------|--------|
| Domain | united-domains | ~15 €/Jahr | ✅ Aktiv |
| E-Mail Mail M | united-domains | 1,25 €/Monat | ✅ info@partyretter.com, Webmail: ud-mail.de |
| Website Hosting | Vercel | 0 € (Free) | ✅ Auto-Deploy bei git push |
| App Hosting | Replit | 0 € (Free) | ✅ app.partyretter.com (DNS-Einträge noch ausstehend) |
| Zahlungen | Stripe | 1,5% + 0,25€ pro Zahlung | ✅ Test-Keys in Replit (acct_1TE979EPsvkBS2MP) |
| E-Mail-Versand | SendGrid | 0 € (Free, 100/Tag) | ✅ DNS verifiziert, Testphase bis 22.05.2026 |
| Marke DPMA | DPMA | 290 € einmalig | ✅ Angemeldet 17.03.2026 |

## Account-Details (für Replit-Integration)
- **Stripe:** Test-Keys bereits in Replit Secrets eingetragen (Entwicklung). Live-Keys nach Gewerbe-Verifizierung.
- **SendGrid:** DNS-Records (5x CNAME + 1x TXT _dmarc) bei united-domains eingetragen. DMARC noch fixen: p=keine → p=none
- **E-Mail:** info@partyretter.com → Postfach bei united-domains (Mail M, 10 Postfächer, 5 GB). Weiterleitung an mc600@outlook.de aktiv.
- **Replit:** replit.com/@mcmo600/German-Chat – React + PostgreSQL App. Dev-URL: 8a49cfe0-0778-46b6-a6c5-2f8b1988447b-00-32ssl52897fio.worf.replit.dev

## Seitenstruktur (Stand 25.03.2026)
**Marketing/SEO:** homepage, privatkoech-liste, foodtrucks-liste, restaurants, kochevents, event-zubehoer, landingpage-hochzeit, blog (12 Artikel)
**Neue Seiten:** event-planen (Buchungsformular), anbieter-profil-vorlage (Demo Koch-Profil), foodtruck-standorte (Karte mit Suche)
**Anbieter-Info:** anbieter-vorteile, anbieter-funktionen, anbieter-onboarding, preise, affiliate-programm
**Rechtliches:** impressum, datenschutz, agb
**Sonstiges:** coming-soon, anbieter-checkliste-druck, index (Redirect), einkaufszettel, app
**Tools:** cookie-banner.js, i18n.js (9 Sprachen), robots.txt, sitemap.xml, manifest.json, service-worker.js

## Freemium Preismodell
| Plan | Monatlich | Provision | Zielgruppe |
|------|-----------|-----------|------------|
| Kostenlos (Kunde) | 0 € | 0 % | Kunden – immer kostenlos |
| Starter (Anbieter) | 0 € | 6 % | Neue Anbieter zum Ausprobieren |
| Pro (Anbieter) | 10 € | 3 % | Professionelle Anbieter |

## Wichtige Designvorgaben
- Farben: Gold `#C8922A`, Dark `#1A1208`, Cream `#F5F0E8`
- Fonts: Fraunces (Serif, Headlines) + DM Sans (Body)
- Sprache: Immer Deutsch
- Hero-Bild: logo.png (Koch-Cartoon mit "mein-Partyretter") – Alexander's Hauptlogo, NICHT ändern!

## Wichtige Entscheidungen
- **Kein Google Maps:** Karten mit Leaflet/OpenStreetMap/Nominatim (Google Maps zu teuer).
- **Google OAuth:** Kostenlos – noch nicht eingerichtet, für später geplant. Login aktuell nur per E-Mail + Passwort.
- **Sofort committen:** Nach JEDER Änderung sofort git add + commit + push. OneDrive kann Dateien zurücksetzen.
- **i18n.js prüfen:** Die Übersetzungsdatei überschreibt HTML-Texte zur Laufzeit. Bei Text-Änderungen IMMER auch i18n.js updaten.

## Hinweise
- Antworte Alexander immer auf Deutsch
- Das Projekt heißt **Partyretter** (nicht MeinPartyRetter – das war der alte Name)
- Alexander ist kein Entwickler – Erklärungen einfach und klar halten
