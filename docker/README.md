# Docker Configuration for Webby

This directory contains Docker configurations for both development and production environments.

## Files

- `Dockerfile` - Production-ready multi-stage build for deploying the application
- `Dockerfile.dev` - Development configuration with hot-reloading
- `docker-compose.yml` - Production composition with all required services
- `docker-compose.dev.yml` - Development composition for local development

## Development Setup

For local development with Docker:

```bash
# Start the development environment
docker-compose -f docker/docker-compose.dev.yml up

# To rebuild the containers
docker-compose -f docker/docker-compose.dev.yml up --build

# Run in detached mode
docker-compose -f docker/docker-compose.dev.yml up -d

# View logs
docker-compose -f docker/docker-compose.dev.yml logs -f
```

The development setup includes:

- Hot-reloading for code changes
- Mounted volumes for the source code
- Isolated node_modules and .next directories

## Production Deployment

For production deployment:

```bash
# Build and start the production environment
docker-compose -f docker/docker-compose.yml up --build -d

# View logs
docker-compose -f docker/docker-compose.yml logs -f

# Scale services if needed
docker-compose -f docker/docker-compose.yml up -d --scale web=3
```

The production setup includes:

- Multi-stage builds for smaller image size
- Non-root user for security
- Health checks for container monitoring
- Optimized settings for production performance

## Adding Environment Variables

### Development

1. Add environment variables to the `docker-compose.dev.yml` file:

```yaml
services:
  web:
    environment:
      - NODE_ENV=development
      - YOUR_API_KEY=your-dev-key
      - DATABASE_URL=postgres://postgres:postgres@db:5432/webby_dev
```

### Production

1. Create a `.env.production` file in the project root (do not commit this file)
2. Reference the file in `docker-compose.yml`:

```yaml
services:
  web:
    env_file:
      - .env.production
```

## Adding New Services

To add new services (like Redis, MongoDB, etc.):

1. Add the service to the appropriate docker-compose file:

```yaml
services:
  # ... existing services

  redis:
    image: redis:alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data
    restart: unless-stopped

volumes:
  redis_data:
```

2. Update your application to use the service:

```javascript
// Example Redis connection
const redis = createClient({
  url: process.env.REDIS_URL || "redis://redis:6379",
});
```

## Docker Best Practices

- Keep images small by using multi-stage builds
- Don't run containers as root
- Use specific versions for base images
- Use health checks to ensure services are running properly
- Don't store secrets in Docker images
- Use volumes for persistent data
