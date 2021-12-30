import s from './Filter.module.css';
import { GoSearch } from 'react-icons/go';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter, setFilter } from 'redux/contacts';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div className={s.filter}>
      <span className={s.icon}>
        <GoSearch />
      </span>
      <input
        className={s.input}
        type="text"
        name="filter"
        onChange={e => dispatch(setFilter(e.target.value))}
        value={filter}
      />
    </div>
  );
};

export default Filter;
