# Authentication Standards

## Route Structure

### Route Organization
```
src/app/
├── (auth)/            # Unauthenticated routes using a route group
│   ├── login/        # Login page
│   │   └── page.tsx
│   ├── register/     # Registration page
│   │   └── page.tsx
│   ├── forgot-password/  # Password recovery
│   │   └── page.tsx
│   └── layout.tsx    # Shared auth layout
├── (authenticated)/   # Protected routes requiring authentication
│   ├── layout.tsx    # Authentication check layout
│   ├── dashboard/    # Main dashboard
│   │   └── page.tsx
│   └── [other protected routes]
└── layout.tsx        # Root layout
```

> **Note**: This project uses the `src/` directory structure. All references to routes and file paths should be prefixed with `src/`.

## Supabase Integration

### Setup Requirements
- Supabase client configuration
- Environment variables management
- Type-safe database schema
- Role-based access control (RBAC)

### Authentication Features

#### Core Features
- Email/Password authentication
- Remember me functionality
- Password reset flow
- Session management
- Protected routes

#### Social Login (Configurable)
- Hidden by default
- Configurable through app settings
- Supported providers when enabled:
  - Google
  - GitHub
  - (Others as configured)

## Authentication Flow

### Login Process
1. Unauthenticated users redirected to `/(auth)/login`
2. Form validation with proper error handling
3. Remember me option persists session
4. Successful login redirects to dashboard
5. Failed attempts show appropriate errors

### Password Reset Flow
1. "Forgot Password" initiates reset
2. Email verification required
3. Secure reset token handling
4. Password strength validation
5. Success confirmation

## Route Protection

### Middleware Configuration
```typescript
// middleware.ts
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  // Check if the route is under (authenticated)
  if (request.nextUrl.pathname.startsWith('/(authenticated)')) {
    const response = NextResponse.next()
    const supabase = createMiddlewareClient({ req: request, res: response })
    
    const {
      data: { session },
    } = await supabase.auth.getSession()

    // Redirect to login if no session
    if (!session) {
      return NextResponse.redirect(new URL('/(auth)/login', request.url))
    }

    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/(authenticated)/:path*'
}
```

### Protected Routes
- All routes under `src/app/(authenticated)/*` are protected
- Middleware-based protection with automatic session validation
- Role-based access control for fine-grained permissions
- Secure redirect handling to login page when unauthorized
- Session verification on both client and server

## Session Management

### Session Requirements
- Secure token storage
- Automatic refresh handling
- Timeout management
- Multiple device handling

### Session Storage
- HTTP-only cookies
- Secure flag enabled
- SameSite policy
- XSS protection

## Security Standards

### Data Protection
- No sensitive data in localStorage
- Secure cookie handling
- CSRF protection
- XSS prevention

### Error Handling
- Generic error messages
- Secure error logging
- Rate limiting
- Brute force protection

## Implementation Guidelines

### Authentication Components
```typescript
// Standard auth component structure
export function AuthenticationForm() {
  // Form validation
  // Error handling
  // Loading states
  // Success handling
}
```

### State Management
- Authentication state
- Loading states
- Error states
- Redirect handling

## Testing Requirements

### Authentication Tests
- Login flow
- Password reset
- Session handling
- Error scenarios

### Security Tests
- CSRF protection
- XSS prevention
- Rate limiting
- Token handling

## Monitoring and Logging

### Authentication Events
- Login attempts
- Password resets
- Session timeouts
- Error occurrences

### Security Monitoring
- Failed attempts tracking
- Suspicious activity detection
- Rate limit breaches
- Session anomalies 