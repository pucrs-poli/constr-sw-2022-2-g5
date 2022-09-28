
import axios from 'axios';

const getUrl = (url) => (url ? `/${url.toString().replace(/^\/|\/$/g, '')}` : null);

const getData = (promise) => {
  return promise.then((response) => response?.data).catch((error) => Promise.reject(error));
};

export default class Axios {
  constructor() {
    axios.post('http://localhost:8080/auth/realms/constr-sw-2022-2/protocol/openid-connect/token', 
    {
        
    },
    );
  }

  get(url, config) {
    return getData(this.client.get(getUrl(url), config));
  }

  post(url, data, config) {
    return this.client.post(getUrl(url), data, config);
  }

  put(url, data, config) {
    return this.client.put(getUrl(url), data, config);
  }

  patch(url, data, config) {
    return this.client.patch(getUrl(url), data, config);
  }

  delete(url, config) {
    return this.client.delete(getUrl(url), config);
  }
}