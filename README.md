# Deliberate - Decision Tracking App

**Deliberate** is a personal decision-making assistant that helps users track hesitations, weigh pros and cons, and learn from past decisions. Users can log their decisions, mark outcomes, and let the AI provide suggestions based on historical patterns. Built as a monorepo with React, Node.js, Express, Prisma, TailwindCSS, and deployed on Fly.io.

---

## Features

- User authentication via Supabase (email/password + OAuth)
- Create and manage decisions with title, description, and due dates
- Add pros and cons for each decision
- Mark decisions as **decided** and log outcomes (good/bad)
- AI-assisted decision recommendations and pattern learning (future)
- Upload historical decision data for personalized insights
- Responsive design with TailwindCSS
- Persistent storage via Supabase Postgres

---

## Tech Stack

- **Frontend:** React + Vite + TypeScript + TailwindCSS  
- **Backend:** Node.js + Express + TypeScript + Prisma ORM  
- **Database & Auth:** Supabase Postgres + Supabase Auth  
- **Deployment:** Fly.io (single service for frontend + backend)  
- **Package Management:** pnpm (monorepo setup)  
- **Version Control:** Git + GitHub

---

## Monorepo Structure

decision-app/
├── apps/
│ ├── web/ # React frontend
│ └── api/ # Node.js + Express backend
├── prisma/ # Prisma schema and migrations
├── packages/ # Shared packages (types, UI components)
├── pnpm-workspace.yaml
├── package.json
└── tsconfig.base.json


---

## Setup

1. Clone the repository:

  ```bash
  git clone <repo-url>
  cd decision-app
  ```
2. Install dependencies:
  ```bash
  pnpm install
  ```
3. Set up environment variables (example .env):
  ```bash
  DATABASE_URL=<your-supabase-db-url>
  SUPABASE_ANON_KEY=<your-supabase-anon-key>
  SUPABASE_SERVICE_ROLE_KEY=<your-supabase-service-role-key>
  PORT=3000
  ```
4. Run Prisma migrations:
  ```bash
  pnpm --filter api prisma migrate dev
  ```
5. Run locally:
  ```bash
  pnpm --filter web dev   # Frontend
  pnpm --filter api dev   # Backend
  ```
6. Deploy to Fly.io:
  ```bash
  fly launch
  fly deploy
  ```
