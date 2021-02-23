import {GET_userList, Login} from './../services/userList';

export default {
  namespace: 'userList',

  state: {
    userList: [123],
    data: '',
  },

  effects: {
    *GET_UserList({payload}, {call, put}) {
      const data = yield call(GET_userList);
      yield put({type: 'set_user_list', payload: data});
      //yield put({ type: 'set_user_list', payload: [456] });
    },
    *Login({payload}, {call, put}) {
      const data = yield call(Login, payload);
      console.log('返回的数据', data);
      yield put({type: 'login', payload: data});
    },
  },

  reducers: {
    set_user_list(state, {payload}) {
      return {...state, userList: payload};
    },
    login(state, {payload}) {
      return {...state, data: payload};
    },
  },
};
