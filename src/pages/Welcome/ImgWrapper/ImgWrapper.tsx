import PlaygroundScreenshot from '@/assets/img/screenshot.png';
import styles from './ImgWrapper.module.scss';
import { Flex } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslate } from '@/context/TranslateContext';

export function ImgWrapper() {
  const { t } = useTranslate();
  return (
    <div className={styles.imgWrapper}>
      <img
        className={styles.welcomeSectionImg}
        src={PlaygroundScreenshot}
        alt="playground-screenshot"
      />
      <Flex justify="center" id={styles.linkBtnWrapper}>
        <Link
          to={'https://www.youtube.com/watch?v=UnYo3C_sJmc'}
          target="_blank"
          id={styles.youtubeLink}
        >
          {t('Welcome.Top.YoutubeLink')}
        </Link>
      </Flex>
    </div>
  );
}
