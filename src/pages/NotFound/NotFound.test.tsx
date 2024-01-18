import { render, screen, waitFor } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { Main } from '../Main';
import { NotFound } from './NotFound';

describe('404 page tests', () => {
  test('404 page must be displayed when navigating to an invalid route', () => {
    const routes = [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ['/invalid-route'],
    });

    render(<RouterProvider router={router} />);

    waitFor(() => {
      expect(screen.getByText('Sorry, the page you visited does not exist')).toBeInTheDocument();
    });
  });
});
