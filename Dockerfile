# Usa a imagem oficial do Node.js (versão 22 leve)
FROM node:22-alpine

# Cria a pasta de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependência primeiro (otimiza o cache do Docker)
COPY package.json package-lock.json* ./

# Instala as dependências
RUN npm install

# Copia o resto do código do projeto
COPY . .

# Constrói a aplicação Next.js para produção
RUN npm run build

# Expõe a porta padrão do Next.js
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["npm", "start"]