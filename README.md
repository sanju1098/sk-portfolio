# Sanjay Kumar S R | Portfolio

A modern portfolio for Sanjay Kumar S R, a Frontend Engineer with 4.5+ years of experience building scalable React, Next.js, and TypeScript applications. The portfolio also highlights practical backend applications and REST APIs built with Node.js and Express.

## Highlights

- Responsive portfolio experience with dark and light themes
- Project showcase with screenshots, technology stacks, live demos, and repositories
- Experience timeline with company logos, roles, responsibilities, and technology context
- Skills, achievements, certificates, and résumé download
- Contact page with a mailto form and social profile links
- Shared image loading indicators with fallback handling
- Route-aware browser titles and portfolio-specific `SR` branding

## Pages

- `/` - Home
- `/about` - About and achievements
- `/projects` - Project showcase
- `/skills` - Technical skills
- `/experience` - Career timeline
- `/contact` - Contact details and message form

## Tech Stack

- React 19 and TypeScript
- Vite
- Tailwind CSS 4
- React Router
- Radix UI and Lucide React
- TanStack Query
- React Hook Form and Zod
- Node.js and Express for backend projects

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Run linting:

```bash
npm run lint
```

## Continuous Integration

The workflow in `.github/workflows/portfolio.yml` runs on pull requests targeting `master` and on pushes to `master`. It uses Node.js 22, installs dependencies with `npm install`, and verifies the project with `npm run build`.

## Live Demo

[View Live](https://sanjaysr.vercel.app/)
