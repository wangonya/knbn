import { post } from '.';

const auth = {
  isAuthenticated: false,
  authenticate() {
    if (localStorage.getItem('token')) {
      this.isAuthenticated = true;
    }
  },
  signout() {
    this.isAuthenticated = false;
  },
};

const submitAuthDetails = (authDetails, endpoint) => {
  post(`users/${endpoint}`, authDetails);
};

export { auth, submitAuthDetails };
