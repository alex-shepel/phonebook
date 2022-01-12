import s from './App.module.css';

import Header from 'components/Header';
import Wrapper from 'components/Wrapper';

import * as api from 'services/contacts-api';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoggedIn, getToken, resetAuthState } from 'redux/auth';
import { useEffect } from 'react';
import {
  getIsTokenExpired,
  resetContactsState,
  setIsTokenExpired,
} from 'redux/contacts';
import Routes from 'routes';

const App = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isTokenExpired = useSelector(getIsTokenExpired);
  const token = useSelector(getToken);
  const dispatch = useDispatch();

  useEffect(() => {
    api.setToken(token);
  }, [token]);

  useEffect(() => {
    if (isTokenExpired) {
      dispatch(setIsTokenExpired(false));
      dispatch(resetAuthState());
    }
  }, [dispatch, isTokenExpired]);

  useEffect(() => {
    if (!isLoggedIn) {
      dispatch(resetContactsState());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <div className={s.app}>
      <header className={s.header}>
        <Wrapper type={'transparent'}>
          <Header />
        </Wrapper>
      </header>
      <main className={s.main}>
        <Routes isLoggedIn={isLoggedIn} />
      </main>
    </div>
  );
};

export default App;
