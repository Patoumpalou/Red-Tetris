import Axios from 'axios';

export default function oAuthUserAPI(provider, clientCode) {
  return Axios({
    method: 'post',
    url: 'http://localhost:3000/oAuth/register',
    data: {
      provider,
      clientCode,
    },
    timeout: TIMEOUT_API,
  });
}
