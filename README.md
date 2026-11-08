# Rick and Morty

A responsive Nuxt 4 application for exploring Rick and Morty characters.
It uses Tailwind CSS, SSR, a layered data architecture, and the Rick and
Morty GraphQL API.

## Requirements

- Node.js 24.15 or newer

## Setup

```bash
npm install
npm run dev
```

The GraphQL endpoint defaults to the Rick and Morty API. Override it with:

```bash
NUXT_PUBLIC_GRAPHQL_ENDPOINT=https://example.com/graphql npm run dev
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

## Deployment

Vercel builds and deploys the `develop` branch using Nuxt's automatic Vercel preset.
The output directory is detected automatically and must not be set to the local
`.output` directory.
