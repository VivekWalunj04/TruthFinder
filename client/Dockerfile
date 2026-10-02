# ---------- Build stage ----------
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
COPY server/package.json ./server/package.json
COPY client/package.json ./client/package.json

RUN npm ci --workspace=client --include-workspace-root=false

COPY client/index.html ./client/index.html
COPY client/src ./client/src
COPY client/public ./client/public
COPY client/tsconfig*.json ./client/
COPY client/vite.config.ts ./client/vite.config.ts
COPY client/tailwind.config.js ./client/tailwind.config.js
COPY client/postcss.config.js ./client/postcss.config.js

RUN npm run build --workspace=client


# ---------- Production stage ----------
FROM nginx:alpine

COPY --from=builder /app/client/dist /usr/share/nginx/html

COPY client/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]