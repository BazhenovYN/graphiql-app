import { useTranslate } from '@/context/TranslateContext';
import { auth } from '@/firebase';
import { useFirebase } from '@/hooks/useFirebase';
import { ISignInValues } from '@/types';
import { useSignInValidationSchema } from '@/hooks/useSignInValidationSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Form, Input } from 'antd';
import { useForm } from 'react-hook-form';
import { FormItem } from 'react-hook-form-antd';
import { Link } from 'react-router-dom';
import styles from './SignIn.module.scss';
import { useEffect } from 'react';

export function SignIn() {
  const { t } = useTranslate();
  const { signInWithEmailAndPassword } = useFirebase(auth);
  const { validationSchema } = useSignInValidationSchema();

  const {
    control,
    handleSubmit,
    trigger,
    formState: { touchedFields },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });

  const onFormSubmit = async ({ email, password }: ISignInValues) => {
    await signInWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    if (touchedFields.email || touchedFields.password) {
      trigger();
    }
  }, [validationSchema, touchedFields, trigger]);

  return (
    <section className={styles.signIn}>
      <Form
        name="signInForm"
        layout="vertical"
        className={styles.form}
        initialValues={{
          remember: true,
        }}
        onFinish={handleSubmit(onFormSubmit)}
        autoComplete="off"
      >
        <FormItem control={control} label={t('Form.Email', 'Email')} name="email">
          <Input
            autoComplete="on"
            placeholder={t('Form.EmailPlaceholder', 'Please input your email!')}
            data-testid="email"
          />
        </FormItem>

        <FormItem control={control} label={t('Form.Password', 'Password')} name="password">
          <Input.Password
            autoComplete="on"
            placeholder={t('Form.PasswordPlaceholderSignIn', 'Please enter password')}
            data-testid="password"
          />
        </FormItem>

        <Form.Item className={styles.submit}>
          <Button type="primary" htmlType="submit" block>
            {t('Form.SignIn', 'Sign in')}
          </Button>

          <p className={styles.paragraph}>
            {t('Form.accountMessageSignIn', "Don't have an account?")}
            <Link to={'/signup'}> {t('Form.SignUp', 'Sign up')}</Link>
          </p>
        </Form.Item>
      </Form>
    </section>
  );
}
