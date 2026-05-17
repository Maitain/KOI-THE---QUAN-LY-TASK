[README.md](https://github.com/user-attachments/files/27898640/README.md)
# KOI Thé Task Manager - Hệ Thống Quản Lý Task / 工單管理系統

A bilingual Vietnamese-Chinese task management system for KOI Thé franchise operations. Allows stores to report maintenance/construction tasks, which are then assigned by an assistant to SC (maintenance) or CT (construction) workers, tracked through completion, and confirmed by the store.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Auth | Netlify Identity |
| Database | Netlify Database (Postgres + Drizzle ORM) |
| Styling | Tailwind CSS 4 |
| Language | TypeScript 5 (strict) |
| Deployment | Netlify |

## User Roles

| Role | Description |
|------|-------------|
| `admin` | Full system access, manage all users/stores/settings |
| `director` | View all tasks, manage like assistant |
| `assistant` | Receive tasks from stores, assign to SC/CT workers (batch or individual) |
| `regional_manager` | View and track tasks for their assigned region |
| `sc_leader` | View all SC tasks, assign to SC workers |
| `sc_worker` | View only personally assigned tasks (folder per worker) |
| `ct_worker` | View all CT tasks (no folder separation) |
| `store` | Create tasks, view own store's tasks, confirm completion |

## Task Workflow

1. **Store** creates a task (Báo Task / 回報工單)
2. **Assistant/Admin** assigns the task to an SC or CT worker
3. **Worker** accepts the task → marks in progress → completes with notes
4. **Store** confirms completion and provides rating/feedback

## Running Locally

```bash
npm install
npm run dev
```

> **Note:** Netlify Identity does not work on localhost. Authentication only works when deployed to Netlify. For local development, deploy to a branch preview.

## Default Admin Account

- Email: `admin@koicafe.vn`
- Password: `Koi888888`

(Create this account via Netlify Identity dashboard → Site configuration → Identity)

## SC Department Workers

- SC_LÂM, SC_TÍN, SC_BOX, SC_Y (plus SC Leader)

## CT Department Workers

- CT_TUẤN, CT_LEE
