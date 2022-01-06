import PropTypes from 'prop-types';
import s from './Wrapper.module.css';

const Type = {
  NORMAL: 'normal',
  ERROR: 'error',
  TRANSPARENT: 'transparent',
};

const Wrapper = ({ children, type = Type.NORMAL }) => {
  let backgroundColor = null;

  switch (type) {
    case Type.NORMAL:
      backgroundColor = '#fff';
      break;
    case Type.ERROR:
      backgroundColor = '#ffebe9';
      break;
    case Type.TRANSPARENT:
      backgroundColor = 'transparent';
      break;
    default:
      backgroundColor = '#fff';
      break;
  }

  return (
    <div style={{ backgroundColor }} className={s.wrapper}>
      {children}
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.object.isRequired,
  type: PropTypes.oneOf(Object.values(Type)),
};

export default Wrapper;
