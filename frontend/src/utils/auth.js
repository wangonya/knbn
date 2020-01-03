import React from 'react';

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

export default auth;
