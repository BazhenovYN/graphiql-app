import { Flex } from 'antd';
import { CodeMirrorTextArea } from '../CodeMirrorTextArea';

import { useTranslate } from '@/context/TranslateContext';

import styles from './ResponseViewer.module.scss';

interface IProps {
  readonly value: string;
}

export function ResponseViewer({ value }: IProps) {
  const { t } = useTranslate();

  return (
    <Flex vertical className={styles.container}>
      <CodeMirrorTextArea
        value={value}
        className={styles.viewer}
        placeholder={t('GraphQL.ResponseViewer.Placeholder', '')}
        language="json"
        readOnly
      />
    </Flex>
  );
}
