# Developer Guide - React Skeleton Application

> Complete guide for setting up, running, and customizing this React skeleton application

---

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Running the Application](#running-the-application)
4. [Available Commands](#available-commands)
5. [Project Structure](#project-structure)
6. [Configuration](#configuration)
7. [Customization](#customization)
8. [Deployment](#deployment)
9. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: v22.21.1+ (LTS recommended)
- **npm**: v10.0.0+ (comes with Node.js)
- **Git**: Latest version

Check your versions:
```bash
node -v
npm -v
git --version
```

---

## Installation

### 1. Clone or Download the Project

```bash
git clone <your-repository-url>
cd react-skeleton
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages (~352 packages including dependencies).

### 3. Environment Setup

Copy the example environment file:

```bash
cp .env.example .env
```

Edit `.env` to configure your environment variables:

```env
VITE_API_BASE_URL=https://api.example.com
VITE_APP_NAME=React Skeleton App
VITE_APP_VERSION=1.0.0
```

---

## Running the Application

### Development Mode

Start the development server with hot module replacement (HMR):

```bash
npm run dev
```

- Opens automatically at: **http://localhost:3000**
- Hot reload enabled - changes reflect instantly
- Development build with source maps

### Production Preview

Build and preview the production bundle:

```bash
npm run build:preview
```

- Creates optimized production build
- Starts preview server at: **http://localhost:4173**
- Tests production build locally before deployment

### Preview Only

If you've already built the project, just preview:

```bash
npm run preview
```

---

## Available Commands

### Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (localhost:3000) |
| `npm run build` | Build for production |
| `npm run build:preview` | Build and preview production bundle |
| `npm run preview` | Preview existing production build |

### Quality Check Commands

| Command | Description |
|---------|-------------|
| `npm run type-check` | Run TypeScript type checking (no emit) |
| `npm run lint` | Run ESLint with error reporting |
| `npm run lint:fix` | Auto-fix ESLint issues |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |
| `npm run precommit` | Run all checks (type + lint + format) |
| `npm run verify` | Full verification (type + lint + format + build) |

### Git Workflow Commands

**Before committing:**
```bash
npm run precommit
```

**Before pushing/deploying:**
```bash
npm run verify
```

**Husky automatically runs checks on commit** - configured in `.husky/pre-commit`

---

## Project Structure

```
react-skeleton/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, fonts, etc.
│   ├── components/        # Reusable UI components
│   │   ├── Button/
│   │   │   └── index.tsx
│   │   ├── Card/
│   │   ├── ErrorMessage/
│   │   ├── Loader/
│   │   └── index.ts       # Barrel export
│   ├── features/          # Feature-based modules (future use)
│   ├── hooks/             # Custom React hooks
│   │   ├── useTheme/
│   │   ├── useDebounce/
│   │   ├── useLocalStorage/
│   │   └── index.ts
│   ├── layouts/           # Layout components
│   │   ├── MainLayout/
│   │   ├── Navbar/
│   │   └── index.ts
│   ├── pages/             # Route-level page components
│   │   ├── Home/
│   │   ├── Dashboard/
│   │   ├── About/
│   │   ├── NotFound/
│   │   └── index.ts
│   ├── routes/            # Route configuration
│   │   └── index.tsx
│   ├── services/          # API services
│   │   ├── axiosInstance/
│   │   ├── userService/
│   │   ├── types/
│   │   └── index.ts
│   ├── store/             # Redux store
│   │   ├── slices/
│   │   │   └── userSlice.ts
│   │   ├── hooks.ts
│   │   └── index.ts
│   ├── styles/            # Global styles
│   │   └── index.css      # Tailwind + custom styles
│   ├── utils/             # Helper functions
│   │   ├── constants/
│   │   ├── helpers/
│   │   └── index.ts
│   ├── App.tsx            # Root component
│   ├── main.tsx           # Entry point
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
├── README.md              # Project overview
└── DEVELOPER_GUIDE.md     # This file
```

### Folder Structure Convention

All folders use the **folder/index.tsx** pattern:

```
components/
├── Button/
│   └── index.tsx    # export default function Button()
├── Card/
│   └── index.tsx    # export default function Card()
└── index.ts         # Barrel export: export { default as Button } from './Button'
```

**Benefits:**
- Easy to add related files (Button.test.tsx, Button.styles.ts)
- Clean imports via barrel exports
- Scalable for large projects

---

## Configuration

### TypeScript Path Aliases

Configured in both `tsconfig.app.json` and `vite.config.ts`:

```typescript
// Import examples
import { Button, Card } from '@components';
import { useTheme } from '@hooks';
import { ROUTES } from '@utils/constants';
import MainLayout from '@layouts/MainLayout';
```

Available aliases:
- `@/*` - src/
- `@components` - src/components
- `@hooks` - src/hooks
- `@layouts` - src/layouts
- `@pages` - src/pages
- `@routes` - src/routes
- `@services` - src/services
- `@store` - src/store
- `@utils` - src/utils
- `@assets` - src/assets

### Environment Variables

All environment variables must be prefixed with `VITE_`:

```env
# .env
VITE_API_BASE_URL=https://api.example.com
VITE_APP_NAME=My App
VITE_ENABLE_ANALYTICS=true
```

Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_BASE_URL;
```

### Vite Configuration

Key settings in `vite.config.ts`:

- **Dev Server**: Port 3000, auto-open browser
- **Build Output**: `dist/` folder
- **Code Splitting**: Separate chunks for React, Redux
- **Minification**: Terser for optimized bundle
- **Path Aliases**: Mirror TypeScript paths

---

## Customization

### 1. Styling with Tailwind CSS v4

**Theme Customization** - Edit `src/index.css`:

```css
@theme {
  /* Custom color palette */
  --color-primary-500: #3b82f6;
  --color-primary-600: #2563eb;

  /* Add custom colors */
  --color-brand-500: #ff6b6b;
  --color-brand-600: #ee5555;
}
```

Use in components:
```tsx
<button className="bg-primary-600 hover:bg-brand-500">
  Click Me
</button>
```

**Custom Components** - Add to `@layer components`:

```css
@layer components {
  .my-button {
    @apply px-6 py-3 bg-blue-500 text-white rounded-lg;
    @apply hover:bg-blue-600 transition-colors;
  }
}
```

### 2. API Configuration

**Base URL** - Edit `src/services/axiosInstance/index.ts`:

```typescript
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
});
```

**Request Interceptor** - Add auth headers:

```typescript
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
```

**Response Interceptor** - Handle errors:

```typescript
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Redirect to login
    }
    return Promise.reject(error);
  }
);
```

### 3. Adding New Services

Create `src/services/productService/index.ts`:

```typescript
import axiosInstance from '../axiosInstance';

