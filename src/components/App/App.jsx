import s from './App.module.css';
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
} from 'react-router-dom';

import Header from 'components/Header';
import LoginPage from 'pages/LoginPage';
import ContactsPage from 'pages/ContactsPage';
import RegisterPage from 'pages/RegisterPage';

import * as api from 'services/contacts-api';
import { useSelector } from 'react-redux';
import { getIsLoggedIn, getToken } from 'redux/auth';
import { useEffect } from 'react';
import Wrapper from '../Wrapper';

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
    <>
      <header className={s.header}>
        <Wrapper content={<Header />} type={'transparent'} />
      </header>
      <main className={s.main}>
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
      </main>
    </>
  );
};

export default App;
