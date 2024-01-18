import { useAuth } from '@/hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';

export const AnonymousRoutes = () => {
  const { isAuth } = useAuth();

  return isAuth ? <Navigate to={'/main'} /> : <Outlet />;
};
