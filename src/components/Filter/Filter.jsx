import s from './Filter.module.css';
import { GoSearch } from 'react-icons/go';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter, setFilter } from 'redux/contacts';
import Form from 'react-bootstrap/Form';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div className={s.filter}>
      <span className={s.icon}>
        <GoSearch />
      </span>
      <Form.Control
        as={'input'}
        type={'text'}
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
        required
      />
    </div>
  );
};

export default Filter;
