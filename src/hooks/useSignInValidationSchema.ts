import { EMAIL_REGEXP } from '@/constants/validation';
import { useTranslate } from '@/context/TranslateContext';
import { useCallback, useEffect, useState } from 'react';
import { object, string } from 'yup';

export const useSignInValidationSchema = () => {
  const { t } = useTranslate();

  const createValidationSchema = useCallback(
    (t: (key: string, defaultValue?: string) => string) => {
      return object({
        email: string()
          .required(t('Validation.email.required', 'email is a required field'))
          .matches(EMAIL_REGEXP, t('Validation.email', 'not valid email')),
        password: string().required(
          t('Validation.password.required', 'password is a required field')
        ),
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
