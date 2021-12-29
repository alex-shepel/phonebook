import s from './App.module.css';
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
} from 'react-router-dom';

import LoginPage from 'pages/LoginPage';
import ContactsPage from 'pages/ContactsPage';
import RegisterPage from 'pages/RegisterPage';

import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth';
import { useEffect } from 'react';
import Header from '../Header/Header';

const App = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const history = useHistory();
  const location = useLocation();

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
      <Header />
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
    </div>
  );
};

export default App;
