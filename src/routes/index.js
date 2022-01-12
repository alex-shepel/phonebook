import { lazy } from 'react';

const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

const defaultPath = '/login';

const requireAuthPages = [
  {
    key: 'contacts-page',
    path: '/contacts',
    Component: ContactsPage,
    exact: true,
    redirectTo: 'login',
  },
];

const requireNotAuthPages = [
  {
    key: 'register-page',
    path: '/register',
    Component: RegisterPage,
    exact: true,
    redirectTo: '/contacts',
  },
  {
    key: 'login-page',
    path: '/login',
    Component: LoginPage,
    exact: false,
    redirectTo: '/contacts',
  },
];

export { requireAuthPages, requireNotAuthPages, defaultPath };
export { default } from './Routes';
