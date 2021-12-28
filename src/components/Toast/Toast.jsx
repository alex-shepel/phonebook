import { toast, ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { clearError, getError } from 'redux/auth';

const CONFIG = {
  position: 'top-center',
  autoClose: 2000,
  hideProgressBar: false,
  pauseOnHover: false,
  closeOnClick: true,
  draggable: true,
};

const Toast = () => {
  const error = useSelector(getError);
  const dispatch = useDispatch();

  if (error) {
    toast.error(error, CONFIG);
  }

  return <ToastContainer onOpen={() => dispatch(clearError)} />;
};

export default Toast;
