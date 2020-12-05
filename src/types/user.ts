export type UserRole = 'admin' | 'user';

export type User = {
  id: string;
  email: string;
  username: string;
  role: UserRole;
}