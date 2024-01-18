import { App as AntdApp } from 'antd';
import { RouterProvider } from 'react-router-dom';

import { TranslateProvider } from '@/context/TranslateContext';
import { router } from '@/router';

function App() {
  return <RouterProvider router={router} />;
}

export function AppWrapper() {
  return (
    <AntdApp notification={{ placement: 'bottomRight' }}>
      <TranslateProvider>
        <App />
      </TranslateProvider>
    </AntdApp>
  );
}
