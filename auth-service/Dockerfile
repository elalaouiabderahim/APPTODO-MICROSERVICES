FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Générer Prisma Client
RUN npx prisma generate

# Compiler NestJS
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]