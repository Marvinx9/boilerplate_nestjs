FROM node:20-alpine AS builder

RUN apk add --no-cache bash openssl libssl3 libc6-compat curl ca-certificates

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN chmod +x start.sh
RUN npx prisma generate
RUN npm run build

FROM node:20-alpine

RUN apk add --no-cache openssl libssl3 libc6-compat ca-certificates

WORKDIR /app

COPY package*.json ./
RUN npm install --only=production

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/start.sh ./start.sh
RUN chmod +x ./start.sh

CMD ["node", "dist/main"]