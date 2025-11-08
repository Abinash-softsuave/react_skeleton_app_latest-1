import axiosInstance from '../axiosInstance';
import { User, CreateUserDto, UpdateUserDto } from '../types';

/**
 * User Service - API methods for user operations
 */
class UserService {
  private readonly endpoint = '/users';

  /**
   * Get all users
   * @returns Promise with array of users
   */
  async getUsers(): Promise<User[]> {
    const response = await axiosInstance.get<User[]>(this.endpoint);
    return response.data;
  }

  /**
   * Get user by ID
   * @param id - User ID
   * @returns Promise with user object
   */
  async getUserById(id: number): Promise<User> {
    const response = await axiosInstance.get<User>(`${this.endpoint}/${id}`);
    return response.data;
  }

  /**
   * Create new user
   * @param userData - User data to create
   * @returns Promise with created user
   */
  async createUser(userData: CreateUserDto): Promise<User> {
    const response = await axiosInstance.post<User>(this.endpoint, userData);
    return response.data;
  }

  /**
   * Update existing user
   * @param id - User ID
   * @param userData - Updated user data
   * @returns Promise with updated user
   */
  async updateUser(
    id: number,
    userData: Partial<UpdateUserDto>
  ): Promise<User> {
    const response = await axiosInstance.put<User>(
      `${this.endpoint}/${id}`,
      userData
    );
    return response.data;
  }

  /**
   * Partially update user
   * @param id - User ID
   * @param userData - Partial user data to update
   * @returns Promise with updated user
   */
  async patchUser(id: number, userData: Partial<UpdateUserDto>): Promise<User> {
    const response = await axiosInstance.patch<User>(
      `${this.endpoint}/${id}`,
      userData
    );
    return response.data;
  }

  /**
   * Delete user
   * @param id - User ID
   * @returns Promise<void>
   */
  async deleteUser(id: number): Promise<void> {
    await axiosInstance.delete(`${this.endpoint}/${id}`);
  }
}

// Export singleton instance
export default new UserService();
