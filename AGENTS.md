# AGENTS.md

This document provides architecture and convention guidance for AI agents working on this codebase.

## Project Overview

KOI Thé Task Manager — a bilingual (Vietnamese / Traditional Chinese) field service management system for KOI Thé franchise stores. Stores report maintenance/construction tasks, which flow through an assistant who assigns them to SC (maintenance) or CT (construction) workers. Workers complete them, stores confirm.

## Tech Stack

- **Framework**: TanStack Start (file-based routing, SSR/SPA hybrid)
- **Auth**: Netlify Identity (`@netlify/identity`) with role-based access control
- **Database**: Netlify Database (Postgres) via Drizzle ORM (`drizzle-orm@beta`, `drizzle-kit@beta`)
- **Styling**: Tailwind CSS 4 (utility-first, no component library)
- **Language**: TypeScript 5.7 strict mode
- **Deployment**: Netlify

## Directory Structure

```
db/
├── schema.ts          # Drizzle schema definitions (source of truth for DB)
└── index.ts           # Drizzle client (drizzle-orm/netlify-db)
drizzle.config.ts      # Points migrations to netlify/database/migrations/
netlify/
├── database/
│   └── migrations/    # Auto-generated SQL migrations (never edit manually)
└── functions/
    └── identity-signup.ts  # Webhook: assigns default roles on signup
src/
├── components/
│   ├── AppLayout.tsx          # Main app shell (sidebar, header, role nav)
│   └── CallbackHandler.tsx    # Handles OAuth/email confirmation tokens
├── lib/
│   ├── auth.ts                # getServerUser() server function
│   ├── i18n.tsx               # Bilingual context + translations (vi/zh)
│   ├── identity-context.tsx   # React context for client-side auth state
│   └── server-fns.ts          # All Drizzle database server functions
├── middleware/
│   └── identity.ts            # Auth middleware for server functions
└── routes/
    ├── __root.tsx             # Root layout: I18nProvider + IdentityProvider
    ├── index.tsx              # Redirects to /dashboard or /login
    ├── login.tsx              # Login page
    ├── dashboard.tsx          # Role-based home dashboard
    ├── unauthorized.tsx       # 403 page
    ├── tasks/
    │   ├── index.tsx          # Task list (role-filtered, with batch assign)
    │   ├── new.tsx            # Create task (stores only)
    │   └── $taskId.tsx        # Task detail, assign, complete, confirm, comment
    └── admin/
        ├── index.tsx          # Admin dashboard + stats
        ├── users.tsx          # User management (edit roles, departments)
        ├── stores.tsx         # Store + region management
        └── settings.tsx       # Permissions overview + dept folders
```

## Key Patterns

### Authentication

All protected routes use `beforeLoad` with `getServerUser()` for SSR auth. Client-side uses `useIdentity()` from `identity-context.tsx`. Roles come from `user.roles` (Netlify Identity app_metadata).

### Role-Based Data Access

`getTasks()` in `server-fns.ts` filters results based on the caller's `app_users.role`:
- `admin/director/assistant` → all tasks
- `store` → only their store's tasks
- `sc_leader` → all SC tasks
- `sc_worker` → only tasks assigned to them
- `ct_worker` → all CT tasks
- `regional_manager` → tasks for stores in their region

### Bilingual (i18n)

All UI text goes through `useI18n()`. The `t()` function accepts translation keys defined in `src/lib/i18n.tsx`. Language preference is stored in localStorage. Add new keys to both `vi` and `zh` sections.

### Database Changes

1. Update `db/schema.ts`
2. Run `npx drizzle-kit generate`
3. Commit the generated migration file in `netlify/database/migrations/`
4. **Never** edit applied migrations or run `drizzle-kit push`

### Roles (Netlify Identity)

Roles are set in `app_metadata.roles` by:
- The `identity-signup.ts` webhook (default: `["store"]`, admin email gets `["admin"]`)
- Admin manually updating roles via Netlify Identity dashboard

### App Users Table

`app_users` stores extra profile data linked to Netlify Identity users by `netlify_id`. Every user needs a corresponding `app_users` row to function correctly. Admins create these via `/admin/users`.

## SC/CT Departments

- **SC** (maintenance): SC_LÂM, SC_TÍN, SC_BOX, SC_Y + SC Leader. Workers see only assigned tasks. Leader sees all SC tasks.
- **CT** (construction): CT_TUẤN, CT_LEE. Both workers see all CT tasks (no folder separation).

## Brand Assets

KOI Thé bear mascot images in `public/`:
- `koi-bear-drink.jpg` — sidebar logo
- `koi-bear-apron.jpg` — login page
- `koi-bear-shirt.jpg` — dashboard welcome banner

## Coding Conventions

- Tailwind CSS utility classes directly on elements (no CSS modules)
- Server functions in `src/lib/server-fns.ts` handle all DB operations
- Routes import server functions and call them in `useEffect` (client-side)
- All DB imports use `.js` extension in TypeScript (ESM requirement)
- `noUnusedLocals: true` — don't leave unused variables
