import Navbar from '../Navbar';
import { MainLayoutProps } from '@/types';

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main className="container py-8">{children}</main>
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-auto">
        <div className="container py-6">
          <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} React Skeleton App. Built with
            React, TypeScript, and TailwindCSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
