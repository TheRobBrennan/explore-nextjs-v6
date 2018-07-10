FROM node:8.11.1-alpine
RUN apk add --update bash && rm -rf /var/cache/apk/*

# Create the app directory
WORKDIR /srv/www

# Install dependencies
COPY package*.json ./
RUN npm install

# Bundle app
COPY . .

EXPOSE 3000
CMD ["npm", "run", "dev"]