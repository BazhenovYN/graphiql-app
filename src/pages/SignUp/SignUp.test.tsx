import '@/mocks/firebase';
import { renderWithProviders } from '@/utils/test-utils';
import { fireEvent, waitFor } from '@testing-library/react';
import 'firebase/auth';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { MemoryRouter } from 'react-router-dom';
import { SignUp } from './SignUp';

describe('SignUp page tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  test('Must contain Username Email Password and Sign up button', () => {
    const { getByText } = renderWithProviders(
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>
    );

    const emailLabel = getByText('Email');
    const passwordLabel = getByText('Password');
    const confirmPasswordLabel = getByText('Confirm password');
    const signInButton = getByText('Sign up');
    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
    expect(confirmPasswordLabel).toBeInTheDocument();
    expect(signInButton).toBeInTheDocument();
  });
  test('Must create a new user with email and password', async () => {
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

    await waitFor(() => {
      expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(
        getAuth(),
        'user@example.com',
        'password@123'
      );
    });
  });
});
