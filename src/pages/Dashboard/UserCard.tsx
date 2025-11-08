import { Card, Button } from '@components';
import { User } from '@services/types';
import { getInitials } from '@utils/helpers';

interface UserCardProps {
  user: User;
  onView: (user: User) => void;
  onDelete: (userId: number) => void;
}

export default function UserCard({ user, onView, onDelete }: UserCardProps) {
  return (
    <Card className="hover:shadow-xl transition-shadow">
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-purple-600 flex items-center justify-center text-white font-bold flex-shrink-0">
          {getInitials(user.name)}
        </div>

        {/* User Info */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 truncate">
            {user.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
            @{user.username}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 truncate">
            {user.email}
          </p>
          {user.phone && (
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
              {user.phone}
            </p>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2 mt-4">
        <Button
          variant="secondary"
          className="flex-1 text-sm"
          onClick={() => onView(user)}
        >
          View
        </Button>
        <Button
          variant="danger"
          className="flex-1 text-sm"
          onClick={() => onDelete(user.id)}
        >
          Delete
        </Button>
      </div>
    </Card>
  );
}
