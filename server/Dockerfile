FROM node:8.11.1-alpine
RUN apk add --update bash && rm -rf /var/cache/apk/*

# Create the app directory
WORKDIR /srv/www

# Install dependencies
#   A wildcard is used to ensure both package.json and package-lock.json are copied where available (npm@5+)
#   TIP: Always run "npm install" or "npm install --only=production" before copying any source files to your image
COPY package*.json ./
RUN npm install

# Bundle app
COPY . .

EXPOSE 3000
CMD ["npm", "run", "dev"]