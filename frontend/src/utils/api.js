import axios from 'axios';

const SERVER_DOMAIN = process.env.REACT_APP_API_ROOT;

const getHeaders = () => ({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const get = (path) => new Promise((resolve, reject) => {
  axios.get(`${SERVER_DOMAIN}/${path}/`, getHeaders())
    .then((response) => { resolve(response); })
    .catch((error) => { reject(console.log(error)); });
});

export const patch = (path, data) => new Promise((resolve, reject) => {
  axios.patch(`${SERVER_DOMAIN}/${path}/`, data, getHeaders())
    .then((response) => { resolve(response); })
    .catch((error) => { reject(console.log(error)); });
});

export const post = (path, data) => new Promise((resolve, reject) => {
  axios.post(`${SERVER_DOMAIN}/${path}/`, data, getHeaders())
    .then((response) => { resolve(response); })
    .catch((error) => { reject(console.log(error)); });
});

export const del = (path) => new Promise((resolve, reject) => {
  axios.delete(`${SERVER_DOMAIN}/${path}/`, getHeaders())
    .then((response) => { resolve(response); })
    .catch((error) => { reject(console.log(error)); });
});
