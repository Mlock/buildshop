---
alwaysApply: true
---

# Please use this Scalable File Structure Template for Modern SaaS Applications as a refrence to understand how to structure our app

A comprehensive, reusable file structure template optimized for Next.js 15+ applications with multi-tenant architecture, authentication, and complex feature sets.

## Overview

This structure is designed for:
- **Multi-tenant SaaS applications**
- **Next.js 15+ with App Router**
- **TypeScript-first development**
- **Team collaboration and scalability**
- **Clear separation of concerns**

## File Structure

```
project-name/
├── src/                                    # Main source code directory
│   ├── app/                               # Next.js App Router (pages & API routes)
│   │   ├── (unauthenticated)/             # Public routes (no auth required)
│   │   │   ├── page.tsx                   # Landing page
│   │   │   ├── pricing/
│   │   │   ├── features/
│   │   │   ├── about/
│   │   │   ├── contact/
│   │   │   ├── blog/
│   │   │   └── layout.tsx                 # Public layout (header, footer)
│   │   │
│   │   ├── (authenticated)/               # Protected routes (auth required)
│   │   │   ├── dashboard/
│   │   │   │   ├── page.tsx               # Dashboard home
│   │   │   │   ├── analytics/
│   │   │   │   ├── billing/
│   │   │   │   ├── settings/
│   │   │   │   └── profile/
│   │   │   ├── media/
│   │   │   ├── users/
│   │   │   └── layout.tsx                 # Authenticated layout (sidebar, nav)
│   │   │
│   │   ├── (auth)/                        # Authentication routes
│   │   │   ├── signin/
│   │   │   ├── signup/
│   │   │   ├── forgot-password/
│   │   │   ├── reset-password/
│   │   │   └── layout.tsx                 # Auth layout (minimal)
│   │   │
│   │   ├── (tenant)/                      # Multi-tenant public routes
│   │   │   ├── [tenant]/
│   │   │   │   ├── page.tsx               # Tenant homepage
│   │   │   │   ├── [slug]/
│   │   │   │   ├── category/
│   │   │   │   └── author/
│   │   │   └── layout.tsx                 # Tenant-specific layout
│   │   │
│   │   ├── api/                           # API routes
│   │   │   ├── auth/                      # Authentication endpoints
│   │   │   │   ├── signin/
│   │   │   │   ├── signup/
│   │   │   │   └── refresh/
│   │   │   ├── posts/                     # Post management
│   │   │   │   ├── route.ts               # GET, POST /api/posts
│   │   │   │   └── [id]/
│   │   │   │       └── route.ts           # GET, PUT, DELETE /api/posts/[id]
│   │   │   ├── media/                     # File uploads
│   │   │   ├── webhooks/                  # External webhooks
│   │   │   │   ├── stripe/
│   │   │   │   └── github/
│   │   │   └── public/                   # Public API endpoints
│   │   │       └── posts/
│   │   │
│   │   ├── globals.css                    # Global styles
│   │   ├── layout.tsx                     # Root layout
│   │   ├── page.tsx                       # Root page
│   │   ├── loading.tsx                    # Global loading UI
│   │   ├── error.tsx                      # Global error UI
│   │   └── not-found.tsx                  # 404 page
│   │
│   ├── components/                        # Reusable UI components
│   │   ├── ui/                           # Base UI components (shadcn/ui)
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   └── index.ts                  # Re-export all components
│   │   │
│   │   ├── forms/                        # Form components
│   │   │   ├── login-form.tsx
│   │   │   ├── contact-form.tsx
│   │   │   ├── post-form.tsx
│   │   │   └── form-field.tsx            # Reusable form field wrapper
│   │   │
│   │   ├── layout/                       # Layout components
│   │   │   ├── header.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── sidebar.tsx
│   │   │   ├── navigation.tsx
│   │   │   └── breadcrumbs.tsx
│   │   │
│   │   ├── features/                     # Feature-specific components
│   │   │   ├── auth/                     # Authentication components
│   │   │   │   ├── auth-guard.tsx
│   │   │   │   ├── login-button.tsx
│   │   │   │   └── user-menu.tsx
│   │   │   ├── posts/                    # Post management
│   │   │   │   ├── post-card.tsx
│   │   │   │   ├── post-editor.tsx
│   │   │   │   ├── post-list.tsx
│   │   │   │   └── post-preview.tsx
│   │   │   ├── media/                    # Media management
│   │   │   │   ├── image-upload.tsx
│   │   │   │   ├── media-gallery.tsx
│   │   │   │   └── file-picker.tsx
│   │   │   ├── analytics/                # Analytics components
│   │   │   │   ├── chart.tsx
│   │   │   │   ├── metrics-card.tsx
│   │   │   │   └── dashboard.tsx
│   │   │   └── billing/                  # Billing components
│   │   │       ├── plan-card.tsx
│   │   │       ├── usage-meter.tsx
│   │   │       └── invoice-list.tsx
│   │   │
│   │   ├── marketing/                    # Marketing page components
│   │   │   ├── hero.tsx
│   │   │   ├── features.tsx
│   │   │   ├── pricing.tsx
│   │   │   ├── testimonials.tsx
│   │   │   └── cta.tsx
│   │   │
│   │   └── shared/                       # Shared utility components
│   │       ├── loading-spinner.tsx
│   │       ├── error-boundary.tsx
│   │       ├── toast.tsx
│   │       └── seo.tsx
│   │
│   ├── lib/                              # Utilities, services, and configurations
│   │   ├── auth/                         # Authentication logic
│   │   │   ├── auth-provider.tsx         # Auth context provider
│   │   │   ├── auth-utils.ts            # Auth helper functions
│   │   │   ├── middleware.ts             # Auth middleware
│   │   │   └── permissions.ts           # Role-based permissions
│   │   │
│   │   ├── database/                     # Database layer
│   │   │   ├── client.ts                 # Database client setup
│   │   │   ├── schema.ts                 # Database schema types
│   │   │   ├── queries/                  # Database queries
│   │   │   │   ├── posts.ts
│   │   │   │   ├── users.ts
│   │   │   │   ├── tenants.ts
│   │   │   │   └── media.ts
│   │   │   └── migrations/               # Database migrations
│   │   │       └── README.md
│   │   │
│   │   ├── services/                     # External service integrations
│   │   │   ├── email/                    # Email services
│   │   │   │   ├── resend.ts
│   │   │   │   ├── templates.ts
│   │   │   │   └── types.ts
│   │   │   ├── payments/                 # Payment processing
│   │   │   │   ├── stripe.ts
│   │   │   │   ├── webhooks.ts
│   │   │   │   └── types.ts
│   │   │   ├── storage/                  # File storage
│   │   │   │   ├── s3.ts
│   │   │   │   ├── upload.ts
│   │   │   │   └── types.ts
│   │   │   ├── ai/                       # AI services
│   │   │   │   ├── openai.ts
│   │   │   │   ├── anthropic.ts
│   │   │   │   └── types.ts
│   │   │   └── analytics/                # Analytics services
│   │   │       ├── google-analytics.ts
│   │   │       ├── mixpanel.ts
│   │   │       └── types.ts
│   │   │
│   │   ├── hooks/                        # Custom React hooks
│   │   │   ├── use-auth.ts
│   │   │   ├── use-tenant.ts
│   │   │   ├── use-debounce.ts
│   │   │   ├── use-local-storage.ts
│   │   │   └── use-api.ts
│   │   │
│   │   ├── utils/                        # Utility functions
│   │   │   ├── cn.ts                     # Class name utility
│   │   │   ├── date.ts                   # Date utilities
│   │   │   ├── string.ts                 # String utilities
│   │   │   ├── validation.ts             # Validation schemas
│   │   │   ├── formatting.ts             # Data formatting
│   │   │   └── constants.ts              # App constants
│   │   │
│   │   ├── types/                        # TypeScript type definitions
│   │   │   ├── auth.ts                   # Authentication types
│   │   │   ├── api.ts                    # API response types
│   │   │   ├── database.ts               # Database types
│   │   │   ├── components.ts             # Component prop types
│   │   │   └── global.ts                 # Global types
│   │   │
│   │   └── config/                       # Configuration files
│   │       ├── env.ts                    # Environment variables
│   │       ├── database.ts               # Database config
│   │       ├── auth.ts                   # Auth config
│   │       └── app.ts                    # App configuration
│   │
│   ├── middleware.ts                     # Next.js middleware
│   └── providers.tsx                     # Context providers wrapper
│
├── public/                               # Static assets
│   ├── images/
│   ├── icons/
│   ├── favicon.ico
│   └── robots.txt
│
├── docs/                                 # Documentation
│   ├── api/                              # API documentation
│   ├── deployment/                       # Deployment guides
│   ├── development/                      # Development guides
│   └── architecture/                     # Architecture decisions
│
├── scripts/                              # Build and utility scripts
│   ├── build.js
│   ├── deploy.js
│   ├── seed.js
│   └── migrate.js
│
├── tests/                                # Test files
│   ├── __mocks__/                        # Mock files
│   ├── components/                       # Component tests
│   ├── lib/                              # Library tests
│   ├── pages/                            # Page tests
│   └── utils/                            # Utility tests
│
├── .env.example                          # Environment variables template
├── .env.local                            # Local environment variables
├── .gitignore
├── next.config.ts                        # Next.js configuration
├── package.json
├── tsconfig.json                         # TypeScript configuration
├── tailwind.config.ts                    # Tailwind CSS configuration
├── eslint.config.js                      # ESLint configuration
├── prettier.config.js                    # Prettier configuration
└── README.md
```

