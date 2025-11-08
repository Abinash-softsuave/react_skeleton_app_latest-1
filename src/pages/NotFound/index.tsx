import { Link } from 'react-router-dom';
import { Button } from '@components';
import { ROUTES } from '@utils/constants';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="text-9xl font-bold text-gradient mb-4">404</div>
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        Page Not Found
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md">
        Oops! The page you are looking for does not exist. It might have been
        moved or deleted.
      </p>
      <Link to={ROUTES.HOME}>
        <Button variant="primary">Go Back Home</Button>
      </Link>
    </div>
  );
}
