# Kalyani Foundation website

A royal, scroll-led React and TypeScript frontend for Kalyani Foundation. The page follows the live reference site's mission, three pillars, approach, programmes, vision, contact details and social channels. The supplied Doodle Crew footer component is integrated with its animated crew and drifting doodles, styled in the foundation's bottle-green and antique-gold palette.

## Run locally

```sh
npm ci
npm run dev
```

## Build

```sh
npm run build
```

A successful production build is available in `dist/`. The Vite base path is `/kalyani-foundation/`, for a GitHub Pages project repository named `kalyani`.

The included GitHub Actions workflow builds and deploys `dist/` when changes reach `main`; configure GitHub Pages to use **GitHub Actions**. The contact form currently opens the visitor's email app with a prepared message. No backend source was included with the supplied component attachment; server-side form handling can be connected when that backend is provided.
