FROM node:16.13.1

WORKDIR /app

COPY package.json .

RUN npm install

RUN npx husky install

COPY . .

CMD ["npm", "run", "dev"]