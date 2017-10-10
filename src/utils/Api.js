// jshint esversion: 6

var baseRequest = {
  getItems(url) {
    return fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8;'
      }
    }).then((response) => {
      return response.json();
    }).catch((error) => {
      console.error(error);
    });
  }
};

module.exports = baseRequest;
