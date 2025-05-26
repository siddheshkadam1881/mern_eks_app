FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

# Run react app in dev mode, listen on 0.0.0.0 so accessible externally
CMD ["npm", "start", "--", "--host", "0.0.0.0"]