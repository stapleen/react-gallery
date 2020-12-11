import { takeEvery } from 'redux-saga/effects';
import { 
  REQUEST_PHOTOS_BY_ID, 
  REQUEST_USERS,
  REQUEST_PHOTOS,
  REQUEST_ALBUMS_BY_ID
} from '../constants/ActionTypes';
import { getPhotosById } from './Gallery';
import { getUsers } from './Users';
import { getPhotos, getAlbumsById } from './Albums';

export default function* rootSaga() {
  yield takeEvery(REQUEST_PHOTOS_BY_ID, getPhotosById);
  yield takeEvery(REQUEST_USERS, getUsers);
  yield takeEvery(REQUEST_PHOTOS, getPhotos);
  yield takeEvery(REQUEST_ALBUMS_BY_ID, getAlbumsById);
};