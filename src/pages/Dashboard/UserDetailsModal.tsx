import { User } from '@services/types';
import BaseModal from '@components/Modal/BaseModal';

interface UserDetailsModalProps {
  user: User | null;
  onClose: () => void;
}

export default function UserDetailsModal({
  user,
  onClose,
}: UserDetailsModalProps) {
  return (
    <BaseModal isOpen={!!user} onClose={onClose} title="User Details" size="md">
      {user && (
        <div className="space-y-3">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Name:
            </span>
            <p className="font-medium text-gray-900 dark:text-gray-100">
              {user.name}
            </p>
          </div>
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Username:
            </span>
            <p className="font-medium text-gray-900 dark:text-gray-100">
              {user.username}
            </p>
          </div>
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Email:
            </span>
            <p className="font-medium text-gray-900 dark:text-gray-100">
              {user.email}
            </p>
          </div>
          {user.phone && (
            <div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Phone:
              </span>
              <p className="font-medium text-gray-900 dark:text-gray-100">
                {user.phone}
              </p>
            </div>
          )}
          {user.website && (
            <div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Website:
              </span>
              <p className="font-medium text-gray-900 dark:text-gray-100">
                {user.website}
              </p>
            </div>
          )}
          {user.company && (
            <div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Company:
              </span>
              <p className="font-medium text-gray-900 dark:text-gray-100">
                {user.company.name}
              </p>
            </div>
          )}
        </div>
      )}
    </BaseModal>
  );
}
