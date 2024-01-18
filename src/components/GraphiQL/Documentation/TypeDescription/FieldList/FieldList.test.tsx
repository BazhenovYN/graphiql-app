import { render } from '@testing-library/react';
import { List } from 'antd';

import { fields } from '@/mocks/graphql';
import { FieldList } from './FieldList';

describe('FieldList', () => {
  test('renders corretly', () => {
    const { getByRole } = render(
      <FieldList
        title="Test"
        dataSource={fields}
        renderItem={(field) => <List.Item>{field.name}</List.Item>}
      />
    );
    const list = getByRole('list');
    expect(list).toBeInTheDocument();
  });

  test('shows title', () => {
    const { getByText } = render(<FieldList title="Test title" />);
    const title = getByText(/test title/i);
    expect(title).toBeInTheDocument();
  });
});
