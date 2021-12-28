import { useDispatch, useSelector } from 'react-redux';
import { getIsAuthing, getRegisterError, register } from 'redux/auth';
import Wrapper from 'components/Wrapper';
import Form from 'components/Form';
import { Link } from 'react-router-dom';
import s from './RegisterPage.module.css';

const RegisterPage = () => {
  const registerError = useSelector(getRegisterError);
  const isAuthing = useSelector(getIsAuthing);
  const dispatch = useDispatch();

  return (
    <>
      {registerError && (
        <Wrapper type={'error'} content={<p>{registerError}</p>} />
      )}
      <Wrapper
        content={
          <Form
            inputs={[
              {
                label: 'Name',
                type: 'text',
                name: 'name',
              },
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
            buttonLabel={'Register'}
            onSubmit={formData => dispatch(register(formData))}
            isSubmitting={isAuthing}
          />
        }
      />
      <Wrapper
        content={
          <div className={s.hint}>
            <span>Already have an account?</span>
            <Link to={'/login'}>Login.</Link>
          </div>
        }
      />
    </>
  );
};

export default RegisterPage;
