import styles from './ButtonsWrapper.module.scss';
import { Flex, Button } from 'antd';
import { useAuth } from '@/hooks/useAuth';
import { Link } from 'react-router-dom';
import { useTranslate } from '@/context/TranslateContext';

export function ButtonsWrapper() {
  const { isAuth } = useAuth();
  const { t } = useTranslate();
  return isAuth ? (
    <Flex className={styles.buttonWrapper}>
      <Link to={'main'}>
        <Button data-testid="main-page-btn" id={styles.mainPageBtn} type="default">
          {t('Welcome.Top.Button.MainPage')}
        </Button>
      </Link>
    </Flex>
  ) : (
    <Flex className={styles.buttonWrapper}>
      <Link to={'signin'}>
        <Button data-testid="sign-in-btn" id={styles.loginBtn} type="primary">
          {t('Welcome.Top.Button.Signin')}
        </Button>
      </Link>
      <Link to={'signup'}>
        <Button data-testid="sign-up-btn" id={styles.signupBtn} type="default">
          {t('Welcome.Top.Button.Signup')}
        </Button>
      </Link>
    </Flex>
  );
}
