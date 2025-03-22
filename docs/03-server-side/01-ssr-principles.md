# Server-Side Rendering First

## Core Principles

1. Default to server components
2. Strategic client component usage
3. Proper hydration management
4. Efficient data fetching

## Guidelines

### Server Components
- Use server components by default for all new pages
- Implement data fetching at the server component level
- Keep sensitive operations server-side

### Client Components
- Use 'use client' directive only when necessary
- Common use cases:
  - Interactive UI elements
  - Client-side state management
  - Browser APIs usage

### Data Fetching
- Implement server-side data fetching
- Use proper caching strategies
- Handle loading and error states appropriately

### Performance Considerations
- Minimize client-side JavaScript
- Implement proper suspense boundaries
- Use streaming where appropriate

## Best Practices

1. Clear separation of server and client logic
2. Proper error boundary implementation
3. Efficient loading state management
4. Strategic use of static and dynamic rendering 