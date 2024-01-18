import { Flex, Layout } from 'antd';
import { Link } from 'react-router-dom';
import RssLogo from '@/assets/svg/rss.svg?react';
import { useTranslate } from '@/context/TranslateContext';
import styles from './Footer.module.scss';

export function Footer() {
  const { t } = useTranslate();
  return (
    <Layout.Footer>
      <Flex vertical gap="small">
        <Flex justify="center" align="center" gap="middle" wrap="wrap">
          <Link to="https://github.com/BazhenovYN">
            <img
              className={styles.img}
              src="https://avatars.githubusercontent.com/u/114768651?v=4"
              alt="bazhenovYN-Github"
            />
          </Link>
          <Link to="https://github.com/antasth">
            <img
              className={styles.img}
              src="https://avatars.githubusercontent.com/u/108691372?v=4"
              alt="antasth-Github"
            />
          </Link>
          <Link to="https://github.com/ElenaAnisimova">
            <img
              className={styles.img}
              src="https://avatars.githubusercontent.com/u/105546152?v=4"
              alt="ElenaAnisimova-Github"
            />
          </Link>
          <div>{t('Footer.About', '© 2023 Setun-70')}</div>
          <Link to="https://rs.school/js/">
            <RssLogo style={{ width: '80px', height: '30px' }} />
          </Link>
        </Flex>
      </Flex>
    </Layout.Footer>
  );
}
