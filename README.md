# Kalyani Foundation

This build restores the original Kalyani Foundation website UI from its public source and integrates the supplied animated Doodle Crew React component as the closing section. The original wordmark, illustrated logo, navigation, copy, visual design and scroll interactions are retained. The official symbol and full logo are included as `public/kalyani-symbol.webp` and `public/kalyani-logo.webp`.

## Run locally

```sh
npm ci
npm run dev
```

## Build

```sh
npm run build
```

The GitHub Pages workflow deploys `dist/` from `main`. The contact form follows the reference site and prepares an email draft; backend integration can be added when backend files are supplied.
