# NSY LLC Website

Static one-page website for NSY LLC.

## Files

- `public/index.html` contains the page structure and copy.
- `public/styles.css` contains the responsive visual design.
- `public/main.js` turns the contact form into a pre-filled email draft.
- `public/assets/` contains the SVG logo, favicon, hero banner, and social preview image.
- `.do/app.yaml` contains a DigitalOcean App Platform static-site app spec.

## DigitalOcean App Platform Deployment

Use DigitalOcean App Platform as a static site.

1. Push this folder to a GitHub or GitLab repository.
2. In DigitalOcean, go to **Apps** and choose **Create App**.
3. Connect the repository and select this project.
4. Add a **Static Site** component.
5. Use these settings:
   - **Source directory**: `/`
   - **Build command**: leave empty
   - **Output directory**: `public`
6. Deploy the app and open the generated `*.ondigitalocean.app` URL.
7. To add a custom domain, use the App Platform **Settings > Domains** flow and follow DigitalOcean's DNS instructions.

You can also deploy with `doctl` using `.do/app.yaml` after connecting the Git repository details in DigitalOcean or editing the spec for your Git provider.

## Contact

The contact form and direct email links use:

`hello@nsyllc.com`
