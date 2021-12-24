import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';

const Spinner = ({ color = '#888' }) => {
  return (
    <Loader type="Oval" color={color} height={18} width={18} timeout={0} />
  );
};

Spinner.propTypes = {
  color: PropTypes.string,
};

export default Spinner;
