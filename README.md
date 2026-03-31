# Eesti Mesilane Pages

Static Vite + React site for GitHub Pages deployment.

## Local development

```bash
npm install
npm run dev
```

## Build for GitHub Pages

```bash
npm run build:pages
```

This produces a static `dist/` bundle with relative asset paths, which is safe to publish under a GitHub Pages repository subpath such as `/eesti-mesilane-pages/`.

## Deploy with GitHub Pages

The repository includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml`.

To use it:

1. Push the repository to GitHub.
2. In repository settings, enable GitHub Pages and set the source to `GitHub Actions`.
3. Push to `main` to trigger a deployment.
