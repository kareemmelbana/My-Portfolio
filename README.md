# Kareem Elbana - Software Engineer Portfolio

A modern, responsive portfolio for Kareem Elbana, Software Engineer. The site presents skills, services, featured projects, experience, and direct contact options in a polished single-page experience.

## Live Features

- Premium responsive hero section
- About, skills, services, projects, and experience sections
- Featured project previews with live demos
- Email, phone, WhatsApp, GitHub, LinkedIn, and Khamsat links
- Downloadable CV
- SEO metadata and structured person data
- Accessible navigation and skip-to-content support
- Smooth reveal animations and mobile-friendly layouts

## Tech Stack

- React 19
- TanStack Start
- TanStack Router
- TypeScript
- Vite
- Tailwind CSS 4
- Radix UI
- Lucide React
- Cloudflare Nitro preset

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm or Bun

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open the local address printed by Vite in your browser.

## Available Commands

```bash
npm run dev       # Start the development server
npm run build     # Create a production build
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint
npm run format    # Format the project with Prettier
```

When Bun is available, the equivalent commands can be run with `bun run`.

## Project Structure

```text
src/
  components/        # Portfolio sections and reusable UI components
  data/
    portfolio.ts     # Profile, skills, services, projects, and contact data
  routes/
    __root.tsx       # Application shell and global metadata
    index.tsx        # Portfolio home route
  styles.css         # Global styles
public/
  images/            # Profile and project images
  files/             # Downloadable CV
```

## Updating Portfolio Content

Most portfolio content is centralized in `src/data/portfolio.ts`, including:

- Profile and contact details
- Social links
- Skills and service categories
- Featured projects
- Statistics

Page metadata and structured SEO data are in `src/routes/index.tsx`. Shared document metadata and global styles are in `src/routes/__root.tsx` and `src/styles.css`.

## Deployment

The Vite configuration uses TanStack Start with the Nitro Cloudflare Module preset. Build the project with:

```bash
npm run build
```

Deploy the generated output through your Cloudflare Workers or Pages deployment workflow.

## Contact

- Email: [Kareemmelbana@gmail.com](mailto:Kareemmelbana@gmail.com)
- WhatsApp: [+20 122 753 2476](https://wa.me/201227532476)
- GitHub: [github.com/kareemmelbana](https://github.com/kareemmelbana)
- LinkedIn: [linkedin.com/in/kareem-elbana-cs](https://linkedin.com/in/kareem-elbana-cs)
- Khamsat: [khamsat.com/user/kareemmelbana](https://khamsat.com/user/kareemmelbana)
