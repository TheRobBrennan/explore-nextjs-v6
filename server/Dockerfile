FROM node:8.11.1-alpine
RUN apk add --update bash && rm -rf /var/cache/apk/*

# Create the app directory
WORKDIR /srv/www

# Install dependencies
COPY package*.json ./
RUN npm install

# Bundle app
COPY README.md ./
COPY .babelrc ./
COPY next.config.js ./
COPY layout/ ./layout/
COPY pages/ ./pages/
COPY server/ ./server/
COPY static/ ./static/

EXPOSE 3000
EXPOSE 9229

CMD ["npm", "run", "dev"]