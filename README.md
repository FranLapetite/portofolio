# Françoise Lapetite, Portfolio

Personal portfolio site for Françoise "Fran" Lapetite: product manager and engineer,
founder of Fran's Guide, and independent iOS developer. Live at
[francoiselapetite.com](https://francoiselapetite.com).

## Tech stack

- [Create React App](https://create-react-app.dev/) (react-scripts 5)
- React 19 + React Router 7
- [styled-components](https://styled-components.com/) for styling, driven by a single theme
  (`src/theme.js`) via `ThemeProvider`
- [framer-motion](https://www.framer.com/motion/) for page transitions and the hero stagger
- [emailjs-com](https://www.emailjs.com/) for the contact form (no backend)

## Running locally

```bash
npm install
```

```bash
cp .env.example .env
```

Fill in your own EmailJS credentials in `.env`, then:

```bash
npm start
```

Opens on [http://localhost:3000](http://localhost:3000). The `.env` file holds the EmailJS
service ID, template ID, and public key used by the contact form; see `.env.example` for the
required keys. Restart `npm start` after changing `.env`, since Create React App only reads
it at boot.

```bash
npm run build
```

```bash
npm run deploy
```

`build` writes a production bundle to `build/`. `deploy` builds and publishes `build/` to
GitHub Pages via the `gh-pages` package.

## Design system

All visual decisions live in `src/theme.js`. Nothing is hardcoded per file.

| Token group | Purpose |
| --- | --- |
| `colors` | Warm off-white base (`#FAF8F5`), ink text, hairline borders, one terracotta accent |
| `fonts` | Fraunces (serif display) for headings, Inter for body copy |
| `spacing` | `xs` through `xxl`, used for all padding and margins |
| `layout` | `maxWidth` (page), `textWidth` (prose column), `headerHeight` |
| `radii` | Deliberately small (2px to 6px); the design leans on hairlines, not rounded cards |

Shared layout and typographic primitives are in `src/components/primitives.js`
(`Section`, `Container`, `Eyebrow`, `PageTitle`, `Lede`, `Button`, `GhostButton`, ...).
Compose these rather than restyling from scratch in a page.

### Conventions

- Headings use fluid sizing via `clamp()` rather than breakpoint jumps.
- No em dash characters anywhere, in copy or in code.
- Custom props passed to styled-components are prefixed with `$` so they are not
  forwarded to the DOM.

## Project structure

```
public/
  mascot/          Fox illustrations, one PNG per mood (not named "fox":
                   that would collide with the /fox route on GitHub Pages)
  index.html       meta tags, Google Fonts, Person JSON-LD
  manifest.json
src/
  App.js           routing, layout shell, page-transition wiring
  theme.js         design tokens
  GlobalStyle.js   single global stylesheet
  components/
    primitives.js  shared layout and typographic building blocks
    Navbar.js      sticky top header
    Footer.js
    Reveal.js      intersection-observer fade-in, fires once per element
    PageTransition.js
    ScrollToTop.js resets scroll position on route change
    FoxMascot.js   renders public/mascot/<mood>.png
  pages/           one file per route
```

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/about` | About |
| `/projects` | Projects |
| `/experience` | Experience |
| `/hobbies` | Interests |
| `/contact` | Contact |
| `/privacy-policy` | Privacy Policy |
| `/fox` | Fox Den, a small interactive page featuring the mascot from the Fox app |
| `*` | 404 |

## The Fox mascot

`FoxMascot` takes a `mood` prop and renders the matching illustration from `public/mascot/`.
Available moods: `focused`, `reading`, `proud`, `judging`, `sleepy`, `happy`.

Fox Den maps checklist progress to a mood (`focused` at zero, `reading` in progress,
`proud` when complete). The 404 page uses `judging`.
