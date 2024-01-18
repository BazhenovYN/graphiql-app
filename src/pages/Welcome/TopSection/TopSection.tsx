import { ButtonsWrapper } from './ButtonsWrapper';
import styles from './TopSection.module.scss';
import { Typography, Flex } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslate } from '@/context/TranslateContext';
import { useAuth } from '@/hooks/useAuth';

export function TopSection() {
  const { Title, Text } = Typography;
  const { t } = useTranslate();
  const { isAuth } = useAuth();

  return (
    <section className={styles.topWrapper}>
      <Flex className={styles.topWrapperFlex} justify="space-between" gap="1.2rem">
        <div className={styles.titleWrapper}>
          <Title
            data-testid="page-title"
            className={styles.welcomeHeading + ' ' + styles.mainHeading}
          >
            {t('Welcome.Top.Heading1')}
          </Title>

          <Title
            className={styles.welcomeHeading + ' ' + styles.secondMainHeading}
            style={{ marginTop: '0' }}
            level={2}
          >
            {t('Welcome.Top.Heading2')}
          </Title>
        </div>
        <ButtonsWrapper />
      </Flex>

      <div className={styles.subHeadingWrapper}>
        <Text
          data-testid="page-subheading"
          className={styles.welcomeHeading + ' ' + styles.subHeading}
        >
          {t('Welcome.Top.Subheading1')}
          <br />
          {t('Welcome.Top.Subheading2')}
        </Text>
      </div>
      <Flex justify="center" id={styles.linkBtnWrapper}>
        {isAuth ? (
          <Link to={'/main'} id={styles.mainPageLinkBtn}>
            {t('Welcome.Top.Link.Auth')}
          </Link>
        ) : (
          <Link to={'/signin'} id={styles.signInLinkBtn}>
            {t('Welcome.Top.Link.NoAuth')}
          </Link>
        )}
      </Flex>
    </section>
  );
}
