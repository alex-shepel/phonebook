import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import s from './ContactsPage.module.css';
import Wrapper from 'components/Wrapper';
import Form from 'components/Form';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, getIsAdding, getItems, setFilter } from 'redux/contacts';
import { useState } from 'react';

const ContactsPage = () => {
  const [duplicateError, setDuplicateError] = useState(null);
  const isAdding = useSelector(getIsAdding);
  const items = useSelector(getItems);
  const dispatch = useDispatch();

  const handleSubmit = formData => {
    const duplicate = items.find(
      item =>
        item.name.toLowerCase() === formData.name.toLowerCase() ||
        item.number === formData.number,
    );

    if (duplicate) {
      setDuplicateError(duplicate);
      return;
    }

    setDuplicateError(null);
    dispatch(addItem(formData));
  };

  return (
    <>
      {duplicateError && (
        <Wrapper
          type={'error'}
          content={
            <p>
              Contact already exists.
              <button
                className={s.duplicate}
                type={'button'}
                onClick={() => dispatch(setFilter(duplicateError.name))}
              >
                {duplicateError.name}
              </button>
            </p>
          }
        />
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
                label: 'Number',
                type: 'phone',
                name: 'number',
              },
            ]}
            clearInputs={['name', 'number']}
            buttonLabel={'Add contact'}
            onSubmit={handleSubmit}
            isSubmitting={isAdding}
          />
        }
      />
      {items.length > 1 && <Wrapper content={<Filter />} />}
      <Wrapper content={<ContactList />} />
    </>
  );
};

export default ContactsPage;
