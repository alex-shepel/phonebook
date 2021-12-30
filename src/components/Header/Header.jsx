import { useDispatch, useSelector } from 'react-redux';
import { logout, getIsLoggedIn, getUsername, getIsAuthing } from 'redux/auth';
import s from './Header.module.css';
import Spinner from '../Spinner';

const Header = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isAuthing = useSelector(getIsAuthing);
  const name = useSelector(getUsername);
  const dispatch = useDispatch();

  return (
    <div className={s.header}>
      <h1>Phonebook</h1>
      {isLoggedIn && (
        <div className={s.user}>
          <span>{name}</span>
          <div className={s.logoutContainer}>
            {isAuthing && <Spinner />}
            <button
              disabled={isAuthing}
              className={s.logoutButton}
              type={'button'}
              onClick={() => dispatch(logout())}
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
