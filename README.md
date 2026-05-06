# NSY LLC Website

Static one-page website for NSY LLC.

## Files

- `public/index.html` contains the page structure and copy.
- `public/styles.css` contains the responsive visual design.
- `public/main.js` turns the contact form into a pre-filled email draft.
- `public/assets/` contains the SVG logo, favicon, hero banner, and social preview image.
- `.do/app.yaml` contains a DigitalOcean App Platform static-site app spec.

## DigitalOcean App Platform Deployment

This project is static HTML/CSS/JS under `public/`. There is no `package.json` at the repo root, so the App Platform wizard often shows **“No components detected”** until you either add a component manually, use the app spec, or rely on the root `Dockerfile` (nginx serving `public/`).

### Option A — Static Site (recommended)

1. Push this repo to GitHub or GitLab.
2. In DigitalOcean: **Apps** → **Create App** → connect the repo.
3. If you see **No components detected**, continue anyway: use **Add resource** (or **Edit** in the resources step) → **Static Site**.
4. Configure the static site:
   - **Source directory**: `/` (repo root)
   - **Build command**: leave empty
   - **Output directory**: `public`
5. Deploy, then open the `*.ondigitalocean.app` URL. Custom domains: **Settings → Domains** and follow DNS instructions.

### Option B — App spec (`.do/app.yaml`)

If the create flow offers **autodetect from app spec** or **import spec**, point it at `.do/app.yaml` in this repo so the static site is defined without relying on autodetection.

### Option C — Dockerfile (autodetect)

A root `Dockerfile` copies `public/` into nginx (`nginx-default.conf` listens on **8080**, which matches App Platform health checks). That runs as a small container instead of the “Static Site” resource type; use Option A if you specifically want a static-site component.

You can also deploy with `doctl` using `.do/app.yaml` after wiring your Git remote and any registry settings DigitalOcean requires.

## Contact

The contact form and direct email links use:

`hello@nsyllc.com`
