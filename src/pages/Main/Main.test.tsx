import { renderWithProviders } from '@/utils/test-utils';
import { Main } from './Main';
import { act } from 'react-dom/test-utils';

describe('Main page tests', () => {
  test('Must contain main page content', async () => {
    const { getByTestId } = await act(async () => renderWithProviders(<Main />));

    expect(getByTestId('btn-send-request')).toBeInTheDocument();
    expect(getByTestId('btn-show-panel')).toBeInTheDocument();
  });
});
