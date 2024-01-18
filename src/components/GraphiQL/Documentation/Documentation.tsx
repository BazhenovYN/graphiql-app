import { useState } from 'react';

import { LeftOutlined } from '@ant-design/icons';
import { Button, Flex, Space } from 'antd';
import { RiHome2Line } from 'react-icons/ri';

import { useTranslate } from '@/context/TranslateContext';
import type { IGraphQLType } from '@/types';
import { TypeDescription } from './TypeDescription';
import { TypeList } from './TypeList';

interface IProps {
  readonly availableTypes: IGraphQLType[];
}

const getTypeByName = (availableTypes: IGraphQLType[], name: string | null) => {
  if (!name) return;
  return availableTypes.find((type) => type.name === name);
};

export function Documentation({ availableTypes }: IProps) {
  const [explorer, setExplorer] = useState<IGraphQLType[]>([]);

  const { t } = useTranslate();

  const onSelectType = (name: string | null) => {
    const type = getTypeByName(availableTypes, name);
    if (type) {
      setExplorer([...explorer, type]);
    }
  };

  const getCurrentItem = () => {
    return explorer[explorer.length - 1];
  };

  const goStepBack = () => {
    setExplorer(explorer.slice(0, -1));
  };

  const goToStart = () => {
    setExplorer([]);
  };

  return (
    <Flex data-testid="documentation" style={{ width: '100%', height: '100%' }}>
      {explorer.length === 0 ? (
        <TypeList list={availableTypes} onSelectType={onSelectType} />
      ) : (
        <Space direction="vertical" size="large">
          <Space>
            <Button icon={<LeftOutlined />} onClick={goStepBack} data-testid="btn-back">
              {t('GraphQL.Documentation.Back', 'Back')}
            </Button>
            <Button icon={<RiHome2Line />} onClick={goToStart} data-testid="btn-home" />
          </Space>
          <TypeDescription type={getCurrentItem()} onSelectType={onSelectType} />
        </Space>
      )}
    </Flex>
  );
}
