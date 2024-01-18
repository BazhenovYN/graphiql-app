import { RootState } from '@/store';
import { useSelector } from 'react-redux';

export const useAuth = () => {
  const { currentUser } = useSelector((state: RootState) => state.user);

  return {
    isAuth: !!currentUser,
  };
};
