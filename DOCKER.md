# Docker Setup for Braden's Bay Website

This project includes Docker configuration for both development and production environments.

## Files Created

-   `Dockerfile` - Multi-stage production build
-   `Dockerfile.dev` - Development environment
-   `docker-compose.yml` - Docker Compose configuration
-   `nginx.conf` - Nginx configuration for production
-   `.dockerignore` - Files to exclude from Docker build context

## Quick Start

### Production Build

```bash
# Build and run production container
docker-compose up --build

# Or build manually
docker build -t bradensbay-website .
docker run -p 3000:80 bradensbay-website
```

The website will be available at http://localhost:3000

### Development Environment

```bash
# Run development environment with hot reload
docker-compose --profile dev up bradensbay-dev

# Or build manually
docker build -f Dockerfile.dev -t bradensbay-dev .
docker run -p 5173:5173 -v $(pwd):/app -v /app/node_modules bradensbay-dev
```

The development server will be available at http://localhost:5173

## Docker Commands

### Build Commands

```bash
# Build production image
docker build -t bradensbay-website .

# Build development image
docker build -f Dockerfile.dev -t bradensbay-dev .

# Build using docker-compose
docker-compose build
```

### Run Commands

```bash
# Run production container
docker run -d -p 3000:80 --name bradensbay bradensbay-website

# Run development container with volume mounting
docker run -d -p 5173:5173 -v $(pwd):/app -v /app/node_modules --name bradensbay-dev bradensbay-dev

# Using docker-compose
docker-compose up -d                    # Production
docker-compose --profile dev up -d      # Development
```

### Management Commands

```bash
# View logs
docker logs bradensbay
docker-compose logs

# Stop containers
docker stop bradensbay
docker-compose down

# Remove containers and images
docker rm bradensbay
docker rmi bradensbay-website
docker-compose down --rmi all
```

## Production Features

-   **Multi-stage build** for optimized image size
-   **Nginx** web server for production serving
-   **Gzip compression** enabled
-   **Client-side routing** support for React SPA
-   **Static asset caching** with long-term cache headers
-   **Security headers** configured
-   **Health check endpoint** at `/health`

## Development Features

-   **Hot module replacement** enabled
-   **Volume mounting** for live code changes
-   **All dev dependencies** installed
-   **Vite dev server** with host binding for Docker

## Environment Variables

You can customize the build by setting environment variables:

```bash
# Example with custom port
docker run -p 8080:80 -e NODE_ENV=production bradensbay-website
```

## Troubleshooting

### Port Conflicts

If ports 3000 or 5173 are already in use, change them in docker-compose.yml:

```yaml
ports:
    - "8080:80" # Change 3000 to 8080
```

### Build Issues

If you encounter build issues, try:

```bash
# Clean build without cache
docker build --no-cache -t bradensbay-website .

# Remove all containers and images
docker system prune -a
```

### Volume Issues (Development)

If file changes aren't reflected:

```bash
# Restart the development container
docker-compose restart bradensbay-dev
```
