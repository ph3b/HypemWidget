import axios from 'axios';

var api = {
  getFavorites(username, _pageNumber){
    var pageNumber = _pageNumber || 1;
     return axios.get(`https://api.hypem.com/v2/users/${username}/favorites?page=${pageNumber}&key=swagger`)
     .then((response) => (response.data));
  },
  getHistory(username, _pageNumber){
    var pageNumber = _pageNumber || 1;
    return axios.get(`https://api.hypem.com/v2/users/${username}/history?key=swagger`)
      .then((response) => (response.data));
  }
};

export default api;
