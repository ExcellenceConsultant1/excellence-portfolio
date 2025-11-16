# Overview

Excellence Consultant is a full-stack financial services web application designed for a firm specializing in AI-powered bookkeeping, tax planning, and financial optimization. The platform serves as both a portfolio website and client engagement tool, targeting manufacturing and mid-sized businesses. The application features a modern, animated interface with cartoon-themed design elements, smooth transitions, and interactive components for service showcase, appointment booking, waitlist management, and client contact.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The frontend is built as a **single-page application (SPA)** using **React 18** with **TypeScript** in strict mode:

- **UI Framework**: Radix UI primitives wrapped with shadcn/ui components for consistent, accessible design patterns
- **Styling**: Tailwind CSS with custom CSS variables supporting theme customization, gradients, and glass-morphism effects
- **Animations**: Framer Motion for page transitions, scroll-triggered animations, floating icons, and interactive hover effects
- **Routing**: Wouter for lightweight client-side navigation
- **State Management**: TanStack Query (React Query) v5 for server state, API caching, and optimistic updates
- **Form Handling**: React Hook Form with Hookform Resolvers for validation
- **Build Tool**: Vite with ESM module resolution, path aliases (@, @shared, @assets), and hot module replacement

The application follows a component-based architecture organized into layout components (navigation, footer), section components (hero, services, about, appointments, contact), and reusable UI primitives. All sections are rendered on a single scrollable page with smooth-scroll navigation.

**Design Rationale**: The SPA architecture provides instant navigation and smooth animations crucial for the cartoon-themed, interactive experience. Radix UI ensures accessibility while allowing custom styling, and Framer Motion enables the playful, engaging animations specified in the requirements.

## Backend Architecture

The backend uses **Express.js** with **TypeScript** running in **ESM mode** (type: "module"):

- **API Design**: RESTful API with resource-based endpoints (/api/appointments, /api/contacts, /api/waitlist)
- **Request Handling**: Express middleware for JSON parsing, URL encoding, and custom request/response logging
- **Error Handling**: Centralized error handler middleware with proper HTTP status codes
- **Development Server**: Vite integration with middleware mode for HMR during development
- **Production Build**: esbuild bundling for optimized server deployment

The server implements clean separation between routing logic (routes.ts), data storage abstraction (storage.ts), and server setup (index.ts). The logging middleware provides detailed API monitoring including duration, status codes, and response payloads.

**Design Rationale**: Express provides simplicity and flexibility for the RESTful API. The storage abstraction layer allows switching between in-memory development storage and production database implementations without changing business logic.

## Data Storage Solutions

The application uses **PostgreSQL** as the primary database with **Drizzle ORM** and **Neon serverless driver**:

- **Schema Definition**: Type-safe schema using Drizzle's PostgreSQL dialect with automatic TypeScript type inference
- **Tables**: 
  - `users` - Authentication with username/password
  - `appointments` - Client appointment scheduling with service selection and time slots
  - `contacts` - General contact form submissions
  - `waitlist` - Email capture for software launch notifications
- **Validation**: Drizzle-Zod integration generates Zod schemas from database schema for consistent validation
- **Migrations**: Drizzle Kit for schema migrations stored in /migrations directory
- **Development Mode**: In-memory storage implementation (MemStorage class) for development without database dependency
- **Connection**: Neon serverless PostgreSQL for scalable, serverless database connectivity

All tables use UUID primary keys (via gen_random_uuid()) and include timestamp tracking for created records.

**Design Rationale**: Drizzle ORM provides type safety without runtime overhead, making the database schema the single source of truth. The storage interface abstraction enables testing and development without database setup. PostgreSQL offers robust relational capabilities for the structured business data.

## Authentication and Authorization

Currently implements a **basic user system** with planned session-based authentication:

- **User Schema**: Username/password fields with unique constraint on username
- **Storage Interface**: Methods for user creation and retrieval by ID or username
- **Session Infrastructure**: connect-pg-simple dependency included for PostgreSQL-backed session storage (not yet implemented)
- **Security Considerations**: Password storage field exists but encryption/hashing implementation pending

**Design Rationale**: The basic user schema provides foundation for future authentication. The connect-pg-simple integration will enable server-side session management with PostgreSQL persistence, avoiding JWT complexity while maintaining stateful authentication suitable for the business application context.

# External Dependencies

## Third-Party UI Libraries
- **Radix UI**: Comprehensive suite of unstyled, accessible UI primitives (accordion, dialog, dropdown, popover, select, tabs, toast, tooltip, etc.)
- **shadcn/ui**: Pre-styled Radix UI components following the "New York" style variant
- **Framer Motion**: Declarative animation library for page transitions, scroll animations, and interactive elements
- **Embla Carousel**: Carousel/slider functionality
- **cmdk**: Command palette component
- **Lucide React**: Icon library
- **class-variance-authority**: Utility for creating component variants
- **tailwind-merge + clsx**: Utility for merging Tailwind classes

## Backend Services
- **Neon Database**: Serverless PostgreSQL database provider via @neondatabase/serverless driver
- **Drizzle ORM**: TypeScript ORM with drizzle-orm and drizzle-kit for migrations
- **Drizzle-Zod**: Schema-to-validation integration

## Build & Development Tools
- **Vite**: Build tool and dev server with @vitejs/plugin-react
- **esbuild**: Production server bundling
- **tsx**: TypeScript execution for development
- **TypeScript**: Type checking and compilation
- **PostCSS + Autoprefixer**: CSS processing
- **Tailwind CSS**: Utility-first CSS framework

## Form & Validation
- **React Hook Form**: Form state management
- **@hookform/resolvers**: Form validation resolver integration
- **Zod**: Schema validation (via drizzle-zod)

## Query & State Management
- **TanStack Query**: Server state management and caching

## Routing
- **Wouter**: Lightweight routing library for React

## Development Utilities
- **@replit/vite-plugin-runtime-error-modal**: Runtime error overlay for Replit environment
- **@replit/vite-plugin-cartographer**: Replit-specific development tooling
- **date-fns**: Date manipulation utility

The application is designed for deployment on Replit with specific configuration for Replit's development and hosting environment.