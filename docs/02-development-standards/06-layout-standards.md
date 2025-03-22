# Layout Standards

## Core Layout Structure

### Route Organization
- All unauthenticated routes under `app/auth/*`
- All authenticated routes under `app/(authenticated)/*`
- Layout separation for different contexts:
  ```
  app/
  ├── auth/              # Unauthenticated routes
  │   ├── login
  │   ├── register
  │   └── forgot-password
  ├── (authenticated)/   # Protected routes requiring authentication
  │   ├── dashboard
  │   ├── settings
  │   └── [other protected routes]
  └── (public)/         # Optional public routes
      └── [public pages]
  ```

### Authentication Layer
- All unauthenticated routes under `app/auth/*`
- Login page with Supabase integration
- Remember me functionality
- Password reset capability
- Configurable social login support

### Main Application Layout

#### Layout Components
```typescript
// Standard layout structure
<DashboardLayout>
  <Sidebar /> {/* Collapsible with icons */}
  <MainContent>
    <Header>
      <Breadcrumbs />
      <SearchTrigger />
      <ThemeToggle />
    </Header>
    <Content />
  </MainContent>
</DashboardLayout>
```

#### Component Requirements

1. **Sidebar**
   - Collapsible with icon-only state
   - Independent scrolling
   - Grouped navigation items
   - Collapsible sections
   - Default expanded state on session start

2. **Header**
   - Fixed height (ShadCN default)
   - Breadcrumb navigation
   - Search trigger
   - Theme toggle (Light/Dark/System)

3. **Content Area**
   - Maximum width constraint
   - Centered layout
   - Independent scrolling
   - Proper padding/margins

## Navigation Structure

### Sidebar Navigation
```typescript
// Standard navigation configuration structure
{
  section: "Section Name",
  items: [
    {
      title: "Group Title",
      icon: "icon-name",
      items: [
        {
          title: "Item Title",
          href: "/route-path",
          icon: "optional-icon"
        }
      ]
    }
  ]
}
```

### Breadcrumb Standards
- Automatically generated from routes
- Clickable navigation points
- Matches route structure
- Uses route segments for labels

## Theme Management

### Requirements
- System theme as default
- Animated theme transitions
- Standard ShadCN color palette
- No custom color overrides
- Accessible color contrasts

### Theme Toggle
- Three-state toggle (Light/Dark/System)
- Positioned in header
- Animated state transitions
- No dropdown menu

## Search Functionality

### Global Site Search
- Comprehensive indexing of all application content
- Real-time search capabilities
- Categorized results presentation

### Search Scope
1. **Navigation & Routes**
   - All available pages and routes
   - Section headers and navigation items
   - Quick navigation shortcuts

2. **Page Content**
   - Content within pages
   - Data in tables and lists
   - Form fields and labels
   - Dynamic content (when indexed)

3. **Actions & Operations**
   - Available user actions
   - CRUD operations
   - Bulk operations
   - Common workflows

4. **Settings & Configuration**
   - User preferences
   - System settings
   - Configuration options
   - Feature flags

5. **Documentation & Help**
   - Inline documentation
   - Help text
   - Tool tips
   - Error messages

### Search Implementation
```typescript
interface SearchIndex {
  routes: RouteIndex[]
  content: ContentIndex[]
  actions: ActionIndex[]
  settings: SettingIndex[]
  docs: DocIndex[]
}

interface SearchResult {
  type: 'route' | 'content' | 'action' | 'setting' | 'doc'
  title: string
  description: string
  path: string
  category: string
  keywords: string[]
  relevance: number
}
```

### Search Features
- Real-time suggestions
- Fuzzy matching
- Keyword highlighting
- Search history
- Recent searches
- Popular results
- Category filters

### Search UI/UX
- Instant search results
- Keyboard navigation
- Category grouping
- Result previews
- Action shortcuts
- Search analytics

## Implementation Guidelines

### Layout Components
- Must use TypeScript
- Must implement responsive design
- Must handle loading states
- Must manage error boundaries

### State Management
- Sidebar collapse state (non-persistent)
- Theme preference (system default)
- Search history (session-based)
- Authentication state

### Performance Considerations
- Lazy-loaded route components
- Optimized theme switching
- Efficient search indexing
- Minimal layout shifts

## Accessibility Standards

### Navigation
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- ARIA labels and roles

### Theme Switching
- Respects user preferences
- Proper contrast ratios
- Clear visual indicators
- Smooth transitions

## Security Considerations

### Authentication
- Protected routes
- Session management
- Secure data handling
- Role-based access control

### Route Protection
- Auth middleware
- Role validation
- Redirect handling
- Error states 