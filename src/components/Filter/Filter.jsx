import s from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter, setFilter } from 'redux/contacts';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div className={s.filter}>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        onChange={e => dispatch(setFilter(e.target.value))}
        value={filter}
      />
    </div>
  );
};

export default Filter;
