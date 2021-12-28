import PropTypes from 'prop-types';
import s from './Wrapper.module.css';

const Wrapper = ({ content }) => {
  return <div className={s.wrapper}>{content}</div>;
};

Wrapper.propTypes = {
  content: PropTypes.object.isRequired,
};

export default Wrapper;
