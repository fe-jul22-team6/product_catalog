import axios from 'axios';

axios.defaults.baseURL = 'https://product-catalog-8d6r.onrender.com/';

export function getAll() {
  return axios.get('/phones').then((res) => res.data);
}

export function getNew() {
  return axios.get('/phones/new').then((res) => res.data);
}

export function getDiscound() {
  return axios.get('/phones/discount').then((res) => res.data);
}
