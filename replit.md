# Overview

This is a full-stack web application built as a personal portfolio website for Neha Roy, a B.Tech IT student at NIT Kurukshetra. The project showcases her work as a designer and developer, featuring a modern React frontend with a Node.js/Express backend. The application displays portfolio items including hackathon registration page designs with various visual styles (glassmorphism, retro terminal, cyberpunk themes).

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **Form Handling**: React Hook Form with Zod validation via @hookform/resolvers

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development Server**: Custom Vite integration for development mode
- **Storage Layer**: Abstracted storage interface with in-memory implementation
- **API Structure**: RESTful API with `/api` prefix routing

## Data Storage Solutions
- **Database**: PostgreSQL configured via Drizzle ORM
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Current Implementation**: In-memory storage for development with interface for database integration

## Authentication and Authorization
- **Current State**: Basic user schema defined with username/password fields
- **Session Management**: Prepared for connect-pg-simple for PostgreSQL session storage
- **Security**: Password hashing and validation ready for implementation

## Design System
- **Component Library**: Comprehensive UI component system with consistent theming
- **Typography**: Inter font family with multiple weight variations
- **Color Scheme**: CSS custom properties for light/dark theme support
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints

# External Dependencies

## Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Router (Wouter)
- **Build Tools**: Vite with TypeScript support, PostCSS, Autoprefixer
- **Development Tools**: ESBuild for server bundling, TSX for development execution

## UI and Styling
- **Component Library**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS with class-variance-authority for component variants
- **Icons**: Lucide React for consistent iconography
- **Animations**: CSS-based animations with Tailwind utilities

## Database and Backend
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: Neon Database serverless PostgreSQL
- **Validation**: Zod for schema validation and type safety
- **Session Storage**: Connect-pg-simple for PostgreSQL session management

## Development and Utilities
- **State Management**: TanStack React Query for server state
- **Form Handling**: React Hook Form with Zod resolvers
- **Date Handling**: date-fns for date manipulation
- **Utility Libraries**: clsx and tailwind-merge for conditional styling

## Replit-Specific Integrations
- **Development Plugins**: Replit Vite plugins for runtime error handling, cartographer, and dev banner
- **Error Handling**: Runtime error modal overlay for development debugging