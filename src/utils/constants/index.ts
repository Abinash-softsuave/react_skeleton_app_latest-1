// API Configuration
export const API_CONFIG = {
  BASE_URL:
    import.meta.env.VITE_API_BASE_URL || 'https://jsonplaceholder.typicode.com',
  TIMEOUT: 10000,
} as const;

// App Configuration
export const APP_CONFIG = {
  APP_NAME: 'React Skeleton App',
  APP_VERSION: '1.0.0',
  DEFAULT_LANGUAGE: 'en',
} as const;

// Local Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'authToken',
  USER_PREFERENCES: 'userPreferences',
  THEME: 'theme',
} as const;

// Route Paths
export const ROUTES = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  ABOUT: '/about',
  NOT_FOUND: '*',
} as const;

// HTTP Status Codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const;

// Theme Options
export const THEME = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;
