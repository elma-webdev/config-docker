FROM node:20-alpine

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie os arquivos package.json e package-lock.json (ou yarn.lock)
# para instalar as dependências. Fazemos isso primeiro para aproveitar o cache do Docker.
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# --- Adicione esta linha para instalar o netcat ---
RUN apk add --no-cache netcat-openbsd

# Copia o script de espera para um local acessivel dentro do container
COPY wait-for-db.sh /usr/local/bin/wait-for-db.sh 
# /usr/local/bin geralmente esta no PATH

# Torna o script executavel
RUN chmod +x /usr/local/bin/wait-for-db.sh

# Copie o restante do código da sua aplicação para o diretório de trabalho
COPY . .

# Exponha a porta que sua aplicação Node.js escuta
EXPOSE 3000

# Comando para iniciar sua aplicação quando o container for iniciado
CMD ["sh", "-c", "wait-for-db.sh && npm run dev"]