# Repository Instructions

## Project
- This is an Angular 22 standalone application with server-side rendering and client hydration.
- Application code lives in `src/app`: shared layout components are under `components/layout`, pages under `components/pages`, and data services under `services`.
- Components use colocated TypeScript, HTML, CSS, and `*.spec.ts` files. Follow the nearby standalone-component and Angular template conventions.
- Global styles are in `src/styles.css` and import Tailwind CSS v4. Keep component-specific styles with their component.
- The app configures routing, hydration, `HttpClient`, and `ng2-charts` in `src/app/app.config.ts`.

## Commands
- `npm start` starts the development server.
- `npm run build` builds the application, including its configured server output.
- `npm test -- --watch=false` runs the Vitest suite once.

## Testing Notes
- Add or update colocated specs for behavior changes and run the relevant checks after editing.
- Existing test baseline is not green: the dashboard template currently includes `<app-dashboard>` within itself, causing recursive rendering and stack overflows in component tests. The app spec also expects `Hello, angularTest`, while the current root template renders `Hello Tailwind v4!`. Treat these as pre-existing failures unless a task changes those areas.
- Avoid adding a component's own selector to its template unless recursive rendering is explicitly intended.

## TypeScript
- Preserve the strict compiler settings in `tsconfig.json`; handle potentially missing values and index-signature access explicitly.
- Keep changes focused and follow existing naming and file placement conventions.