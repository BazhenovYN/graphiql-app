import { Flex, Typography } from 'antd';

import { IField } from '@/types';

import { ArgsList } from './ArgsList';
import { TypeName } from './TypeName';

interface IProps {
  readonly data: IField;
  readonly onSelectType: (name: string | null) => void;
}

export function Field({ data, onSelectType }: IProps) {
  return (
    <Flex vertical data-testid="field">
      <Flex align="center" gap="0.2em" wrap="wrap">
        <Typography.Text code>{data.name}</Typography.Text>
        {data.args?.length > 0 && <ArgsList args={data.args} onSelectType={onSelectType} />}
        <Typography.Text>:</Typography.Text>
        <TypeName type={data.type} onSelectType={onSelectType} />
      </Flex>
      {data.description && (
        <Typography.Text style={{ marginBottom: 16 }}>{data.description}</Typography.Text>
      )}
    </Flex>
  );
}
