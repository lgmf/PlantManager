import axios from 'axios';

class HttpClient {
  constructor(http) {
    this.http = http;
  }

  get(url, params) {
    return this.http.get(url, { params });
  }
}

export default new HttpClient(
  axios.create({
    baseURL: 'https://lgmf-plant-manager-server.herokuapp.com',
  }),
);
