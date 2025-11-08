# React Skeleton App

> A production-ready React skeleton application with modern tooling, best practices, and optimized code structure

[![React](https://img.shields.io/badge/React-19.2.0-blue.svg)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.2-646CFF.svg)](https://vite.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1.17-38B2AC.svg)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run all quality checks
npm run verify
```

📖 **For detailed setup instructions**, see [DEVELOPER_GUIDE.md](DEVELOPER_GUIDE.md)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Key Features](#key-features)
- [Project Structure](#project-structure)
- [Available Commands](#available-commands)
- [Path Aliases](#path-aliases)
- [Documentation](#documentation)

---

## Overview

This React skeleton application provides a **complete, production-ready foundation** for building modern web applications. It includes:

✅ **Latest Technologies** - React 19.2, Vite 7.2, TypeScript 5.9, Tailwind CSS 4.1
✅ **Best Practices** - ESLint 9 flat config, Prettier, Husky pre-commit hooks
✅ **State Management** - Redux Toolkit 2.10 with async thunks
✅ **Routing** - React Router DOM v7
✅ **API Integration** - Axios with interceptors and error handling
✅ **Modern Build** - Code splitting, tree-shaking, optimized bundles
✅ **Developer Experience** - Hot reload, TypeScript path aliases, dark mode

---

## 🛠️ Tech Stack

### Core

| Technology | Version | Purpose |
|------------|---------|---------|
| [React](https://react.dev) | 19.2.0 | UI library with enhanced concurrent features |
| [TypeScript](https://www.typescriptlang.org/) | 5.9.3 | Type-safe development |
| [Vite](https://vite.dev) | 7.2.2 | Lightning-fast build tool with instant HMR |

### Styling

| Technology | Version | Purpose |
|------------|---------|---------|
| [TailwindCSS](https://tailwindcss.com) | 4.1.17 | Utility-first CSS with 10x faster compilation |
| [@tailwindcss/postcss](https://tailwindcss.com/docs/v4-beta) | 4.1.17 | Tailwind v4 PostCSS plugin |
| [PostCSS](https://postcss.org/) | 8.5.6 | CSS transformations |
| [Autoprefixer](https://github.com/postcss/autoprefixer) | 10.4.21 | Vendor prefix automation |

### State & Routing

| Technology | Version | Purpose |
|------------|---------|---------|
| [Redux Toolkit](https://redux-toolkit.js.org) | 2.10.1 | State management with powerful async capabilities |
| [React Redux](https://react-redux.js.org) | 9.2.0 | React bindings for Redux |
| [React Router DOM](https://reactrouter.com) | 7.9.5 | Client-side routing (v7 with enhanced features) |

### API & Data

| Technology | Version | Purpose |
|------------|---------|---------|
| [Axios](https://axios-http.com) | 1.13.2 | HTTP client with interceptors |

### Code Quality

| Technology | Version | Purpose |
|------------|---------|---------|
| [ESLint](https://eslint.org) | 9.39.1 | Linting with flat config format |
| [Prettier](https://prettier.io) | 3.6.2 | Code formatting |
| [Husky](https://typicode.github.io/husky) | 9.1.7 | Git hooks |
| [lint-staged](https://github.com/lint-staged/lint-staged) | 16.2.6 | Pre-commit linting |

---

## ✨ Key Features

### Modern Architecture
- ✅ **React 19.2.0** - Latest React with enhanced concurrent rendering
- ✅ **TypeScript 5.9** - Full type safety across the entire application
- ✅ **Vite 7.2** - Instant server start, lightning-fast HMR
- ✅ **Folder/index pattern** - Scalable folder structure for all components

### Styling & UI
- ✅ **TailwindCSS 4.1** - CSS-native configuration with `@theme` directive
- ✅ **Dark Mode** - Built-in light/dark theme toggle with `useTheme` hook
- ✅ **Responsive Design** - Mobile-first approach with Tailwind utilities
- ✅ **Custom Components** - Reusable Button, Card, Loader, ErrorMessage

### State Management & Routing
- ✅ **Redux Toolkit 2.10** - Simplified Redux with createSlice and createAsyncThunk
- ✅ **React Router v7** - Latest routing with enhanced features
- ✅ **Type-safe Hooks** - Custom `useAppDispatch` and `useAppSelector`

### API Integration
- ✅ **Axios Instance** - Centralized configuration with base URL
- ✅ **Request Interceptors** - Automatic token injection
- ✅ **Response Interceptors** - Global error handling (401, 403, 404, 500)
- ✅ **Service Layer** - Example userService with full CRUD operations

### Developer Experience
- ✅ **Path Aliases** - Clean imports with `@components`, `@hooks`, `@services`
- ✅ **Custom Hooks** - useTheme, useDebounce, useLocalStorage
- ✅ **ESLint 9 Flat Config** - Modern linting with better performance
- ✅ **Pre-commit Hooks** - Automatic type checking, linting, formatting
- ✅ **Environment Variables** - `.env` configuration with Vite

### Production Ready
- ✅ **Code Splitting** - Separate chunks for React, Redux vendors
- ✅ **Tree Shaking** - Optimized bundle size
- ✅ **Minification** - Terser for production builds
- ✅ **Source Maps** - Disabled for production (configurable)
- ✅ **Verification Scripts** - `precommit` and `verify` commands

---

## 📁 Project Structure

```
react-skeleton/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, fonts, icons
│   ├── components/        # Reusable UI components (folder/index.tsx)
│   │   ├── Button/
│   │   │   └── index.tsx
│   │   ├── Card/
│   │   ├── ErrorMessage/
│   │   ├── Loader/
│   │   └── index.ts       # Barrel exports
│   ├── features/          # Feature-based modules (for future use)
│   ├── hooks/             # Custom React hooks (folder/index.ts)
│   │   ├── useDebounce/
│   │   ├── useLocalStorage/
│   │   ├── useTheme/
│   │   └── index.ts
│   ├── layouts/           # Layout components (folder/index.tsx)
│   │   ├── MainLayout/
│   │   ├── Navbar/
│   │   └── index.ts
│   ├── pages/             # Route-level components (folder/index.tsx)
│   │   ├── About/
│   │   ├── Dashboard/
│   │   ├── Home/
│   │   ├── NotFound/
│   │   └── index.ts
│   ├── routes/            # Route configuration
│   │   └── index.tsx
│   ├── services/          # API services (folder/index.ts)
│   │   ├── axiosInstance/
│   │   ├── types/
│   │   ├── userService/
│   │   └── index.ts
│   ├── store/             # Redux store & slices
│   │   ├── slices/
│   │   │   └── userSlice.ts
│   │   ├── hooks.ts
│   │   └── index.ts
│   ├── styles/            # Global styles
│   │   └── index.css      # Tailwind v4 config with @theme
│   ├── utils/             # Helper functions (folder/index.ts)
│   │   ├── constants/
│   │   ├── helpers/
│   │   └── index.ts
│   ├── App.tsx            # Root component
│   ├── main.tsx           # Application entry point
│   └── vite-env.d.ts      # Vite type definitions
├── .env                   # Environment variables (gitignored)
├── .env.example           # Example environment file
├── .gitignore
├── eslint.config.js       # ESLint v9 flat config
├── index.html             # HTML template
├── package.json           # Dependencies & scripts
├── postcss.config.js      # PostCSS config (Tailwind v4)
├── tsconfig.app.json      # App TypeScript config
├── tsconfig.json          # Base TypeScript config
├── tsconfig.node.json     # Node TypeScript config
├── vite.config.ts         # Vite configuration
├── README.md              # This file
└── DEVELOPER_GUIDE.md     # Detailed setup & customization guide
```

### Folder Structure Convention

All folders use the **folder/index.tsx** pattern for maximum scalability:

```typescript
// ✅ Good - Scalable
components/
  Button/
    index.tsx          // Component
    Button.test.tsx    // Tests (future)
    Button.styles.ts   // Styles (future)

// ❌ Avoid - Hard to extend
components/
  Button.tsx
  Button.test.tsx      // Cluttered root
```

**Benefits:**
- Easy to add related files (tests, styles, stories)
- Barrel exports for clean imports
- Scalable for large teams

---

## 🎮 Available Commands

### Development

```bash
npm run dev              # Start development server (localhost:3000)
npm run build            # Build for production
npm run build:preview    # Build and preview production bundle
npm run preview          # Preview existing production build
```

### Code Quality

```bash
npm run type-check       # TypeScript type checking (no emit)
npm run lint             # Run ESLint
npm run lint:fix         # Auto-fix ESLint issues
npm run format           # Format code with Prettier
npm run format:check     # Check code formatting
```

### Verification

```bash
npm run precommit        # Quick check (type + lint + format)
npm run verify           # Full verification (type + lint + format + build)
```

**💡 Tip:** Run `npm run verify` before pushing to ensure everything passes!

---

## 🔧 Path Aliases

Clean imports with TypeScript path aliases:

```typescript
// ✅ With aliases
import { Button, Card } from '@components';
import { useTheme } from '@hooks';
import { ROUTES } from '@utils/constants';
import userService from '@services/userService';
import MainLayout from '@layouts/MainLayout';

// ❌ Without aliases
import { Button } from '../../components/Button';
import { useTheme } from '../../../hooks/useTheme';
```

### Available Aliases

| Alias | Path | Usage |
|-------|------|-------|
| `@/*` | `src/*` | General imports |
| `@components` | `src/components` | UI components |
| `@hooks` | `src/hooks` | Custom React hooks |
| `@layouts` | `src/layouts` | Layout components |
| `@pages` | `src/pages` | Page components |
| `@routes` | `src/routes` | Route config |
| `@services` | `src/services` | API services |
| `@store` | `src/store` | Redux store |
| `@utils` | `src/utils` | Utilities |
| `@assets` | `src/assets` | Static assets |

Configured in:
- `tsconfig.app.json` - TypeScript compiler
- `vite.config.ts` - Vite bundler

---

## 📚 Documentation

### For Developers

- **[DEVELOPER_GUIDE.md](DEVELOPER_GUIDE.md)** - Complete setup, customization, and deployment guide
  - Installation & prerequisites
  - Running the application
  - Configuration details
  - Customizing Tailwind CSS v4
  - API integration examples
  - Redux setup
  - Deployment guides
  - Troubleshooting

### Quick Examples

**Using API Services:**
```typescript
import userService from '@services/userService';

const users = await userService.getUsers();
const user = await userService.getUserById(1);
const newUser = await userService.createUser({ name: 'John', email: 'john@example.com' });
```

**Using Redux:**
```typescript
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { fetchUsers } from '@store/slices/userSlice';

const dispatch = useAppDispatch();
const { users, loading } = useAppSelector((state) => state.users);

dispatch(fetchUsers());
```

**Using Custom Hooks:**
```typescript
import { useTheme, useDebounce, useLocalStorage } from '@hooks';

const [theme, toggleTheme] = useTheme();
const debouncedValue = useDebounce(searchTerm, 500);
const [value, setValue] = useLocalStorage('key', defaultValue);
```

**Customizing Tailwind Colors (v4):**
```css
/* src/index.css */
@theme {
  --color-brand-500: #ff6b6b;
  --color-brand-600: #ee5555;
}
```

```tsx
<button className="bg-brand-500 hover:bg-brand-600">
  Custom Color
</button>
```

---

## 🚢 Deployment

### Production Build

```bash
npm run verify
```

Output: `dist/` folder (optimized, minified, code-split)

### Deploy Platforms

**Vercel:**
```bash
npm install -g vercel
vercel --prod
```

**Netlify:**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

**Build Settings (All Platforms):**
- Build command: `npm run build`
- Output directory: `dist`
- Node version: `20.19.0` or `22.12.0+`

---

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/amazing-feature`
2. Make your changes
3. Run verification: `npm run verify`
4. Commit (pre-commit hooks run automatically)
5. Push to branch
6. Create a Pull Request

**Pre-commit hooks automatically run:**
- TypeScript type checking
- ESLint linting
- Prettier formatting

---

## 📄 License

MIT License - feel free to use this skeleton for your projects!

---

## 🙏 Acknowledgments

Built with:
- [React](https://react.dev) - The library for web and native user interfaces
- [Vite](https://vite.dev) - Next generation frontend tooling
- [TailwindCSS](https://tailwindcss.com) - Rapidly build modern websites
- [Redux Toolkit](https://redux-toolkit.js.org) - The official, opinionated, batteries-included toolset for efficient Redux development
- [React Router](https://reactrouter.com) - Declarative routing for React

---

**Version:** 1.0.0
**Last Updated:** November 2025
**Node.js Required:** v20.19.0+ or v22.12.0+

---

🌟 **Star this repository if you find it helpful!**
