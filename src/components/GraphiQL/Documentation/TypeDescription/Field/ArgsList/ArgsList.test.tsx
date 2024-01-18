import { fireEvent, render } from '@testing-library/react';

import { argList } from '@/mocks/graphql';
import { ArgsList } from './ArgsList';

describe('ArgsList', () => {
  test('renders corretly', () => {
    const { getByTestId } = render(<ArgsList args={argList} onSelectType={vi.fn()} />);
    const args = getByTestId('args');
    expect(args).toBeInTheDocument();
  });

  test('click on type call onSelectType handler', () => {
    const onSelectType = vi.fn();
    const { getByRole } = render(<ArgsList args={[argList[0]]} onSelectType={onSelectType} />);
    const button = getByRole('button');
    fireEvent.click(button);
    expect(onSelectType).toHaveBeenCalledTimes(1);
    expect(onSelectType).toHaveBeenCalledWith('String');
  });
});