class ProductService {
  async getProducts() {
    const response = await axiosInstance.get('/products');
    return response.data;
  }
}

export default new ProductService();
```

Export from `src/services/index.ts`:
```typescript
export { default as productService } from './productService';
```

### 4. Redux State Management

**Add new slice** - `src/store/slices/authSlice.ts`:

```typescript
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const login = createAsyncThunk(
  'auth/login',
  async (credentials: { email: string; password: string }) => {
    // API call
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export default authSlice.reducer;
```

**Register in store** - `src/store/index.ts`:

```typescript
import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,  // Add new slice
  },
});
```

### 5. Routing

**Add routes** - `src/routes/index.tsx`:

```typescript
const routes: RouteObject[] = [
  {
    path: ROUTES.HOME,
    element: <MainLayout><Home /></MainLayout>,
  },
  {
    path: '/products',  // New route
    element: <MainLayout><Products /></MainLayout>,
  },
];
```

---

## Deployment

### Build for Production

```bash
npm run verify
```

This will:
1. Type check TypeScript
2. Lint code with ESLint
3. Check formatting with Prettier
4. Build optimized production bundle

Output: `dist/` folder

### Deploy to Netlify

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Deploy:
   ```bash
   netlify deploy --prod
   ```

3. Set environment variables in Netlify dashboard

### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel --prod
   ```

### Deploy to Static Hosting

Upload `dist/` folder contents to:
- AWS S3 + CloudFront
- GitHub Pages
- Firebase Hosting
- Cloudflare Pages

**Build settings:**
- Build command: `npm run build`
- Output directory: `dist`
- Node version: 20.19.0 or 22.12.0+

---

## Troubleshooting

### Node.js Version Warnings

**Issue:** `npm warn EBADENGINE Unsupported engine`

**Solution:** Upgrade to Node.js v22.21.1+ (LTS)

```bash
# Using nvm
nvm install 22
nvm use 22
```

### ESLint Errors After Update

**Issue:** ESLint not recognizing flat config

**Solution:** Ensure you're using `eslint.config.js` (NOT `.eslintrc.cjs`)

### Tailwind Classes Not Working

**Issue:** Custom colors not applying

**Solution:**
1. Check `src/index.css` has `@theme` directive
2. Verify `postcss.config.js` uses `@tailwindcss/postcss`
3. Restart dev server

### Type Errors

**Issue:** Cannot find module '@components'

**Solution:**
1. Check `tsconfig.app.json` has path aliases
2. Restart TypeScript server in VS Code (Cmd/Ctrl + Shift + P → "Restart TypeScript Server")

### Build Failures

**Issue:** Build fails with module errors

**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules dist
npm install
npm run build
```

### Port Already in Use

**Issue:** Port 3000 already in use

**Solution:** Change port in `vite.config.ts`:
```typescript
server: {
  port: 3001,  // Change port
}
```

---

## Getting Help

- **Documentation**: Check README.md for project overview
- **Tech Stack Docs**:
  - [React 19](https://react.dev)
  - [Vite 7](https://vite.dev)
  - [TailwindCSS 4](https://tailwindcss.com/docs/v4-beta)
  - [Redux Toolkit](https://redux-toolkit.js.org)
  - [React Router v7](https://reactrouter.com)

---

**Last Updated:** November 2025
**Project Version:** 1.0.0
**Node.js Required:** v22.12.0+
