import { useAuth } from '@/hooks/useAuth';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { MockedFunction } from 'vitest';
import { AnonymousRoutes } from './AnonymousRoutes';

vi.mock('@/hooks/useAuth', () => ({
  useAuth: vi.fn().mockReturnValue({ isAuth: false }),
}));

const mockedUseAuth = useAuth as MockedFunction<typeof useAuth>;

describe('AnonymousRoutes', () => {
  const setup = (isAuth: boolean) => {
    mockedUseAuth.mockReturnValue({ isAuth });
  };

  test('renders main page if user is authenticated and try go to signin page', async () => {
    setup(true);
    const OutletComponent = () => <div>Outlet Component</div>;

    render(
      <MemoryRouter initialEntries={['/signin']}>
        <Routes>
          <Route path="/" element={<AnonymousRoutes />}>
            <Route path="signin" element={<OutletComponent />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    waitFor(() => {
      expect(screen.getByText('Send Request')).toBeInTheDocument();
    });
  });

  test('should redirect to outlet for unauthenticated users', async () => {
    setup(false);

    const OutletComponent = () => <div>Outlet Component</div>;

    render(
      <MemoryRouter initialEntries={['/signin']}>
        <Routes>
          <Route path="/" element={<AnonymousRoutes />}>
            <Route path="signin" element={<OutletComponent />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Outlet Component')).toBeInTheDocument();
  });
});
