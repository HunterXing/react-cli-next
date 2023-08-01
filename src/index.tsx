import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/assets/styles/common.less';
import style from './index.less';
import Login from './login';

const App = () => {
  return (
    <div className={style.appContainer}>
      <Login />
    </div>
  );
};

//  ReactDOM.render is no longer supported in React 18.
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
