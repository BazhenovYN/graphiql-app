import { CodeMirrorTextArea } from '@/components/GraphiQL/CodeMirrorTextArea';
import { useTranslate } from '@/context/TranslateContext';

import styles from './Headers.module.scss';

interface IProps {
  readonly value: string;
  readonly onChange: (value: string) => void;
}

export function Headers({ value, onChange }: IProps) {
  const { t } = useTranslate();

  return (
    <CodeMirrorTextArea
      className={styles.headers}
      placeholder={t('GraphQL.Headers.Placeholder', '')}
      value={value}
      onChange={onChange}
      language="json"
    />
  );
}
