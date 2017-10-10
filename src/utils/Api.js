var api = {
  getListItems() {
    return fetch('https://kronosoft.herokuapp.com/api/v1/status/medical', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8;'
      }
    }).then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.error(error);
    });
  }
};

module.exports = api;
