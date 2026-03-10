FROM node:22-alpine AS base

# Dependências
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# Build
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Produção
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
# HOSTNAME 0.0.0.0 é fundamental para o Docker expor a porta corretamente
ENV HOSTNAME "0.0.0.0"
ENV PORT 3000

# Next.js standalone (otimizado)
COPY --from=builder /app/public ./public
# O Next.js standalone precisa que os estáticos sejam movidos para o seu escopo
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]