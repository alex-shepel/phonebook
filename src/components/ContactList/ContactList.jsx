import s from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  fetchItems,
  deleteItem,
  getIsLoading,
  getFilteredItems,
  getDeletingIds,
} from 'redux/contacts';
import Spinner from 'components/Spinner';

const ContactList = () => {
  const items = useSelector(getFilteredItems);
  const isLoading = useSelector(getIsLoading);
  const deletingIds = useSelector(getDeletingIds);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const createDeleteButton = id => (
    <>
      {deletingIds.some(delId => delId === id) ? (
        <Spinner />
      ) : (
        <button
          className={s.button}
          type="button"
          onClick={() => dispatch(deleteItem(id))}
        >
          Delete
        </button>
      )}
    </>
  );

  const createList = () =>
    items.length === 0 ? (
      <p>There are no contacts yet...</p>
    ) : (
      <ul className={s.list}>
        {items.map(({ id, name, number }) => (
          <li className={s.item} key={id}>
            <p className={s.entry}>
              <span>{name}</span>
              <span className={s.number}>{number}</span>
            </p>
            {createDeleteButton(id)}
          </li>
        ))}
      </ul>
    );

  return <>{isLoading ? <Spinner color={'#444'} /> : createList()}</>;
};

export default ContactList;
