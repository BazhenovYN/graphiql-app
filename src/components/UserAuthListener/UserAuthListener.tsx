import { auth } from '@/firebase';
import { useActions } from '@/hooks/useActions';
import { useLoading } from '@/hooks/useLoading';
import { saveUserToLocalStorage } from '@/utils/localStorage';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { Loader } from '../Loader';

export const UserAuthListener = () => {
  const { setUser } = useActions();
  const { loading } = useLoading();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      saveUserToLocalStorage(user);
      return unsubscribe;
    });
  }, [setUser]);

  if (loading) {
    return <Loader fullscreen />;
  }

  return null;
};
