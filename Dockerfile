# Lets DigitalOcean App Platform auto-detect this repo (static HTML in public/).
# Alternative: skip Docker and add a Static Site manually with output dir `public`.
FROM nginx:1.27-alpine
COPY public /usr/share/nginx/html
