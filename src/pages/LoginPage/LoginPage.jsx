import { useDispatch, useSelector } from 'react-redux';
import { getIsAuthing, getLoginError, login } from 'redux/auth';
import BootstrapForm from 'components/BootstrapForm';
import Wrapper from 'components/Wrapper';
import { Link } from 'react-router-dom';
import s from './LoginPage.module.css';

const LoginPage = () => {
  const isAuthing = useSelector(getIsAuthing);
  const loginError = useSelector(getLoginError);
  const dispatch = useDispatch();

  return (
    <>
      {loginError && (
        <Wrapper type={'error'}>
          <p>{loginError}</p>
        </Wrapper>
      )}
      <Wrapper>
        <BootstrapForm
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
      </Wrapper>
      <Wrapper>
        <div className={s.hint}>
          <span>New to Phonebook?</span>
          <Link to={'/register'}>Create an account.</Link>
        </div>
      </Wrapper>
    </>
  );
};

export default LoginPage;
