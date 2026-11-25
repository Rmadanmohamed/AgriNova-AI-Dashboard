# AgriNova AI Dashboard

A Next.js and React dashboard prototype for exploring smart-agriculture operations, including farm monitoring, crop health, sensors, robotics, drones, alerts, and recommendations.

> **Data interpretation:** The overview page includes hard-coded example KPI trends, activity markers, alerts, and recommendation text, with fallback values when the summary API does not provide data. Treat these as demonstration content, **not** live farm readings or verified AI performance.

## Tech stack

- Next.js 16, React 19, TypeScript
- Tailwind CSS, Recharts, Radix UI components
- Local data and application routes in `app/` and `data/`

## Run locally

Requires a Node.js version compatible with Next.js 16 and npm.

```bash
npm ci
npm run dev
```

Open the local URL displayed by Next.js. To check a production build:

```bash
npm run build
npm run start
```

These commands are documented from `package.json`; their success has **not** been verified in this review. The repository also includes a pnpm lockfile: select one package manager and avoid mixing lockfile updates.

## Code layout

- `app/page.tsx` — overview dashboard and illustrative KPI datasets.
- `app/` — application pages and API routes.
- `components/` — reusable dashboard and UI components.
- `data/` — supporting data files.
- `public/` — static assets.

## Limitations

- Dashboard values may be simulated, hard-coded, or derived from local sample data.
- Interactive buttons and API routes need functional and integration testing.
- No authenticated production farm-data connection is established by this README.
- Accessibility, responsive behavior, security, and deployment require independent validation.

## Related repository

[AgriNova smart-agriculture dashboard workspace](https://github.com/Rmadanmohamed/agrinova-smart-agriculture-dashboard) includes additional Power BI and documentation assets. The relationship between repository revisions should be reviewed before treating them as interchangeable.

## Project status

**Prototype / portfolio demonstration.** Build and runtime verification pending.
