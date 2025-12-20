FROM node:20-alpine

WORKDIR /app

# מעתיקים package.json מה-backend
COPY backend/package*.json ./

RUN npm install

# מעתיקים את כל קוד ה-backend
COPY backend/. .

EXPOSE 3000

CMD ["npm", "start"]
