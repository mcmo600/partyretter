# Partyretter – Projektübersicht für Claude

## Was ist Partyretter?
Partyretter ist eine deutsche Eventplattform: Kunden finden dort Köche, Foodtrucks, Caterer und Entertainment für ihre Events. Anbieter erstellen Profile und bieten ihre Leistungen an. Kunden buchen direkt über die Plattform.

## Ziel
Die Plattform fehlerfrei fertigstellen, stabil zum Laufen bringen und sauber in Bubble einbinden. Die Architektur soll erweiterbar sein und später mehrere Sprachen unterstützen.

## Tech-Stack

### Marketing-Website (fertig, live)
- **URL:** partyretter.com
- **Hosting:** Vercel (Auto-Deploy bei git push zu main)
- **GitHub:** mcmo600/partyretter (public, branch: main)
- **Technologie:** Reines Static HTML/CSS/JS, kein Build-Step, Framework = "Other"
- **Lokaler Ordner:** `01_Homepage_App/` (20 Marketing-Seiten + coming-soon.html)

### App-Plattform (in Entwicklung)
- **Bubble.io** – echte Datenbank, Login, Buchungen, Bezahlung
- Alexander hat bereits viel in Bubble gebaut
- 31 HTML-Seiten als Design-Vorlagen gesichert in `_ZUM_LÖSCHEN/Bubble_Vorlagen/`
- Dashboards, Checkout, Nachrichten, Profile etc. gehören in Bubble (nicht statisches HTML)

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
- [x] Bubble-App deployed unter app.partyretter.com (DNS A-Records, TLS/HTTPS)
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
- [x] Bubble: Alle Seiten live getestet (14 Seiten geprüft)
- [x] Bubble: Kunden-Dashboard Header "MeinPartyRetter" → "Partyretter"
- [x] Bubble: Login Header "Mein Party Retter" → "Partyretter"
- [x] Bubble: Registrierung "Alle Seiten" Debug-Button entfernt
- [x] Bubble: Registrierung 24 kaputte .html Links → Bubble-Routen
- [x] Bubble: Kunden-Dashboard 9 kaputte .html Links → Bubble-Routen
- [x] Bubble: Datenschutz Adresse korrigiert (McMo/Musterstraße → Moser/Ulmer Str. 45)
- [x] Bubble: AGB Platzhalter ausgefüllt ([Anschrift], [E-Mail], [Link])
- [x] Bubble: Registrierung Details-Schritt entfernt (Wizard: 4→3 Schritte)
- [x] Bubble: 3x erfolgreich deployed
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
- [x] Bubble: Registrierung 4→2 Rollen (Kunde + Anbieter), Passwort-Toggle
- [x] Bubble: Login + Registrierung Logo gefixt (kaputte Bilder → Text-Logos)
- [x] Bubble: Logo-Spacing gefixt (CSS flex/gap entfernt), 3x deployed
- [x] i18n.js komplett bereinigt (Fake-Zahlen, alte Texte überschrieben HTML)
- [x] 28 uncommittete Dateien committed (Home-Links, Datenschutz, Platzhalter)

## Erledigte Aufgaben (23.03.2026)
- [x] Homepage "Anbieter werden" → preise.html#anbieter (Direktlink zum Anbieter-Tab)
- [x] Preise Deep-Links: #anbieter und #kunde mit Tab-Buttons ausgeblendet
- [x] Starter/Pro Buttons → Registrierung mit ?plan=starter/pro&next=onboarding
- [x] Datenschutz: 3 Platzhalter ausgefüllt (Datenschutzbeauftragter, Stripe, Vercel/Bubble)
- [x] Foodtruck-Standorte: Komplett überarbeitet (Autocomplete, GPS, Kategorie-Filter, 16 Trucks)
- [x] Mobile Responsive: 30 Seiten mit Hamburger-Menü, responsive Grids, mobile CSS
- [x] Stripe Account eingerichtet + Test-API-Keys in Bubble eingetragen
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

## Offene Aufgaben
- [ ] Bubble: NAVIGATION-Sektion im Kunden-Dashboard Sidebar entfernen
- [ ] Bubble: Hero-Bild auf Index zeigt noch "mein-Partyretter" (Bilddatei austauschen)
- [ ] Bubble: Anbieterprofil-Seite 404 prüfen
- [ ] Bubble: Anbieter-Profil bauen (Fotos, Menüs, Zutaten, Preise)
- [ ] Bubble: Buchungs-Workflow (Anfrage → Angebot → Buchung → Zahlung)
- [ ] Bubble: Nachrichtensystem (Kunde ↔ Anbieter)
- [ ] Bubble: Bewertungssystem nach Event
- [ ] Stripe: Unternehmen verifizieren (Alexander – braucht Gewerbe)
- [ ] Stripe: Live-Keys eintragen (nach Verifizierung)
- [ ] Stripe Connect für Anbieter-Auszahlungen
- [ ] SendGrid: DMARC-Eintrag fixen (p=keine → p=none bei united-domains)
- [ ] SendGrid: API-Key in Bubble eintragen
- [ ] SendGrid: E-Mail-Templates bauen
- [ ] Google Search Console verifizieren (Alexander manuell)
- [ ] Alten GitHub-Token auf github.com löschen (Alexander manuell)
- [ ] Netlify kündigen (Alexander manuell)

## Accounts & Kosten
| Posten | Anbieter | Kosten |
|--------|----------|--------|
| Domain | united-domains | ~15 €/Jahr |
| E-Mail Mail M | united-domains | 1,25 €/Monat |
| Website Hosting | Vercel | 0 € (Free) |
| App Hosting | Bubble.io | 0 € (Starter) |
| Zahlungen | Stripe | 1,5% + 0,25€ pro Zahlung |
| E-Mail-Versand | SendGrid | 0 € (Free, 100/Tag) |
| Marke DPMA | DPMA | 290 € einmalig |

## Wichtige Designvorgaben
- Farben: Gold `#C8922A`, Dark `#1A1208`, Cream `#F5F0E8`
- Fonts: Fraunces (Serif, Headlines) + DM Sans (Body)
- Sprache: Immer Deutsch

## Hinweise
- Antworte Alexander immer auf Deutsch
- Das Projekt heißt **Partyretter** (nicht MeinPartyRetter – das war der alte Name)
- Alexander ist kein Entwickler – Erklärungen einfach und klar halten
