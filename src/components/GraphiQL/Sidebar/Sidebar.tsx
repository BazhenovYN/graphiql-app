import { Button, Flex, Tooltip } from 'antd';
import { GrBook } from 'react-icons/gr';
import { LuPaintbrush } from 'react-icons/lu';

import { useTranslate } from '@/context/TranslateContext';

import styles from './Sidebar.module.scss';

interface IProps {
  readonly onShowDocumentation: () => void;
  readonly onPrettifying: () => void;
  readonly isDocLoading: boolean;
}

export function Sidebar({ onShowDocumentation, onPrettifying, isDocLoading }: IProps) {
  const { t } = useTranslate();

  return (
    <Flex vertical gap="small" className={styles.sidebar} data-testid="sidebar">
      <Tooltip title={t('GraphQL.ShowDocumentation', 'Show documentation')} placement="left">
        <Button
          shape="circle"
          size="large"
          icon={<GrBook />}
          onClick={onShowDocumentation}
          loading={isDocLoading}
          data-testid="btn-show-docs"
        />
      </Tooltip>
      <Tooltip title={t('GraphQL.Prettify', 'Prettify')} placement="left">
        <Button
          shape="circle"
          size="large"
          icon={<LuPaintbrush />}
          onClick={onPrettifying}
          data-testid="btn-prettify"
        />
      </Tooltip>
    </Flex>
  );
}
