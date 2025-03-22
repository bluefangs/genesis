# Performance Guidelines

## Package Management

### Local Dependencies
- All dependencies MUST be installed locally via npm/yarn
- NO CDN usage for production builds
- Package versions MUST be locked (use package-lock.json or yarn.lock)
- Use exact versions instead of semver ranges

### Build Time Dependencies
```json
// Example package.json structure
{
  "dependencies": {
    // Production dependencies only
  },
  "devDependencies": {
    // Build and development tools
  }
}
```

## Build Optimization

### Bundle Size Management
- Enable tree shaking
- Configure proper code splitting
- Implement dynamic imports for routes
- Regular bundle size auditing

### Asset Optimization
- Images must use next/image
- Fonts must use next/font
- SVGs should be optimized at build time
- Static assets must be properly cached

### Code Splitting Strategy
- Route-based splitting (automatic in Next.js)
- Component-level code splitting
- Vendor chunk optimization
- Dynamic imports for large libraries

## Performance Metrics

### Core Web Vitals Targets
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

### Build Performance
- Build time monitoring
- Bundle size tracking
- Chunk count optimization
- Source map strategy

## Development Guidelines

### Package Selection Criteria
- Bundle size impact
- Tree-shaking support
- Maintenance status
- Security considerations

### Import Optimization
```typescript
// BAD
import { massive } from 'massive-library'

// GOOD
import { specific } from 'massive-library/specific'
```

### Build Configuration
```typescript
// next.config.js optimization example
module.exports = {
  experimental: {
    optimizeCss: true,
    optimizeImages: true,
    optimizeFonts: true
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  }
}
```

## Monitoring and Maintenance

### Regular Audits
- Weekly bundle size reviews
- Dependency updates
- Performance regression testing
- Lighthouse score monitoring

### CI/CD Integration
- Bundle size limits
- Performance budgets
- Automated optimization checks
- Build time limits 