import { act, fireEvent, render } from '@testing-library/react';

import { typeList } from '@/mocks/graphql';
import { Documentation } from './Documentation';

describe('Documentation', () => {
  test('renders correctly', async () => {
    const { getByTestId } = await act(async () =>
      render(<Documentation availableTypes={typeList} />)
    );
    const docs = getByTestId('documentation');
    expect(docs).toBeInTheDocument();
  });

  test('renders type list by default', async () => {
    const { getByTestId } = await act(async () =>
      render(<Documentation availableTypes={typeList} />)
    );
    const list = getByTestId('type-list');
    expect(list).toBeInTheDocument();
  });

  test('renders type description after click on type name', async () => {
    const { getByRole, getByTestId } = await act(async () =>
      render(<Documentation availableTypes={typeList} />)
    );
    const btn = getByRole('button', { name: typeList[0].name! });
    fireEvent.click(btn);
    const typeDescription = getByTestId('type-description');
    expect(typeDescription).toBeInTheDocument();
  });

  test('renders type list after step back', async () => {
    const { getByRole, getByTestId } = await act(async () =>
      render(<Documentation availableTypes={typeList} />)
    );

    const btn = getByRole('button', { name: typeList[1].name! });
    fireEvent.click(btn);

    const btnBack = getByTestId('btn-back');
    fireEvent.click(btnBack);

    const list = getByTestId('type-list');
    expect(list).toBeInTheDocument();
  });

  test('renders type list after click on the Home button', async () => {
    const { getByRole, getByTestId } = await act(async () =>
      render(<Documentation availableTypes={typeList} />)
    );

    const btn = getByRole('button', { name: typeList[0].name! });
    fireEvent.click(btn);

    const btnHome = getByTestId('btn-home');
    fireEvent.click(btnHome);

    const list = getByTestId('type-list');
    expect(list).toBeInTheDocument();
  });
});
