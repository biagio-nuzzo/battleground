# Stage 1: Build
FROM node:18-alpine as build

WORKDIR /app

# Copia i file di dipendenze
COPY package*.json ./

# Installa le dipendenze
RUN npm ci --only=production

# Copia il resto dei file
COPY . .

# Builda l'applicazione
RUN npm run build

# Stage 2: Production
FROM nginx:alpine

# Copia i file buildati dallo stage precedente
COPY --from=build /app/build /usr/share/nginx/html

# Copia una configurazione nginx personalizzata (opzionale)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Esponi la porta 80
EXPOSE 80

# Avvia nginx
CMD ["nginx", "-g", "daemon off;"]
