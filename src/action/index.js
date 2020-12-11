import * as types from '../constants/ActionTypes';

export const getPhotosById = (id) => ({ type: types.REQUEST_PHOTOS_BY_ID, id });

export const getUsers = () => ({ type: types.REQUEST_USERS });

export const getPhotos = () => ({ type: types.REQUEST_PHOTOS });
export const getAlbumsById = (id) => ({ type: types.REQUEST_ALBUMS_BY_ID, id });