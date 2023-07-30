import React from "react";
import ReactDOM from "react-dom";
import style from "./index.less";

const App = () => <div className={style.appContainer}>Hello World!</div>;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);