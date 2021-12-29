import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import s from './ContactsPage.module.css';
import Wrapper from 'components/Wrapper';
import Form from 'components/Form';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, getIsAdding } from 'redux/contacts';

const ContactsPage = () => {
  const isAdding = useSelector(getIsAdding);
  const dispatch = useDispatch();

  return (
    <>
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
                type: 'number',
                name: 'number',
              },
            ]}
            buttonLabel={'Add contact'}
            onSubmit={formData => dispatch(addItem(formData))}
            isSubmitting={isAdding}
          />
        }
      />
      <Wrapper content={<Filter />} />
      <Wrapper content={<ContactList />} />
    </>
  );
};

export default ContactsPage;
