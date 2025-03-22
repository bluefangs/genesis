# ===== BASE STAGE =====
FROM node:18-alpine AS base
# Set working directory
WORKDIR /app
# Add Tini for proper signal handling
RUN apk add --no-cache tini
ENTRYPOINT ["/sbin/tini", "--"]

# ===== DEPENDENCIES STAGE =====
FROM base AS deps
# Install dependencies required for building node modules
RUN apk add --no-cache libc6-compat

# Copy package files for dependency installation
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci

# ===== BUILDER STAGE =====
FROM base AS builder
WORKDIR /app

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules
# Copy all application files
COPY . .

# Set environment variables for build
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production

# Build the application
RUN npm run build

# ===== RUNNER STAGE =====
FROM base AS runner
WORKDIR /app

# Set environment variables
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Create a non-root user to run the app
RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

# Copy only necessary files for running the application
COPY --from=builder /app/public ./public

# Copy the production build
# Leverage caching for standalone output
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Set correct permissions
RUN chown -R nextjs:nodejs /app

# Switch to non-root user
USER nextjs

# Expose the port the app runs on
EXPOSE 3000

# Define environment variable for the port
ENV PORT 3000
# Disable Next.js server telemetry
ENV HOSTNAME "0.0.0.0"

# Command to run the application
CMD ["node", "server.js"]
