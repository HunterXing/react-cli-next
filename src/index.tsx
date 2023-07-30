import React from "react";
import ReactDOM from "react-dom";
import "@/assets/styles/common.less";
import style from "./index.less";
import HelloBigImage from "@/assets/images/helloworld-big-image.jpg";
import smallImage from "@/assets/images/small-image.png";

const App = () => (<div className={style.appContainer}>
  Hello World!
  <img style={{ width: '50%'}} src={HelloBigImage} alt="" />
  <img src={smallImage} alt="" />
</div>);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);