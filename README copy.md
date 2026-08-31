# Abdul Basit — Portfolio

A premium, dark-themed Next.js + TypeScript + Tailwind CSS + Framer Motion
portfolio for a Digital Producer / AI & Web Developer.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing content

All editable content lives in `data/`:

- `data/projects.ts` — featured work
- `data/skills.ts` — skill categories + the skills constellation
- `data/experience.ts` — work experience timeline
- `data/certifications.ts` — certifications strip
- `data/testimonials.ts` — testimonial quotes

Stats (the "10+ Projects Built" row) live directly in `components/Stats.tsx`
in the `statsData` array.

## Structure

```
app/            Routes, layout, global styles, SEO (sitemap, robots)
components/     One component per section (Navbar, Hero, About, ...)
data/           Editable content arrays
public/         Static assets (favicon, etc.)
```

## Build for production

```bash
npm run build
npm run start
```

## Notes

- Replace the placeholder `#` links, email, GitHub and LinkedIn URLs in
  `components/Contact.tsx`, `components/Footer.tsx`, and `app/layout.tsx`.
- Add real project screenshots by swapping the placeholder gradient panels
  in `components/Projects.tsx` for `next/image`.
- Update `siteUrl` in `app/layout.tsx` and `app/sitemap.ts`/`app/robots.ts`
  once the site has a real domain.
