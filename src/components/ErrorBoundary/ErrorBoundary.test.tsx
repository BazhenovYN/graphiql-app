import { render } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { ErrorBoundary } from './ErrorBoundary';

const Child = () => {
  throw new Error();
};

describe('Error Boundary loads Error Component', () => {
  test(`should render error component when error occurs`, () => {
    vi.spyOn(console, 'error').mockImplementation(() => vi.fn());
    const routes = [
      {
        path: '/',
        element: <Child />,
        errorElement: <ErrorBoundary />,
      },
    ];
    const router = createMemoryRouter(routes);

    const { getByTestId } = render(<RouterProvider router={router} />);
    const errorMessage = getByTestId('error-page');
    expect(errorMessage).toBeInTheDocument();
  });
});
