This is a [Next.js](https://nextjs.org/)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- **Subreddit Copy:** The application replicates the functionality of the [confession](https://www.reddit.com/r/confession/) subreddit on Reddit.
- **Styling Libraries:**
  - [Tailwind CSS](https://tailwindcss.com/): Used for utility-first styling.
  - [Heroicons](https://heroicons.com/): Provides a set of free, MIT-licensed high-quality SVG icons.
  - [Headless UI](https://headlessui.dev/): A set of completely unstyled, fully accessible UI components.
  - clsx: A utility for conditionally joining class names.
- **State Management:**
  - Zustand: A small, fast, and scalable state management library.
  - Immer: Enables state updates with a simpler, more intuitive syntax.

## Sorting Mechanism

The page features a mechanism for sorting topics/threads by:

- Hot
- New
- Top

## View Switching Mechanism

The page provides a mechanism for switching between different views:

- Card View
- Classic View
- Compact View

## Thread Page

Each thread page includes the following details:

- **Title**
- **Posted by**
- **Time of post**
- **Main content of the post**
- **Nested comments section**
- **Navigation between pages**
- **Upvote/Downvote**
