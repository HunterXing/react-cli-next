import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/assets/styles/common.less';
import style from './index.less';
import HelloBigImage from '@/assets/images/helloworld-big-image.jpg';
import smallImage from '@/assets/images/small-image.png';
import { sum } from './utils';

const App = () => {
  const a = sum(1, 2);
  console.log(a);
  return (
    <div className={style.appContainer}>
      Hello World!
      <img style={{ width: '50%' }} src={HelloBigImage} alt="" />
      <img src={smallImage} alt="" />
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
