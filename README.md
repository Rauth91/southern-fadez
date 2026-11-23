# Southern Fadez

The public website for Southern Fadez Barbershop in Gonzales, Louisiana.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks

```bash
npm run lint
npm run build
```

## Deployment

Cloudflare Pages is the primary production target. Use the **Next.js (Static
HTML Export)** preset with:

- Build command: `npm run build:cloudflare`
- Build output directory: `out`
- Production branch: `main`

Cloudflare provides `CF_PAGES_URL` during its build. Set
`NEXT_PUBLIC_SITE_URL` when a custom domain is connected so canonical and
social URLs use that domain.

The existing GitHub Actions workflow remains available as a fallback and
publishes the same static site under `/southern-fadez` on GitHub Pages.
