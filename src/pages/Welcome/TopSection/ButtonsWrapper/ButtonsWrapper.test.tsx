import { MemoryRouter } from 'react-router-dom';
import { ButtonsWrapper } from './ButtonsWrapper';
import { renderWithProviders } from '@/utils/test-utils';

describe('Welcome Page buttons wrapper component tests', () => {
  test('Must contain buttons elements', () => {
    const { getByTestId } = renderWithProviders(
      <MemoryRouter>
        <ButtonsWrapper />
      </MemoryRouter>
    );
    const signInButton = getByTestId('sign-in-btn');
    const signUpButton = getByTestId('sign-up-btn');

    expect(signInButton).toBeInTheDocument();
    expect(signUpButton).toBeInTheDocument();
  });
});
