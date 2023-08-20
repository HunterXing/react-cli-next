import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import '@/assets/styles/common.less';
import style from './index.less';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { useLoadRouter } from './routers/useLoadRouter';
import Loading from './components/Loading';

const App = () => {
  const routes = useLoadRouter();
  return (
    <div className={style.appContainer}>
      <Suspense fallback={<Loading />}>{useRoutes(routes)}</Suspense>
    </div>
  );
};

//  ReactDOM.render is no longer supported in React 18.
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
