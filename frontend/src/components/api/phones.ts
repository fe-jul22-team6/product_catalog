import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

export function getAll() {
  return axios.get('/phones').then((res) => res.data);
}
