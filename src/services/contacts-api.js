import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const signup = async credentials =>
  (await axios.post('/users/signup', credentials)).data;

const login = async credentials =>
  (await axios.post('/users/login', credentials)).data;

const logout = async () => (await axios.post('/users/logout')).data;

const getUser = async () => (await axios.post('/users/current')).data;

const setToken = token =>
  (axios.defaults.headers.common.Authorization = `Bearer ${token}`);

const getContacts = async () => (await axios.get('/contacts')).data;

const addContact = async credentials =>
  (await axios.post('/contacts', credentials)).data;

const updateContact = async (id, credentials) =>
  (await axios.patch(`/contacts/${id}`, credentials)).data;

const deleteContact = async id =>
  (await axios.delete(`/contacts/${id}`)).data.id;

export {
  signup,
  login,
  logout,
  getUser,
  setToken,
  getContacts,
  addContact,
  updateContact,
  deleteContact,
};
