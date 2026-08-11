# Din portfolio-skabelon

3 filer styrer det hele:
- **index.html** — indhold (tekst, billeder, videoer, links)
- **style.css** — udseende (farver, skrifttyper, afstand)
- **script.js** — de par småting der skal virke (mobilmenu, årstal)

Du skal stort set kun røre **index.html** og mapperne `billeder/` og `videoer/`.

## Sådan indsætter du dit eget indhold

1. **Læg dine filer i mapperne:**
   - Billeder → `billeder/`
   - Videoer → `videoer/`

2. **Åbn `index.html`** i en teksteditor (fx VS Code, eller bare Notesblok/TextEdit) og:
   - Skift al tekst med STORE BOGSTAVER som `DIT NAVN`, `PROJEKT TITEL 1` osv. ud med din egen tekst.
   - Skift `src="videoer/hero.mp4"` og lignende ud med navnet på din egen fil, fx `src="videoer/min-video.mp4"`.
   - Skift `src="billeder/galleri-1.jpg"` ud med dine egne billedfilnavne.
   - Skift `mailto:din@mail.dk`, `tel:+4500000000` og social media-links ud med dine egne.

3. **Vil du have flere eller færre projekter/galleri-billeder/værdier?**
   Hvert projekt er en `<article class="project">...</article>`-blok i HTML'en.
   Kopiér en hel blok for at tilføje et nyt, eller slet en blok for at fjerne et.
   Samme princip gælder galleribilleder og "værdi"-boksene under Om mig.

4. **Har du ikke en video til hero-sektionen (toppen af siden)?**
   Der står en note i HTML'en (søg efter "SKIFT VIDEO") og i CSS'en (søg efter "HERO BAGGRUND")
   der viser hvordan du bruger et billede i stedet.

## Sådan ser du siden

Du behøver ikke nogen server — dobbeltklik bare på `index.html`, så åbner den i din browser.
Gem filen igen efter en ændring, og genindlæs siden (F5) for at se resultatet.

## Sådan lægger du den ud på nettet (når du er klar)

Simpleste gratis muligheder:
- **Netlify** (drag-and-drop af mappen — netlify.com/drop)
- **GitHub Pages** (hvis du vil lære git)
- **Vercel**

Alle tre virker fint til en ren HTML/CSS/JS-side som denne — du uploader bare hele mappen.

## Farver og skrifttyper

Øverst i `style.css` under `:root{...}` ligger alle farverne samlet ét sted (`--gold`, `--teal` osv.).
Skift en hex-kode der, og den bruges automatisk alle steder på siden.
Skrifttyperne hentes fra Google Fonts — vil du bruge andre, skift navnene i `<link href="https://fonts.googleapis.com/...">`
i `index.html`'s `<head>`, og opdater `--display` / `--body` / `--mono` i CSS'en tilsvarende.
