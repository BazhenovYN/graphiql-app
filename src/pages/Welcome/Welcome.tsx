import styles from './Welcome.module.scss';
import { TopSection } from './TopSection';
import { FeaturesSection } from './FeaturesSection';
import { TeamSection } from './TeamSection';
import { CourseSection } from './CourseSection';

export function Welcome() {
  return (
    <div className={styles.welcomeSection}>
      <TopSection />
      <FeaturesSection />
      <TeamSection />
      <CourseSection />
    </div>
  );
}
