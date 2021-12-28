import s from './App.module.css';
import { Redirect, Route, Switch } from 'react-router-dom';

import LoginPage from 'pages/LoginPage';
import ContactsPage from 'pages/ContactsPage';

import RegisterPage from 'pages/RegisterPage';
import Toast from 'components/Toast';

const App = () => {
  return (
    <div className={s.app}>
      <Switch>
        <Route path={'/contacts'}>
          <ContactsPage />
        </Route>
        <Route path={'/register'}>
          <RegisterPage />
        </Route>
        <Route path={'/login'}>
          <LoginPage />
        </Route>
        <Redirect to={'/login'} />
      </Switch>
      <Toast />
    </div>
  );
};

export default App;
