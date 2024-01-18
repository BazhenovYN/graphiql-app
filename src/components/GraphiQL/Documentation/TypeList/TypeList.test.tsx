import { fireEvent, render } from '@testing-library/react';

import { typeList } from '@/mocks/graphql';
import { TypeList } from './TypeList';

describe('TypeList', () => {
  test('renders correctly', () => {
    const { getByRole } = render(<TypeList list={typeList} onSelectType={vi.fn()} />);
    const list = getByRole('list');
    expect(list).toBeInTheDocument();
  });

  test('click on type call onSelectType handler', () => {
    const onSelectType = vi.fn();
    const { getByRole } = render(<TypeList list={[typeList[0]]} onSelectType={onSelectType} />);
    const button = getByRole('button');
    fireEvent.click(button);
    expect(onSelectType).toHaveBeenCalledTimes(1);
    expect(onSelectType).toHaveBeenCalledWith(typeList[0].name);
  });
});
