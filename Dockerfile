# Use Node.js for building the Angular app
FROM node:20 as builder

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all files and build the app
COPY . .
RUN npm run build

# Use a minimal Node.js image to run the SSR server
FROM node:20-alpine as server

# Set the working directory
WORKDIR /app

# Copy necessary files from builder
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/package*.json ./

# Install only production dependencies
RUN npm install --production

# Expose the server port
EXPOSE 4000

# Command to run the SSR server
CMD ["npm", "run", "serve:ssr:frontend"]