## Section Explanations

### `/src/app/` - Next.js App Router
**Purpose**: Contains all pages and API routes following Next.js App Router conventions.

**File Types**:
- **Route files**: `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`
- **API routes**: `route.ts` files for API endpoints
- **Dynamic routes**: `[param]/` directories for dynamic segments
- **Route groups**: `(group)/` directories for organization without affecting URLs

**Key Patterns**:
- Use route groups `(unauthenticated)`, `(authenticated)`, `(auth)` for logical organization
- Each route group can have its own layout
- API routes follow RESTful conventions

### `/src/components/` - Reusable UI Components
**Purpose**: All React components organized by functionality and reusability.

**File Types**:
- **UI components**: Base design system components (buttons, inputs, cards)
- **Form components**: Form-specific components with validation
- **Layout components**: Header, footer, sidebar, navigation
- **Feature components**: Business logic components grouped by feature
- **Marketing components**: Landing page and marketing-specific components
- **Shared components**: Cross-cutting utility components

**Key Patterns**:
- Group by feature for complex components
- Keep UI components pure and reusable
- Use index.ts files for clean imports

### `/src/lib/` - Utilities and Services
**Purpose**: Contains all business logic, utilities, and external service integrations.

**File Types**:
- **Auth logic**: Authentication, authorization, middleware
- **Database layer**: Queries, schema definitions, migrations
- **Service integrations**: External APIs (email, payments, AI, analytics)
- **Custom hooks**: Reusable React hooks
- **Utility functions**: Pure functions for data manipulation
- **Type definitions**: TypeScript interfaces and types
- **Configuration**: App and service configuration

