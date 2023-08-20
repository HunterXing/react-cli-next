import React from 'react';
import { RouteObject } from 'react-router-dom';

// 路由懒加载
const Login = React.lazy(() => import('../pages/login'));
const Register = React.lazy(() => import('../pages/login/register'));

const staticRouters: RouteObject[] = [
  {
    id: 'login',
    path: '/login',
    element: <Login />,
  },
  {
    id: 'register',
    path: '/register',
    element: <Register />,
  },
];

export default staticRouters;
