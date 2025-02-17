# Use Node.js as base image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies first
COPY package*.json ./
RUN npm install

# Copy all project files into the container
COPY . . 

# Expose the port
EXPOSE 3000

# Start the application
CMD ["node", "index.js"]