**Key Patterns**:
- Separate concerns by domain (auth, database, services)
- Use dependency injection for services
- Keep utilities pure and testable

### `/public/` - Static Assets
**Purpose**: Static files served directly by Next.js.

**File Types**:
- **Images**: PNG, JPG, SVG, WebP files
- **Icons**: Favicon, app icons, social media images
- **Documents**: PDFs, text files
- **Configuration**: robots.txt, sitemap.xml

### `/docs/` - Documentation
**Purpose**: Project documentation for developers and stakeholders.

**File Types**:
- **API docs**: OpenAPI specs, endpoint documentation
- **Deployment guides**: How to deploy to different environments
- **Development guides**: Setup, coding standards, architecture decisions
- **Architecture docs**: System design, data flow, decision records

### `/scripts/` - Build and Utility Scripts
**Purpose**: Automation scripts for development, build, and deployment.

**File Types**:
- **Build scripts**: Custom build processes
- **Deployment scripts**: Automated deployment
- **Database scripts**: Seeding, migrations, cleanup
- **Utility scripts**: Code generation, file processing

### `/tests/` - Test Files
**Purpose**: All test files organized by the code they test.

**File Types**:
- **Component tests**: React component testing
- **Unit tests**: Function and utility testing
- **Integration tests**: API and service testing
- **E2E tests**: Full user flow testing
- **Mock files**: Test doubles and fixtures

## Best Practices

### 1. **Naming Conventions**
- Use kebab-case for directories and files
- Use PascalCase for React components
- Use camelCase for functions and variables
- Use UPPER_CASE for constants

### 2. **Import Organization**
```typescript
// 1. React and Next.js imports
import React from 'react'
import { NextRequest } from 'next/server'

// 2. Third-party libraries
import { clsx } from 'clsx'
import { z } from 'zod'

// 3. Internal imports (absolute paths)
import { Button } from '@/components/ui/button'
import { auth } from '@/lib/auth'

// 4. Relative imports
import './styles.css'
```

### 3. **File Organization Rules**
- One component per file
- Co-locate related files (component + types + tests)
- Use index.ts files for clean exports
- Keep files under 200 lines when possible

### 4. **Route Group Benefits**
- **`(unauthenticated)`**: Public pages with marketing layout
- **`(authenticated)`**: Protected pages with dashboard layout
- **`(auth)`**: Authentication pages with minimal layout
- **`(tenant)`**: Multi-tenant public pages

This structure provides a solid foundation for scalable SaaS applications while maintaining clarity and team collaboration efficiency.
