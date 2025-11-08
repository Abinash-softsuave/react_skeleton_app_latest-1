import { useState } from 'react';
import { useUsers, useDeleteUser } from '@hooks/api';
import { Loader, ErrorMessage } from '@components';
import ConfirmModal from '@components/Modal/ConfirmModal';
import { PageHeader, StatsSection, type Stat } from '@containers';
import { User } from '@services/types';
import UsersGrid from './UsersGrid';
import UserDetailsModal from './UserDetailsModal';

export default function Dashboard() {
  const { data: users = [], isLoading, error, refetch } = useUsers();
  const deleteUserMutation = useDeleteUser();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [userToDelete, setUserToDelete] = useState<number | null>(null);

  const handleDeleteUser = (id: number) => {
    setUserToDelete(id);
  };

  const confirmDelete = () => {
    if (userToDelete !== null) {
      deleteUserMutation.mutate(userToDelete);
      setUserToDelete(null);
    }
  };

  const handleRetry = () => {
    refetch();
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader size="lg" />
      </div>
    );
  }

  const stats: Stat[] = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      value: users.length,
      label: 'Active Users',
      color: 'blue',
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      value: '100%',
      label: 'API Success',
      color: 'green',
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      value: 'Fast',
      label: 'Performance',
      color: 'purple',
    },
  ];

  return (
    <div className="space-y-8">
      <PageHeader
        title="Dashboard"
        description="User management with live API integration"
        stat={{ value: users.length, label: 'Total Users' }}
      />

      {error && (
        <ErrorMessage
          message={error instanceof Error ? error.message : 'An error occurred'}
          onRetry={handleRetry}
        />
      )}

      <StatsSection stats={stats} />

      <UsersGrid
        users={users}
        onViewUser={setSelectedUser}
        onDeleteUser={handleDeleteUser}
      />

      <UserDetailsModal
        user={selectedUser}
        onClose={() => setSelectedUser(null)}
      />

      <ConfirmModal
        isOpen={userToDelete !== null}
        onClose={() => setUserToDelete(null)}
        onConfirm={confirmDelete}
        title="Delete User"
        message="Are you sure you want to delete this user? This action cannot be undone."
        confirmText="Delete"
        cancelText="Cancel"
        variant="danger"
      />
    </div>
  );
}
