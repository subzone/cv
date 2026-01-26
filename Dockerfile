# Build stage
FROM node:18.12.1-alpine as build
WORKDIR /app
COPY . /app/
RUN npm install
RUN npm run build

# Serve stage
FROM nginx:1.27-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]