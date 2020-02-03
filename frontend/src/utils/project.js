import axios from 'axios';
import { errorAlert, successAlert, decodeToken } from '.';

const SERVER_DOMAIN = process.env.REACT_APP_API_ROOT;

const submitProjectDetails = (projectDetails) => {
  const user = decodeToken();
  projectDetails.owner = user.user_id;
  axios.post(`${SERVER_DOMAIN}/projects/`, projectDetails)
    .then((response) => {
      successAlert(
        `Project '${projectDetails.title}' created.`,
      );
    })
    .catch((error) => {
      errorAlert(
        error.response.data.error
        || Object.values(error.response.data)[0]
        || 'Something went wrong. Please try again later.',
      );
    });
};

export { submitProjectDetails };
