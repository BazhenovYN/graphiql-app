import { CodeMirrorTextArea } from '@/components/GraphiQL/CodeMirrorTextArea';
import { useTranslate } from '@/context/TranslateContext';

import styles from './Variables.module.scss';

interface IProps {
  readonly value: string;
  readonly onChange: (value: string) => void;
}

export function Variables({ value, onChange }: IProps) {
  const { t } = useTranslate();

  return (
    <CodeMirrorTextArea
      language="json"
      className={styles.variables}
      placeholder={t('GraphQL.Variables.Placeholder', '')}
      value={value}
      onChange={onChange}
    />
  );
}
