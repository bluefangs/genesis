# Development Workflow

## Dependency Management

### Package Installation
- Use yarn/npm for all package installations
- NO direct CDN imports allowed
- All dependencies must be versioned in package.json
- Regular dependency audits required

### Version Control
- Lock files must be committed (package-lock.json/yarn.lock)
- Node version must be specified in .nvmrc
- Package manager version must be documented

## Build Process

### Development Build
- Fast refresh enabled
- Source maps included
- Development-only features enabled
- Performance monitoring active

### Production Build
- Optimization passes enabled
- No development dependencies included
- Minimized and compressed assets
- Source maps configured appropriately

## Code Quality

### Pre-commit Hooks
- Linting (see [Linting](../05-quality/05-linting.md) for details)
- Type checking
- Unit test runs
- Bundle size checks

### PR Requirements
- Performance impact assessment
- Bundle size diff
- Dependency changes documented
- Build time impact noted

## Continuous Integration

### Build Pipeline
- Clean dependency installation
- Full test suite execution
- Bundle size comparison
- Performance regression tests

### Quality Gates
- Maximum bundle size limits
- Test coverage thresholds
- Build time limits
- Core Web Vitals thresholds

## Deployment

### Environment Configuration
- Environment-specific builds
- Feature flags configuration
- API endpoint management
- Security settings

### Release Process
- Staged deployments
- Performance validation
- Rollback procedures
- Monitoring setup 