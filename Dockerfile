FROM node:20-alpine

WORKDIR /app

COPY package.json ./

RUN npm install
RUN npm run prisma:migrate-apply
RUN npm run prisma:seed

COPY . .

ENTRYPOINT npm run start:dev

EXPOSE 3000