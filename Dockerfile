# Base image
FROM node:22-slim

# Install pnpm
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Copy application code
COPY . .

# Install dependencies (including devDependencies for tsx and build tools)
RUN pnpm install

# Build the web application (static files)
# This will output to /app/apps/web/dist
RUN pnpm --filter web build

# Set the working directory to the API app
WORKDIR /app/apps/api

# The API serves the web/dist folder from ../web/dist
# Expose the internal port
EXPOSE 3000

# Start the API server using tsx directly to handle TypeScript imports from monorepo packages
CMD ["pnpm", "exec", "tsx", "app.ts"]
