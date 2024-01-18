import { useState } from 'react';

import { UpOutlined } from '@ant-design/icons';
import { Button, Flex, Tabs } from 'antd';

import { useTranslate } from '@/context/TranslateContext';

import { Headers } from './Headers';
import { Variables } from './Variables';

import { CodeMirrorTextArea } from '../CodeMirrorTextArea';
import styles from './RequestEditor.module.scss';

interface IProps {
  readonly query: string;
  readonly onChangeQuery: (value: string) => void;
  readonly variables: string;
  readonly onChangeVariables: (value: string) => void;
  readonly headers: string;
  readonly onChangeHeaders: (value: string) => void;
}

export function RequestEditor({
  query,
  onChangeQuery,
  variables,
  onChangeVariables,
  headers,
  onChangeHeaders,
}: IProps) {
  const [isOpenPanel, setIsOpenPanel] = useState(false);

  const { t } = useTranslate();

  const showPanel = () => {
    setIsOpenPanel(!isOpenPanel);
  };

  return (
    <Flex vertical className={styles.container}>
      <CodeMirrorTextArea
        value={query}
        className={styles.editor}
        onChange={onChangeQuery}
        placeholder={t('GraphQL.RequestEditor.Placeholder', '')}
        language="graphq"
      />

      <Tabs
        type="card"
        style={{ width: '100%' }}
        onTabClick={() => setIsOpenPanel(true)}
        tabBarExtraContent={
          <Button
            icon={<UpOutlined />}
            style={{
              transform: isOpenPanel ? 'rotate(-180deg)' : '',
              color: 'rgba(0, 0, 0, 0.25)',
            }}
            shape="circle"
            size="small"
            type="text"
            onClick={showPanel}
            data-testid="btn-show-panel"
          />
        }
        items={[
          {
            label: t('GraphQL.Variables', 'Variables'),
            key: 'variables',
            children: <Variables value={variables} onChange={onChangeVariables} />,
            style: { display: isOpenPanel ? '' : 'none', height: '10rem' },
          },
          {
            label: t('GraphQL.Headers', 'Headers'),
            key: 'headers',
            children: <Headers value={headers} onChange={onChangeHeaders} />,
            style: { display: isOpenPanel ? '' : 'none', height: '10rem' },
          },
        ]}
      />
    </Flex>
  );
}
