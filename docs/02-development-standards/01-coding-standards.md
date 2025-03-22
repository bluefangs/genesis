# Coding Standards

## File Organization

### File Size Limits
- Maximum 300-350 lines per file
- Break down larger components into smaller, focused components
- Extract complex logic into custom hooks
- Separate business logic from UI components

### File Structure
```typescript
// Standard file structure
import { ... } from 'react'
import { external } from 'external-libs'
import { internal } from '@/internal'
import { styles } from './styles'

// Types/Interfaces
interface Props {
  // ...
}

// Helper functions
const helperFunction = () => {
  // ...
}

// Component
export function Component() {
  // ...
}
```

## Code Organization

### Component Structure
1. Props interface/type definitions
2. State declarations
3. Derived state calculations
4. Effect hooks
5. Event handlers
6. Helper functions
7. Render logic

### Code Splitting Guidelines
- One component per file
- Separate hooks into their own files
- Utils/helpers in dedicated files
- Types in separate declaration files

## Naming Conventions

### Files and Directories
- Components: PascalCase (UserProfile.tsx)
- Hooks: camelCase (useAuth.ts)
- Utils: camelCase (formatDate.ts)
- Constants: UPPER_SNAKE_CASE
- Types: PascalCase (UserType.ts)

### Variables and Functions
```typescript
// Variables
const userName = 'John'              // camelCase for variables
const MAX_RETRY_COUNT = 3           // UPPER_SNAKE_CASE for constants
const [isLoading, setIsLoading] = useState(false)  // boolean prefixes

// Functions
function handleSubmit() { }         // verb + noun for event handlers
const calculateTotal = () => { }    // action-oriented naming
```

## Code Style

### Component Patterns
```typescript
// Prefer functional components
export function UserProfile({ user, onUpdate }: UserProfileProps) {
  // State declarations at the top
  const [isEditing, setIsEditing] = useState(false)

  // Effects after state
  useEffect(() => {
    // Clear effect logic
  }, [/* dependencies */])

  // Event handlers
  const handleSubmit = () => {
    // Clear, focused logic
  }

  // Render last
  return (
    <div>
      {/* JSX */}
    </div>
  )
}
```

### Props and Types
```typescript
// Explicit prop types
interface ButtonProps {
  variant: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
  onClick: () => void
  children: React.ReactNode
}

// Use type for simple cases
type Status = 'idle' | 'loading' | 'success' | 'error'
```

## Best Practices

### Readability
- Clear, descriptive variable names
- Single responsibility functions
- Comments for complex logic
- Consistent formatting

### Component Design
- Prefer small, focused components
- Extract reusable logic to hooks
- Keep components pure when possible
- Use composition over inheritance

### State Management
```typescript
// Local state
const [state, setState] = useState(initialState)

// Complex state
const [state, dispatch] = useReducer(reducer, initialState)

// Derived state
const derivedValue = useMemo(() => {
  // Complex calculations
}, [dependencies])
```

### Error Handling
```typescript
// Proper error boundaries
try {
  await riskyOperation()
} catch (error) {
  // Proper error handling with logging
  logger.error('Operation failed', { error })
  // User feedback
  showErrorNotification()
}
```

## Code Reviews

### Review Checklist
- File size limits respected
- Clear component structure
- Proper error handling
- Performance considerations
- Type safety
- Test coverage

### Common Anti-patterns
- Avoid nested ternaries
- No deeply nested conditions
- Prevent prop drilling
- Avoid premature optimization

## Documentation

### Required Documentation
- Component purpose
- Prop descriptions
- Complex logic explanation
- Performance considerations
- Security implications

### Example
```typescript
/**
 * UserProfile displays and manages user information
 * @param {User} user - The user object containing profile data
 * @param {Function} onUpdate - Callback when profile is updated
 * @returns {JSX.Element} Rendered component
 */
export function UserProfile({ user, onUpdate }: UserProfileProps) {
  // Implementation
}
```

## Automated Enforcement

For automated enforcement of these coding standards, refer to our [Linting](../05-quality/05-linting.md) documentation which details our ESLint configuration and automation processes. 