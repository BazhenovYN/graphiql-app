import { useAuth } from '@/hooks/useAuth';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { MockedFunction } from 'vitest';
import { PrivateRoutes } from './PrivateRoutes';

vi.mock('@/hooks/useAuth', () => ({
  useAuth: vi.fn().mockReturnValue({ isAuth: false }),
}));

const mockedUseAuth = useAuth as MockedFunction<typeof useAuth>;

describe('PrivateRoutes', () => {
  const setup = (isAuth: boolean) => {
    mockedUseAuth.mockReturnValue({ isAuth });
  };

  test('should redirect from main page if user is not authenticated', async () => {
    setup(false);
    const MainComponent = () => <div>Main Component</div>;

    render(
      <MemoryRouter initialEntries={['/main']}>
        <Routes>
          <Route path="/" element={<PrivateRoutes />}>
            <Route path="main" element={<MainComponent />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    waitFor(() => {
      expect(screen.getByText('Send Request')).not.toBeInTheDocument();
    });
  });

  test('should not redirect from main page for authenticated users', async () => {
    setup(true);

    const MainComponent = () => <div>Main Component</div>;

    render(
      <MemoryRouter initialEntries={['/main']}>
        <Routes>
          <Route path="/" element={<PrivateRoutes />}>
            <Route path="main" element={<MainComponent />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    waitFor(() => {
      expect(screen.getByText('Main Component')).not.toBeInTheDocument();
    });
  });
});
