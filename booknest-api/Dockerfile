# Use Node.js official lightweight image
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy dependency files first
COPY package*.json ./

# Install all dependencies (including dev)
RUN npm install

# Copy entire project source
COPY . .

# Expose the port your app uses
EXPOSE 5000

# Start the app
CMD ["node", "server.js"]