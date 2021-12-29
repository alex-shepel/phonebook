import { Link } from 'react-router-dom';
import { logout } from 'redux/auth';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/selectors';

const Header = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Phonebook</h1>
      {isLoggedIn && (
        <Link to={'/login'} onClick={() => dispatch(logout)}>
          Logout
        </Link>
      )}
    </div>
  );
};

export default Header;
