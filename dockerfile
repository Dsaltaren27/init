FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY dist ./dist

CMD ["node", "dist/logic.js"]
