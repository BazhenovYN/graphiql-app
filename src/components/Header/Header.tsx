import { useState } from 'react';

import { CodeOutlined, HomeOutlined, LoginOutlined, UserOutlined } from '@ant-design/icons';
import { Affix, Menu, type MenuProps } from 'antd';
import { Header as AntdHeader } from 'antd/es/layout/layout';
import { useLocation, useNavigate } from 'react-router-dom';

import { useTranslate } from '@/context/TranslateContext';
import { auth } from '@/firebase';
import { useAuth } from '@/hooks/useAuth';
import { useFirebase } from '@/hooks/useFirebase';
import { LanguageSwitcher } from './LanguageSwitcher';

import styles from './Header.module.scss';

export const Header = () => {
  const [isAffixed, setIsAffixed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslate();
  const { isAuth } = useAuth();
  const { signOutFromUserAccount } = useFirebase(auth);

  const menuItems: MenuProps['items'] = [
    {
      label: t('Application.Welcome', 'Welcome'),
      key: '/',
      icon: <HomeOutlined />,
    },
  ];

  if (isAuth) {
    menuItems.push(
      {
        label: t('Application.Main', 'Main'),
        key: '/main',
        icon: <CodeOutlined />,
      },
      {
        label: t('Application.SignOut', 'Sign out'),
        key: '/signout',
        icon: <LoginOutlined />,
      }
    );
  } else {
    menuItems.push(
      {
        label: t('Application.SignIn', 'Sign in'),
        key: '/signin',
        icon: <LoginOutlined />,
      },
      {
        label: t('Application.SignUp', 'Sign up'),
        key: '/signup',
        icon: <UserOutlined />,
      }
    );
  }

  const handleLogOut = async () => {
    await signOutFromUserAccount();
  };

  const onClick: MenuProps['onClick'] = (e) => {
    e.key === '/signout' ? handleLogOut() : navigate(e.key);
  };

  const handleAffixChange = (affixed?: boolean) => {
    if (typeof affixed === 'boolean') {
      setIsAffixed(affixed);
    }
  };

  return (
    <>
      <Affix target={() => window} onChange={handleAffixChange}>
        <div></div>
      </Affix>
      <AntdHeader className={`${styles.header} ${isAffixed ? styles.affixed : ''}`}>
        <Menu
          onClick={onClick}
          mode="horizontal"
          items={menuItems}
          selectedKeys={[location.pathname]}
          className={styles.menu}
        />
        <LanguageSwitcher />
      </AntdHeader>
    </>
  );
};
