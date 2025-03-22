# Frontend Development Documentation

## Documentation Structure

### 1. Getting Started
- [Introduction](./01-getting-started/01-introduction.md)
- [Setup Guide](./01-getting-started/02-setup-guide.md)
- [Architecture](./01-getting-started/03-architecture.md)
- [Quick Start](./01-getting-started/04-quick-start.md)

### 2. Development Standards
- [Coding Standards](./02-development-standards/01-coding-standards.md)
- [TypeScript Guidelines](./02-development-standards/02-typescript.md)
- [Component Patterns](./02-development-standards/03-component-patterns.md)
- [State Management](./02-development-standards/04-state-management.md)
- [Testing Standards](./02-development-standards/05-testing-standards.md)
- [Layout Standards](./02-development-standards/06-layout-standards.md)
- [Authentication Standards](./02-development-standards/07-authentication-standards.md)

### 3. Server-Side Development
- [SSR Principles](./03-server-side/01-ssr-principles.md)
- [API Routes](./03-server-side/02-api-routes.md)
- [Data Fetching](./03-server-side/03-data-fetching.md)
- [Security](./03-server-side/04-security.md)

### 4. Performance & Optimization
- [Optimization](./04-performance/01-optimization.md)
- [Build Process](./04-performance/02-build-process.md)
- [Monitoring](./04-performance/03-monitoring.md)
- [Best Practices](./04-performance/04-best-practices.md)

### 5. Quality Assurance
- [Code Review](./05-quality/01-code-review.md)
- [Testing](./05-quality/02-testing.md)
- [Documentation](./05-quality/03-documentation.md)
- [Error Handling](./05-quality/04-error-handling.md)
- [Linting](./05-quality/05-linting.md)

### 6. Development Workflow
- [Development Process](./06-workflow/01-development-process.md)
- [Git Workflow](./06-workflow/02-git-workflow.md)
- [CI/CD](./06-workflow/03-ci-cd.md)
- [Deployment](./06-workflow/04-deployment.md)

### 7. Cross-Cutting Concerns
- [Logging](./07-cross-cutting/01-logging.md)
- [Security](./07-cross-cutting/02-security.md)
- [Monitoring](./07-cross-cutting/03-monitoring.md)
- [Accessibility](./07-cross-cutting/04-accessibility.md)

### 8. Product Requirements
- [Login Page](./08-product-requirements/01-login-page.md)

## Quick Start for New Developers

1. Start with [Introduction](./01-getting-started/01-introduction.md)
2. Follow the [Setup Guide](./01-getting-started/02-setup-guide.md)
3. Review [Layout Standards](./02-development-standards/06-layout-standards.md)
4. Review [Authentication Standards](./02-development-standards/07-authentication-standards.md)
5. Follow [Development Process](./06-workflow/01-development-process.md)

## Key Principles

1. Server-first approach
2. Type safety with TypeScript
3. Performance optimization
4. Code quality and maintainability
5. Comprehensive testing
6. Security by design
7. Consistent layout structure
8. Standardized authentication flow

## Contributing

When adding new documentation:
1. Follow the established directory structure
2. Use markdown for consistency
3. Include practical examples
4. Cross-reference related documents
5. Update this README.md when adding new sections

## Project Structure

This project uses the `src/` directory structure for all source code. The main application code is organized as follows:

```
src/
├── app/            # Next.js app router pages and layouts
├── components/     # Reusable UI components
├── lib/            # Utility functions and shared libraries
└── styles/         # Global styles
```

When referencing files or paths in documentation or code, always include the `src/` prefix. 