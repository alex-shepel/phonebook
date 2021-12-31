import s from './App.module.css';
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
} from 'react-router-dom';

import Header from 'components/Header';
import Wrapper from 'components/Wrapper';
import Spinner from 'components/Spinner';

import * as api from 'services/contacts-api';
import { useSelector } from 'react-redux';
import { getIsLoggedIn, getToken } from 'redux/auth';
import { lazy, Suspense, useEffect } from 'react';

const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

const App = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const token = useSelector(getToken);
  const history = useHistory();
  const location = useLocation();

  api.setToken(token);

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/contacts');
      return;
    }

    if (location.pathname === '/contacts') {
      history.push('/login');
    }
  }, [history, isLoggedIn, location.pathname]);

  return (
    <div className={s.app}>
      <header className={s.header}>
        <Wrapper content={<Header />} type={'transparent'} />
      </header>
      <main className={s.main}>
        <Suspense fallback={<Spinner size={40} />}>
          <Switch>
            <Route exact path={'/contacts'}>
              <ContactsPage />
            </Route>
            <Route exact path={'/register'}>
              <RegisterPage />
            </Route>
            <Route path={'/login'}>
              <LoginPage />
            </Route>
            <Redirect to={'/login'} />
          </Switch>
        </Suspense>
      </main>
    </div>
  );
};

export default App;
