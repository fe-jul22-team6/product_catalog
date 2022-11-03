import axios from 'axios';

axios.defaults.baseURL = 'https://fast-shelf-97147.herokuapp.com/';

export function getAll() {
  return axios.get('/phones').then((res) => res.data);
}

// export function getNew() {
//   return axios.get('/phones/new').then((res) => res.data);
// }

// export function getDiscound() {
//   return axios.get('/phones/discount').then((res) => res.data);
// }
