import { 
  SUCCESS_REQUEST_PHOTOS,
  FAILED_REQUEST_PHOTOS,
  SUCCESS_REQUEST_ALBUMS_BY_ID,
  FAILED_REQUEST_ALBUMS_BY_ID
} from '../constants/ActionTypes';
import { put } from 'redux-saga/effects';
import config from '../config';
import { get } from '../api/Api';

export function* getPhotos() {
  try {
    const response = yield get(`${config.url}/photos`);
    yield put({ type: SUCCESS_REQUEST_PHOTOS, photos: response.data });
  } catch (e) {
    yield put({type: FAILED_REQUEST_PHOTOS, error: "Ошибка"});
  }
}

export function* getAlbumsById(action) {
  try {
    const { id } = action;
    const response = yield get(`${config.url}/albums?userId=${id}`);
    yield put({ type: SUCCESS_REQUEST_ALBUMS_BY_ID, albums: response.data });
  } catch (e) {
    yield put({type: FAILED_REQUEST_ALBUMS_BY_ID, error: "Ошибка"});
  }
}