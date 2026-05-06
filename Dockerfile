# Lets DigitalOcean App Platform auto-detect this repo (static HTML in public/).
# App Platform health checks hit PORT (default 8080), not nginx’s default 80.
# Alternative: skip Docker and add a Static Site manually with output dir `public`.
FROM nginx:1.27-alpine
COPY public /usr/share/nginx/html
COPY nginx-default.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
