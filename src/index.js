/*
应用的入口文件
*/
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import storageUtils from './utils/storageUtils'
// import memoryUtils from './utils/memoryUtils'

// 读取local中保存user, 保存到内存中
// const user = storageUtils.getUser()
// memoryUtils.user = user

ReactDOM.render(
  <BrowserRouter>
    <App />,
  </BrowserRouter>,
  document.getElementById('root')
);


