import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import userService from '@services/userService';
import { User, CreateUserDto, UpdateUserDto } from '@services/types';
import { toast } from 'react-toastify';

/**
 * User API Hooks Module
 * All React Query hooks for user-related operations
 */

/**
 * Fetch all users
 * Automatically handles caching, loading, and error states
 */
export function useUsers() {
  return useQuery<User[], Error>({
    queryKey: ['users'],
    queryFn: () => userService.getUsers(),
  });
}

/**
 * Fetch a single user by ID
 * @param id - User ID
 * @param enabled - Whether the query should run (default: true)
 */
export function useUser(id: number, enabled = true) {
  return useQuery<User, Error>({
    queryKey: ['users', id],
    queryFn: () => userService.getUserById(id),
    enabled,
  });
}

/**
 * Create a new user
 * Automatically invalidates users cache and shows toast notifications
 */
export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation<User, Error, CreateUserDto>({
    mutationFn: (userData) => userService.createUser(userData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      toast.success('User created successfully!');
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to create user');
    },
  });
}

/**
 * Update an existing user
 * Automatically invalidates cache and shows toast notifications
 */
export function useUpdateUser() {
  const queryClient = useQueryClient();

  return useMutation<
    User,
    Error,
    { id: number; userData: Partial<UpdateUserDto> }
  >({
    mutationFn: ({ id, userData }) => userService.updateUser(id, userData),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      queryClient.invalidateQueries({ queryKey: ['users', data.id] });
      toast.success('User updated successfully!');
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to update user');
    },
  });
}

/**
 * Delete a user
 * Automatically invalidates cache and shows toast notifications
 */
export function useDeleteUser() {
  const queryClient = useQueryClient();

  return useMutation<void, Error, number>({
    mutationFn: (id) => userService.deleteUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      toast.success('User deleted successfully!');
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to delete user');
    },
  });
}
