import React from 'react'

const Home = React.lazy(() => import('pages/Home'));
const Login = React.lazy(() => import('pages/Login'));


export interface IRouter {
  path: string
  exact?: boolean,
  auth?: boolean, // 是否需要登录
  component: any,
  children?: [{
    path: string,
    exact: boolean,
    component: any,
  }
  ]
}

export const routes: IRouter[] = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/login',
    auth: true,
    component: Login
  }
]

export default routes

