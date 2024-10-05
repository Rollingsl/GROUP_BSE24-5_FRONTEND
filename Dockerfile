# Step 1: Use Node.js as the base image
FROM node:18-alpine AS build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and pnpm-lock.yaml files
COPY package.json pnpm-lock.yaml ./

# Step 4: Install pnpm globally
RUN npm install -g pnpm

# Step 5: Install dependencies
RUN pnpm install

# Step 6: Copy the rest of the application code
COPY . .

# Step 7: Build the application for production
RUN pnpm run build

# Step 8: Use a lightweight web server to serve the static files (Nginx)
FROM nginx:alpine AS production

# Step 9: Copy the build output to the Nginx HTML folder
COPY --from=build /app/dist /usr/share/nginx/html

# Step 10: Copy the custom Nginx configuration (optional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Step 11: Expose port 80 to the outside world
EXPOSE 80

# Step 12: Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
