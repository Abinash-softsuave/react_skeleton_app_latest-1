/**
 * Mock data for Home page
 */

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export const HOME_FEATURES: Feature[] = [
  {
    title: 'React 19.2',
    description:
      'Latest React with enhanced concurrent features and performance',
    icon: '⚛️',
  },
  {
    title: 'TypeScript 5.9',
    description: 'Type-safe development with latest TypeScript features',
    icon: '📘',
  },
  {
    title: 'TailwindCSS 4.1',
    description: 'CSS-native config with 10x faster compilation',
    icon: '🎨',
  },
  {
    title: 'Redux Toolkit 2.10',
    description: 'Modern state management with powerful async capabilities',
    icon: '🔄',
  },
  {
    title: 'Vite 7.2',
    description: 'Lightning fast build tool with instant HMR',
    icon: '⚡',
  },
  {
    title: 'ESLint 9 & Prettier',
    description: 'Latest code quality tools with flat config',
    icon: '✨',
  },
];

export const TECH_STACK: string[] = [
  'React',
  'TypeScript',
  'Vite',
  'TailwindCSS',
  'Redux Toolkit',
  'React Router',
  'Axios',
  'ESLint',
  'Prettier',
  'Husky',
];
