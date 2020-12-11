import { SUCCESS_REQUEST_PHOTOS_BY_ID, FAILED_REQUEST_PHOTOS_BY_ID } from '../constants/ActionTypes';
import { put } from 'redux-saga/effects';
import config from '../config';
import { get } from '../api/Api';

export function* getPhotosById(action) {
  try {
    const { id } = action;
    const response = yield get(`${config.url}/photos?albumId=${id}`);
    yield put({ type: SUCCESS_REQUEST_PHOTOS_BY_ID, photos: response.data });
  } catch (e) {
    yield put({type: FAILED_REQUEST_PHOTOS_BY_ID, error: "Ошибка"});
  }
}
