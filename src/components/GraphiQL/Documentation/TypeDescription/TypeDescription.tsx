import { List, Space, Typography } from 'antd';

import type { IGraphQLType } from '@/types';

import { Field } from './Field';
import { FieldList } from './FieldList';

interface IProps {
  readonly type: IGraphQLType;
  readonly onSelectType: (name: string | null) => void;
}

export function TypeDescription({ type, onSelectType }: IProps) {
  return (
    <Space direction="vertical" data-testid="type-description">
      <Typography.Title level={5}>{type.name}</Typography.Title>
      <Typography.Text>{type.description}</Typography.Text>
      {type.fields && (
        <FieldList
          title="Fields"
          data-testid="type-fields"
          dataSource={type.fields}
          renderItem={(field) => (
            <List.Item style={{ padding: '8px 0' }}>
              <Field data={field} onSelectType={onSelectType} />
            </List.Item>
          )}
        />
      )}
      {type.inputFields && (
        <FieldList
          title="Fields"
          data-testid="type-input-fields"
          dataSource={type.inputFields}
          renderItem={(field) => (
            <List.Item style={{ padding: '8px 0' }}>
              <Field data={field} onSelectType={onSelectType} />
            </List.Item>
          )}
        />
      )}
      {type.enumValues && (
        <FieldList
          title="Enum values"
          data-testid="type-enum-fields"
          dataSource={type.enumValues}
          renderItem={(item) => <List.Item style={{ padding: '8px 0' }}>{item.name}</List.Item>}
        />
      )}
    </Space>
  );
}
