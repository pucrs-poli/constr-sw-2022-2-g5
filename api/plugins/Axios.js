
const axios = require('axios').default;

let token = '';

class Axios {
  
  constructor() {
    this.getToken();
  }

  getToken(){
    axios.post('http://localhost:8080/auth/realms/constr-sw-2022-2/protocol/openid-connect/token', 
    {
        'client_id': 'grupo5',
        'client-secret': 'tRBObzymISf3klattAGr55x9AWtn6eC8',
        'username': 'teste@gmail.com',
        'passwordd': 'admin',
        'grant_type': 'password'
    },
    ).then((res)=>
        {
            console.log(res),
            token = res;
        });
  }
 
  get(url) {
    return axios.get(url, {'Authorization': 'Bearer '+ token});
  }

  post(url, data) {
    return axios.post(url, data, {'Authorization': 'Bearer '+ token});
  }

  put(url, data) {
    return axios.put(url, data, {'Authorization': 'Bearer '+ token});
  }

  patch(url, data) {
    return axios.patch(url, data, {'Authorization': 'Bearer '+ token});
  }

  delete(url) {
    return axios.post(url, {'Authorization': 'Bearer '+ token});
  }
}

module.exports = Axios;

