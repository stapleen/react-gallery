import { SUCCESS_REQUEST_USERS, FAILED_REQUEST_USERS } from '../constants/ActionTypes';
import { put } from 'redux-saga/effects';
import config from '../config';
import { get } from '../api/Api';

export function* getUsers() {
  try {
    const response = yield get(`${config.url}/users`);
    yield put({ type: SUCCESS_REQUEST_USERS, users: response.data });
  } catch (e) {
    yield put({type: FAILED_REQUEST_USERS, error: "Ошибка"});
  }
}
