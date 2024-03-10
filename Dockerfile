FROM node:16-Alpine
RUN mkdir /app 
WORKDIR /app
COPY public/ ./public
COPY src/ ./src
COPY package.json .
COPY .env ./.env
RUN npm install
ENTRYPOINT ["npm","start"]
