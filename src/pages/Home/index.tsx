import { Link } from 'react-router-dom';
import { Card, Button } from '@components';
import { ROUTES } from '@utils/constants';
import { HOME_FEATURES, TECH_STACK } from './mock';

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-5xl font-bold mb-4 text-gradient">
          React Skeleton App
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          A production-ready React application with modern tooling, best
          practices, and optimized code structure.
        </p>
        <div className="flex gap-4 justify-center">
          <Link to={ROUTES.DASHBOARD}>
            <Button variant="primary">View Dashboard</Button>
          </Link>
          <Link to={ROUTES.ABOUT}>
            <Button variant="secondary">Learn More</Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HOME_FEATURES.map((feature) => (
            <Card key={feature.title}>
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">
          Built With Modern Tech Stack
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {TECH_STACK.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
