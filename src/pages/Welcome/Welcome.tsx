import styles from './Welcome.module.scss';
import PlaygroundScreenshot from '@/assets/img/screenshot.png';
import { Typography, Flex, Button } from 'antd';
import { TeamSection } from '@/pages/Welcome/TeamSection/TeamSection';
import { FeaturesSection } from '@/pages/Welcome/FeaturesSection/FeaturesSection';
import { CourseSection } from '@/pages/Welcome/CourseSection/CourseSection';
import { HEADINGS_TEXT, BUTTONS_PROPS } from './WelcomePageConstants';
import { useNavigate } from 'react-router-dom';
import { ArrowRightOutlined } from '@ant-design/icons';

export function Welcome() {
  const { Title, Text } = Typography;
  const navigate = useNavigate();

  return (
    <div className={styles.welcomeSection}>
      <section className={styles.topWrapper}>
        <Flex className={styles.topWrapperFlex} justify="space-between" gap="1.2rem">
          <div className={styles.titleWrapper}>
            <Title className={styles.welcomeHeading + ' ' + styles.mainHeading}>
              Welcome to Setun-70<br></br>
            </Title>

            <Title
              className={styles.welcomeHeading + ' ' + styles.secondMainHeading}
              style={{ marginTop: '0' }}
            >
              GraphiQL Playround!
            </Title>
          </div>
          <Flex gap="large" className={styles.buttonWrapper}>
            <Button
              onClick={() => {
                navigate(BUTTONS_PROPS[0].link);
              }}
              className={styles.welcomeBtn + ' ' + styles.loginBtn}
              type="primary"
            >
              Sign In
            </Button>

            <Button
              onClick={() => {
                navigate(BUTTONS_PROPS[1].link);
              }}
              className={styles.welcomeBtn + ' ' + styles.signupBtn}
              type="default"
            >
              Sign Up
            </Button>

            <Button
              onClick={() => {
                navigate(BUTTONS_PROPS[2].link);
              }}
              className={styles.welcomeBtn + ' ' + styles.signupBtn}
              type="default"
            >
              Main page
              <ArrowRightOutlined />
            </Button>
          </Flex>
        </Flex>

        <div className={styles.subHeadingWrapper}>
          <Text className={styles.welcomeHeading + ' ' + styles.subHeading}>
            {HEADINGS_TEXT.first}
            <br></br>
            {HEADINGS_TEXT.second}
          </Text>
        </div>

        <Flex justify="center">
          <Button
            onClick={() => {
              navigate(BUTTONS_PROPS[2].link);
            }}
            id={styles.linkBtn}
            type="link"
          >
            Explore GraphiQL Playground
          </Button>
        </Flex>

        <div className={styles.imgWrapper}>
          {/* TO DO: REPLACE WITH OUR PROJECT SCREENSHOT  */}
          <img
            className={styles.welcomeSectionImg}
            src={PlaygroundScreenshot}
            alt="playground-screenshot"
          />
        </div>
      </section>
      <FeaturesSection />
      <TeamSection />
      <CourseSection />
    </div>
  );
}
