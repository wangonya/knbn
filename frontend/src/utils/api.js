import axios from 'axios';

import { loadingAlert, successAlert, errorAlert } from './alerts';

const SERVER_DOMAIN = process.env.REACT_APP_API_ROOT;

const getHeaders = () => ({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to add loading indicator on each request
axios.interceptors.request.use((config) => {
  loadingAlert('Loading...');
  return config;
}, (error) => Promise.reject(error));

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

export const post = (path, data) => {
  axios.post(`${SERVER_DOMAIN}/${path}/`, data, getHeaders())
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      errorAlert(
        error.response.data.error
        || Object.values(error.response.data)[0]
        || 'Something went wrong. Please try again later.',
      );
    });
};

export const del = (path) => new Promise((resolve, reject) => {
  axios.delete(`${SERVER_DOMAIN}/${path}/`, getHeaders())
    .then((response) => { resolve(response); })
    .catch((error) => { reject(console.log(error)); });
});
