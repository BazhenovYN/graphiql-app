import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

export const NotFound = () => {
  return (
    <Result
      className={styles.result}
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Link to={'/'}>
          <Button type="primary">Back Home</Button>
        </Link>
      }
    />
  );
};
