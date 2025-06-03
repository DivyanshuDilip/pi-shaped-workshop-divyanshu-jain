# Use Node.js LTS version base image
FROM node:18

# Create app directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the application
COPY . .

# Expose the port
EXPOSE 8080

# Start the app
CMD ["node", "index.js"]
