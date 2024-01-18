import { User } from 'firebase/auth';

export const isUserExists = () => {
  return !!localStorage.getItem('user');
};

export const saveUserToLocalStorage = (user: User | null) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem('user');
};

export const getUserFromLocalStorage = () => {
  const user = localStorage.getItem('user');
  if (user) {
    return JSON.parse(user);
  }
};
