import React from 'react';
import { Space, Spin } from 'antd';
import style from './index.less';

const Loading = () => {
  return (
    <div className={style.LoadingWrap}>
      <Space size="middle">
        <Spin size="large" />
      </Space>
    </div>
  );
};

export default Loading;
