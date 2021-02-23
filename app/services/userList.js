import fetch from './../utils/request';
// import Socket from './../utils/socket';

export function GET_userList(payload = {}, token = '') {
  return fetch('GET', '/users', payload, {
    headers: {
      // eslint-disable-next-line no-useless-escape
      Authorization: token.replace(/\"/g, ''),
    },
  });
}

export function Login(payload = {}, token = '') {
  return fetch('post', '/login', payload, {});
  //   return fetch('get', '/getJoke', payload, {});
  //   fetch('https://api.apiopen.top/getJoke?page=1&count=2&type=video')
  //     .then((res) => res.json())
  //     .then((resJson) => {
  //       console.log(resJson);
  //       return resJson;
  //     })
  //     .catch(() => {});
}
