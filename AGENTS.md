<!-- BEGIN:nextjs-agent-rules -->

# BuildRate Website Rules

## Project

BuildRate is a construction material price comparison and supplier discovery app focused on Ahmedabad, Gujarat.

## Tech

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Animate UI
- Motion only when Animate UI is not suitable
- Lucide React

## Design

- Use one fixed dark theme only.
- Do not add light mode or a theme toggle.
- Keep the current BuildRate visual identity: dark background, orange accent, subtle construction/blueprint visuals.
- Keep the design modern, professional and minimal.

## Animate UI

Use Animate UI whenever an appropriate component exists.

Do not introduce another animation library.

Use Motion directly only when necessary.

Respect reduced-motion preferences.

## SEO

Always consider SEO when creating or modifying pages.

Use:

- Semantic HTML
- Proper heading hierarchy
- Descriptive metadata
- Accessible images with meaningful alt text
- SEO-friendly content and URLs

Do not keyword stuff or make unsupported claims.

## Code Quality

- Keep components small and reusable.
- Avoid unnecessary abstraction.
- Prefer Server Components.
- Use Client Components only when needed.
- Avoid unnecessary dependencies.
- Do not add a backend unless genuinely required.
- Do not add excessive comments.
- Avoid multiline and single-line comments unless they provide useful context.

## Validation

After every task:

1. Check TypeScript errors.
2. Check ESLint errors.
3. Run the production build.
4. If a build/error occurs, investigate and fix it immediately.
5. Run the checks again after fixing.

Do not leave known build errors unresolved.

## Git

Do not create commits automatically.

After completing every task, provide:

- Short summary of changes
- Files changed
- TypeScript result
- ESLint result
- Production build result
- Suggested conventional commit message

Example:

`feat(website): add BuildRate navbar and hero`

<!-- END:nextjs-agent-rules -->
