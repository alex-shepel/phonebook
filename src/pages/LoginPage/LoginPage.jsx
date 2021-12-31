import { useDispatch, useSelector } from 'react-redux';
import { getIsAuthing, getLoginError, login } from 'redux/auth';
import Form from 'components/Form';
import Wrapper from 'components/Wrapper';
import { Link } from 'react-router-dom';
import s from './LoginPage.module.css';

const LoginPage = () => {
  const isAuthing = useSelector(getIsAuthing);
  const loginError = useSelector(getLoginError);
  const dispatch = useDispatch();

  return (
    <>
      {loginError && <Wrapper type={'error'} content={<p>{loginError}</p>} />}
      <Wrapper
        content={
          <Form
            inputs={[
              {
                label: 'Email',
                type: 'email',
                name: 'email',
              },
              {
                label: 'Password',
                type: 'password',
                name: 'password',
              },
            ]}
            clearInputs={['password']}
            buttonLabel={'Login'}
            onSubmit={formData => dispatch(login(formData))}
            isSubmitting={isAuthing}
          />
        }
      />
      <Wrapper
        content={
          <div className={s.hint}>
            <span>New to Phonebook?</span>
            <Link to={'/register'}>Create an account.</Link>
          </div>
        }
      />
    </>
  );
};

export default LoginPage;
