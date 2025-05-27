# -------- Stage 1: Build the React app --------
FROM node:18 AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy app files and build
COPY . .
RUN npm run build

# -------- Stage 2: Serve using Nginx --------
FROM nginx:alpine

# Remove default Nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy built React files from builder
COPY --from=builder /app/build /usr/share/nginx/html

# Optional: custom Nginx config (for React routing support)
# Uncomment if you have one
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]

