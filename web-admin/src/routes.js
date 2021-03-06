import React from 'react'
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout'
import loading from './assets/img/brand/loading.gif'

function Loading() {
  return (
    <div className="text-center">
      <img src={loading} alt="loading" style={{ marginTop: '5%', height: '50%', width: '50%' }} />
    </div>
  )
}

const Dashboard = Loadable({
  loader: () => import('./views/Dashboard'),
  loading: Loading,
})

const Admins = Loadable({
  loader: () => import('./containers/AccountLayout/Admins'),
  loading: Loading,
})

const Users = Loadable({
  loader: () => import('./containers/AccountLayout/Users'),
  loading: Loading,
})

const MobilTangkis = Loadable({
  loader: () => import('./containers/AccountLayout/MobilTangkis'),
  loading: Loading,
})

const Checklist = Loadable({
  loader: () => import('./views/Checklist'),
  loading: Loading,
})

const Login = Loadable({
  loader: () => import('./views/Login'),
  loading: Loading,
})

const QRCodeAMT = Loadable({
  loader: () => import('./containers/AccountLayout/QRCodeAMT'),
  loading: Loading,
})

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/login', exact: true, name: 'Login', component: Login },
  { path: '/admins', exact: true, name: 'Admins', component: Admins },
  { path: '/users', exact: true, name: 'Users', component: Users },
  { path: '/amts', name: 'AMT', component: MobilTangkis },
  { path: '/checklist', name: 'Checklist', component: Checklist },
  { path: '/report-qrcode-amt', name: 'QRCode AMT', component: QRCodeAMT },
  // { path: '/users/:id', exact: true, name: 'User Details', component: User },
]

export default routes
