import { AnonymousRoutes } from '@/components/AnonymousRoutes';
import { PrivateRoutes } from '@/components/PrivateRoutes';
import { RootLayout } from '@/layouts/RootLayout';
import { Main } from '@/pages/Main';
import { NotFound } from '@/pages/NotFound';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { SignIn } from '@/pages/SignIn';
import { SignUp } from '@/pages/SignUp';
import { Welcome } from '@/pages/Welcome';
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

export const routes = (
  <Route path="/" element={<RootLayout />} errorElement={<ErrorBoundary />}>
    <Route index element={<Welcome />} />
    <Route element={<PrivateRoutes />}>
      <Route path="/main" element={<Main />} />
    </Route>
    <Route element={<AnonymousRoutes />}>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Route>
);

export const router = createBrowserRouter(createRoutesFromElements(routes));
