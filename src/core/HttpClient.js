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
    baseURL: 'http://192.168.15.12:3000',
  }),
);
