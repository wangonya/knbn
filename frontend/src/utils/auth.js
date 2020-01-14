import axios from 'axios';
import { errorAlert, successAlert } from '.';

const SERVER_DOMAIN = process.env.REACT_APP_API_ROOT;

const submitAuthDetails = (authDetails, endpoint) => {
  axios.post(`${SERVER_DOMAIN}/users/${endpoint}/`, authDetails)
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        window.location = '/';
      } else {
        successAlert(
          `User ${authDetails.username} created.
          You can now log in with your credentials.`,
        );
      }
    })
    .catch((error) => {
      errorAlert(
        error.response.data.error
        || Object.values(error.response.data)[0]
        || 'Something went wrong. Please try again later.',
      );
    });
};

export { submitAuthDetails };
