import { useTranslate } from '@/context/TranslateContext';
import { removeUserFromLocalStorage } from '@/utils/localStorage';
import { App } from 'antd';
import { FirebaseError } from 'firebase/app';
import {
  Auth,
  createUserWithEmailAndPassword as firebaseCreateUserWithEmailAndPassword,
  signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { useCallback } from 'react';
import { useActions } from './useActions';

export const useFirebase = (auth: Auth) => {
  const { setIsLoading } = useActions();
  const { notification } = App.useApp();
  const { t } = useTranslate();

  const signInWithEmailAndPassword = useCallback(
    async (email: string, password: string) => {
      setIsLoading(true);
      try {
        await firebaseSignInWithEmailAndPassword(auth, email, password);
        notification.success({
          message: t('Auth.Signin', 'You have successfully logged into your account!'),
        });
      } catch (error) {
        if (error instanceof FirebaseError) {
          notification.error({ message: t(error.code, 'Something went wrong, try again later') });
        }
      } finally {
        setIsLoading(false);
      }
    },
    [t, auth, notification, setIsLoading]
  );

  const createUserWithEmailAndPassword = useCallback(
    async (email: string, password: string) => {
      setIsLoading(true);
      try {
        await firebaseCreateUserWithEmailAndPassword(auth, email, password);
        notification.success({
          message: t('Auth.Signup', 'You have successfully created an account!'),
        });
      } catch (error) {
        if (error instanceof FirebaseError) {
          notification.error({ message: t(error.code, 'Something went wrong, try again later') });
        }
      } finally {
        setIsLoading(false);
      }
    },
    [t, auth, notification, setIsLoading]
  );

  const signOutFromUserAccount = useCallback(async () => {
    setIsLoading(true);
    try {
      await signOut(auth);
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
  }, [t, auth, notification, setIsLoading]);

  return {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOutFromUserAccount,
  };
};
