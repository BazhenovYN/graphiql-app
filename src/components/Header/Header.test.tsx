import { mockUser } from '@/mocks/user';
import { renderWithProviders } from '@/utils/test-utils';
import { act, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Header } from './Header';

const initialState = {
  currentUser: mockUser,
};

describe('Header tests', () => {
  test('Must contain signIn and signUp links if user is logged out', async () => {
    const { getByText, getByRole } = await act(async () =>
      renderWithProviders(
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      )
    );

    const signInLink = getByText('Sign in');
    const signUpLink = getByText('Sign up');
    const welcomeLink = getByText('Welcome');
    const langSwitcher = getByRole('combobox');

    expect(signInLink).toBeInTheDocument();
    expect(signUpLink).toBeInTheDocument();
    expect(welcomeLink).toBeInTheDocument();
    expect(langSwitcher).toBeInTheDocument();
  });

  test('Must hide signIn and signUp items if user is logged in', async () => {
    const { queryByText, getByText } = await act(async () =>
      renderWithProviders(
        <MemoryRouter>
          <Header />
        </MemoryRouter>,
        {
          preloadedState: {
            user: initialState,
          },
        }
      )
    );

    fireEvent.click(getByText('Welcome'));
    waitFor(() => {
      expect(queryByText('Sign in')).not.toBeInTheDocument();
      expect(queryByText('Sign up')).not.toBeInTheDocument();
    });
  });

  test('Must contain Sign out button when user is logged in', async () => {
    const { getByText } = await act(async () =>
      renderWithProviders(
        <MemoryRouter>
          <Header />
        </MemoryRouter>,
        {
          preloadedState: {
            user: initialState,
          },
        }
      )
    );

    fireEvent.click(getByText('Welcome'));
    waitFor(() => {
      expect(getByText('Sign out')).toBeInTheDocument();
    });
  });

  test('After logout must contain Sign in and Sign up links and not contain Sign out button', async () => {
    const { getByText, queryByText } = await act(async () =>
      renderWithProviders(
        <MemoryRouter>
          <Header />
        </MemoryRouter>,
        {
          preloadedState: {
            user: initialState,
          },
        }
      )
    );

    fireEvent.click(getByText('Welcome'));

    waitFor(() => {
      expect(getByText('Sign out')).toBeInTheDocument();
      fireEvent.click(getByText('Sign out'));

      waitFor(() => {
        expect(queryByText('Sign out')).not.toBeInTheDocument();
        expect(getByText('Sign in')).toBeInTheDocument();
        expect(getByText('Sign up')).toBeInTheDocument();
      });
    });
  });
});
