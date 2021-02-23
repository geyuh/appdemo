import axios from 'axios';
import _ from 'lodash';
import qs from 'qs';
import api from '../apiConfig';

const {api: baseURL} = api;
// const baseURL = 'https://api.apiopen.top';
console.log(baseURL);
const ax = axios.create({baseURL});

function fetch(_method = 'GET', url, _params = {}, _extendOption = {}) {
  console.log(baseURL, url, _method, _params);
  const method = _.toUpper(_method);
  let params = {};
  // method.match(/GET/)  //match比對完的結果會回傳一個OBJ，而屬性input則為method的值，故 字串.match(正規表示).input 可用於switch-case裡面
  switch (method) {
    case (method.match(/POST|PUT|PATCH/) || {}).input:
      params.data = _params;
      break;
    case (method.match(/GET/) || {}).input:
      params.params = _params;
      break;
    default:
      params = {};
      break;
  }
  return ax
    .request({
      url,
      method,
      paramsSerializer: (params) => {
        //預防瀏覽器不支援做轉換
        return qs.stringify(params, {encodeValuesOnly: true});
      },
      ...params,
      ..._extendOption,
      // withCredentials: true,
    })
    .then((response) => response.data);
}

export default fetch;
