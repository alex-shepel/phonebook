import axios from 'axios';

axios.defaults.baseURL =
  'https://61c2f7c99cfb8f0017a3e80d.mockapi.io/contacts/';

const getContacts = async () => {
  return await axios({
    method: 'get',
  });
};

const addContact = async contact => {
  return await axios({
    method: 'post',
    data: contact,
  });
};

const delContact = async id => {
  return await axios({
    method: 'delete',
    url: id,
  });
};

export { getContacts, addContact, delContact };
