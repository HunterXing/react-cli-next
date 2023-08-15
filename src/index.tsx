import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/assets/styles/common.less';
import style from './index.less';
// import Login from './login';
import JotaiLearn from './jotai-learn';

const App = () => {
  return (
    <div className={style.appContainer}>
      {/* <Login /> */}
      <JotaiLearn />
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
