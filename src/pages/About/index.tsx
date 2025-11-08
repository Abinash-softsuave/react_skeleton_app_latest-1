import { Card } from '@components';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          About This Project
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          A comprehensive React skeleton application with best practices
        </p>
      </div>

      <Card title="Project Overview">
        <p className="mb-4">
          This is a production-ready React skeleton application built with the
          latest tools and best practices. It provides a solid foundation for
          building scalable web applications.
        </p>
        <p>
          The project structure is designed to be modular, maintainable, and
          easy to extend with new features.
        </p>
      </Card>

      <Card title="Key Features">
        <ul className="list-disc list-inside space-y-2">
          <li>Modern React 19.2.0 with TypeScript 5.9</li>
          <li>Lightning-fast development with Vite 7.2</li>
          <li>Styled with TailwindCSS 4.1 and dark mode support</li>
          <li>State management with Redux Toolkit 2.10</li>
          <li>Routing with React Router DOM v7</li>
          <li>API integration with Axios and interceptors</li>
          <li>Code quality with ESLint 9 and Prettier</li>
          <li>Pre-commit hooks with Husky and lint-staged</li>
          <li>Type-safe path aliases</li>
          <li>Optimized production build</li>
        </ul>
      </Card>

      <Card title="Project Structure">
        <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm">
          {`src/
 ┣ assets/         # Static assets
 ┣ components/     # Reusable UI components
 ┣ features/       # Feature-based modules
 ┣ hooks/          # Custom React hooks
 ┣ layouts/        # Layout components
 ┣ pages/          # Route-level components
 ┣ routes/         # Route configuration
 ┣ services/       # API services
 ┣ store/          # Redux store and slices
 ┣ styles/         # Global styles
 ┣ utils/          # Helper functions
 ┣ App.tsx
 ┗ main.tsx`}
        </pre>
      </Card>

      <Card title="Getting Started">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
              1. Install Dependencies
            </h4>
            <code className="bg-gray-100 dark:bg-gray-900 px-3 py-1 rounded text-sm">
              npm install
            </code>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
              2. Start Development Server
            </h4>
            <code className="bg-gray-100 dark:bg-gray-900 px-3 py-1 rounded text-sm">
              npm run dev
            </code>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
              3. Build for Production
            </h4>
            <code className="bg-gray-100 dark:bg-gray-900 px-3 py-1 rounded text-sm">
              npm run build
            </code>
          </div>
        </div>
      </Card>
    </div>
  );
}
