import { User } from '@services/types';
import UserCard from './UserCard';

interface UsersGridProps {
  users: User[];
  onViewUser: (user: User) => void;
  onDeleteUser: (userId: number) => void;
}

export default function UsersGrid({
  users,
  onViewUser,
  onDeleteUser,
}: UsersGridProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        Users List
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onView={onViewUser}
            onDelete={onDeleteUser}
          />
        ))}
      </div>
    </div>
  );
}
