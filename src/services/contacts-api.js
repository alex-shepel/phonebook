import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const signup = async credentials =>
  (await axios.post('/users/signup', credentials)).data;

const login = async credentials =>
  (await axios.post('/users/login', credentials)).data;

const setToken = token =>
  (axios.defaults.headers.common.Authorization = `Bearer ${token}`);

// const getContacts = async () =>
//   await axios({
//     method: 'get',
//   });
//
// const addContact = async contact =>
//   await axios({
//     method: 'post',
//     data: contact,
//   });
//
// const delContact = async id =>
//   await axios({
//     method: 'delete',
//     url: id,
//   });
//
// export { getContacts, addContact, delContact };
export { signup, login, setToken };
