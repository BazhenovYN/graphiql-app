import { useTranslate } from '@/context/TranslateContext';
import { removeUserFromLocalStorage, saveUserToLocalStorage } from '@/utils/localStorage';
import { App } from 'antd';
import { FirebaseError } from 'firebase/app';
import {
  Auth,
  createUserWithEmailAndPassword as firebaseCreateUserWithEmailAndPassword,
  signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { useCallback, useState } from 'react';
import { useActions } from './useActions';

export const useFirebase = (auth: Auth) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setUser, removeUser } = useActions();
  const { notification } = App.useApp();
  const { t } = useTranslate();

  const signInWithEmailAndPassword = useCallback(
    async (email: string, password: string) => {
      setIsLoading(true);
      try {
        const { user } = await firebaseSignInWithEmailAndPassword(auth, email, password);
        user.getIdToken().then((accessToken) => {
          const userData = { id: user.uid, email: user.email, token: accessToken };
          setUser(userData);
          saveUserToLocalStorage(userData);
        });
        notification.success({
          message: t('Auth.Signin', 'You have successfully logged into your account!'),
        });
        return user;
      } catch (error) {
        if (error instanceof FirebaseError) {
          notification.error({ message: t(error.code, 'Something went wrong, try again later') });
        }
      } finally {
        setIsLoading(false);
      }
    },
    [t, auth, setUser, notification]
  );

  const createUserWithEmailAndPassword = useCallback(
    async (email: string, password: string) => {
      setIsLoading(true);
      try {
        const { user } = await firebaseCreateUserWithEmailAndPassword(auth, email, password);
        user.getIdToken().then((accessToken) => {
          const userData = { id: user.uid, email: user.email, token: accessToken };
          setUser(userData);
          saveUserToLocalStorage(userData);
        });
        notification.success({
          message: t('Auth.Signup', 'You have successfully created an account!'),
        });
        return user;
      } catch (error) {
        if (error instanceof FirebaseError) {
          notification.error({ message: t(error.code, 'Something went wrong, try again later') });
        }
      } finally {
        setIsLoading(false);
      }
    },
    [t, auth, setUser, notification]
  );

  const signOutFromUserAccount = useCallback(async () => {
    setIsLoading(true);
    try {
      await signOut(auth);
      removeUser();
      removeUserFromLocalStorage();
      notification.success({
        message: t('Auth.Signout', 'You have successfully logged out of your account!'),
      });
    } catch (error) {
      if (error instanceof FirebaseError) {
        notification.error({ message: error.message });
      }
    } finally {
      setIsLoading(false);
    }
  }, [t, auth, notification, removeUser]);

  return {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOutFromUserAccount,
    isLoading,
  };
};