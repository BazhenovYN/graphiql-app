import { mockUser } from '@/mocks/user';
import { SignIn } from '@/pages/SignIn';
import { SignUp } from '@/pages/SignUp';
import { fireEvent, waitFor } from '@testing-library/react';
import { Header } from 'antd/es/layout/layout';
import { MemoryRouter } from 'react-router-dom';
import { isUserExists } from './localStorage';
import { renderWithProviders } from './test-utils';

describe('Tests for localStorage functions', () => {
  test('When the application is launched, it should not be user saved in localStorage', () => {
    renderWithProviders(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(isUserExists()).toBeFalsy();
  });

  test('After sign up user must be saved in localStorage', async () => {
    const { getByTestId, getByRole } = renderWithProviders(
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>
    );

    fireEvent.change(getByTestId('email'), {
      target: { value: 'user@example.com' },
    });
    fireEvent.change(getByTestId('password'), {
      target: { value: 'password@123' },
    });
    fireEvent.change(getByTestId('confirmPassword'), {
      target: { value: 'password@123' },
    });

    fireEvent.click(getByRole('button', { name: /Sign up/i }));

    waitFor(() => {
      expect(isUserExists()).toBeTruthy();
    });
  });

  test('Must read user data from localstorage after page reload', async () => {
    localStorage.setItem('user', JSON.stringify(mockUser));

    const { queryByText } = renderWithProviders(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>
    );

    waitFor(() => {
      expect(queryByText('Sign out')).toBeInTheDocument();
    });
  });
});
