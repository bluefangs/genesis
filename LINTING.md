# Genesis Project Linting Guide

This document outlines the linting rules and procedures for the Genesis project.

## Linting Configuration

We use ESLint with Next.js specific configurations and custom rules to ensure code quality and consistency. Our linting setup enforces:

### File Organization
- Maximum 350 lines per file
- Break down larger components into smaller, focused components

### Code Structure
- Proper component structure (props, state, effects, handlers, render)
- One component per file
- Clear naming conventions

### Naming Conventions
- PascalCase for components and types
- camelCase for variables, functions, and hooks
- UPPER_SNAKE_CASE for constants

### Anti-patterns Prevention
- No nested ternaries
- No deeply nested conditions (max depth: 4)
- No parameter reassignment
- No prop drilling

### Documentation
- JSDoc for components and functions
- Description of props and return values

## Available Commands

Run these commands from the project root:

```bash
# Run linting to identify issues
npm run lint

# Fix linting issues automatically where possible
npm run lint:fix

# Run strict linting (fails on any warnings)
npm run lint:strict

# Format all files with Prettier
npm run format
```

## Manual Linting Process

1. Before submitting code for review, run `npm run lint:fix` to automatically fix any fixable issues
2. Address any remaining issues manually
3. Run `npm run format` to ensure consistent code formatting
4. Run `npm run lint:strict` to verify that all issues are resolved

## Editor Integration

For the best development experience, configure your editor to:

1. Run ESLint on save
2. Format with Prettier on save
3. Show linting errors and warnings inline

### VS Code Setup

1. Install the ESLint and Prettier extensions
2. Add these settings to your workspace settings.json:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## ESLint Rules Overview

Our ESLint configuration enforces:

1. **File Organization**
   - Maximum file size: 350 lines
   
2. **Naming Conventions**
   - camelCase for variables and functions
   - PascalCase for components and types
   - UPPER_SNAKE_CASE for constants
   
3. **Code Quality**
   - Maximum complexity: 15
   - Maximum depth: 4
   - Maximum nested callbacks: 3
   - Maximum parameters: 4
   
4. **Error Handling**
   - No console.log in production code
   - Proper error rejection
   
5. **Documentation**
   - JSDoc for all public functions and components
   
6. **React Best Practices**
   - Hooks rules strictly enforced
   - No array index as key
   - No useless fragments
   
7. **TypeScript**
   - No explicit any
   - Consistent type definitions (interfaces)
   - Explicit function return types 