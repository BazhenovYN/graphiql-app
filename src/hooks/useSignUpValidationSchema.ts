import { EMAIL_REGEXP } from '@/constants/validation';
import { useTranslate } from '@/context/TranslateContext';
import { useCallback, useEffect, useState } from 'react';
import { object, ref, string } from 'yup';

export const useSignUpValidationSchema = () => {
  const { t } = useTranslate();

  const createValidationSchema = useCallback(
    (t: (key: string, defaultValue?: string) => string) => {
      return object({
        email: string()
          .required(t('Validation.email.required', 'email is a required field'))
          .matches(EMAIL_REGEXP, t('Validation.email', 'not valid email')),
        password: string()
          .required(t('Validation.password.required', 'password is a required field'))
          .matches(/[0-9]/, t('Validation.password.digit', 'digit required'))
          .matches(/\p{L}/u, t('Validation.password.letter', 'letter required'))
          .matches(/[\p{P}\p{S}]/u, t('Validation.password.special', 'special character required'))
          .min(8, t('Validation.password.length', 'min length 8 characters')),
        confirmPassword: string()
          .required(t('Validation.password.confirm', 'confirm password'))
          .oneOf([ref('password')], t('Validation.password.match', 'Passwords does not match')),
      });
    },
    []
  );

  const [validationSchema, setValidationSchema] = useState(() => createValidationSchema(t));

  useEffect(() => {
    setValidationSchema(createValidationSchema(t));
  }, [t, createValidationSchema]);

  return { validationSchema };
};
