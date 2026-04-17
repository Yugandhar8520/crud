FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install --only=production

COPY . .

EXPOSE 5000

CMD ["sh", "-c", "node wait-for-db.js && npm start"]