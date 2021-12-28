import PropTypes from 'prop-types';
import s from './Form.module.css';
import Spinner from 'components/Spinner';
import useFormState from 'hooks/useFormState';

const Form = ({ inputs, buttonLabel, onSubmit, isSubmitting }) => {
  const [formState, setFormState, clearFormState] = useFormState(
    inputs.map(input => input.name),
  );

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(formState);
    clearFormState(
      inputs
        .filter(input => input.type === 'password')
        .map(input => input.name),
    );
  };

  const createInput = config => (
    <label className={s.field} key={config.name}>
      {config.label}
      <input
        type={config.type}
        name={config.name}
        value={formState[config.name]}
        onChange={e => setFormState(config.name, e.target.value)}
        required
      />
    </label>
  );

  const createButton = () => (
    <div className={s.buttonContainer}>
      <button type="submit" className={s.button}>
        {buttonLabel}
      </button>
      {isSubmitting && <Spinner />}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      {inputs.map(createInput)}
      {createButton()}
    </form>
  );
};

Form.propTypes = {
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['text', 'email', 'password']).isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  buttonLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
};

export default Form;
