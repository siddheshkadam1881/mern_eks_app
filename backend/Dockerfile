# Use Node.js official image
FROM node:23-alpine3.20

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./

RUN npm config set strict-ssl false

RUN npm install --verbose

# Copy app source
COPY . .

# Expose app port
EXPOSE 5000

# Run the app
CMD ["node", "app.js"]
