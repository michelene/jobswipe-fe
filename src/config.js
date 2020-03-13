export const APIURL =
  window.location.hostname === 'localhost'
    ? // ? 'http://localhost:8000/api/v1'
      'https://jobswipe-be.herokuapp.com/api/v1'
    : 'https://jobswipe-be.herokuapp.com/api/v1';
