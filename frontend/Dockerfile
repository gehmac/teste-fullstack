# Etapa 1: Construção
FROM node:18 AS builder

WORKDIR /front

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:18

WORKDIR /front

COPY --from=builder /front ./

EXPOSE 3030

CMD ["npm", "start", "--", "-p", "3030"]