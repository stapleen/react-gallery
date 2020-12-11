import { 
  REQUEST_PHOTOS,
  SUCCESS_REQUEST_PHOTOS,
  FAILED_REQUEST_PHOTOS,
  REQUEST_ALBUMS_BY_ID,
  SUCCESS_REQUEST_ALBUMS_BY_ID,
  FAILED_REQUEST_ALBUMS_BY_ID
} from '../constants/ActionTypes';
    
const initialState = [
  {
    isLoading: false,
    photoData: null,
    albums: null,
    error: null
  }
];

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_PHOTOS:
      return  { ...state, isLoading: true, error: null, photoData: null };
    case SUCCESS_REQUEST_PHOTOS:
      const { photos } = action;
      const photoData = photos.reduce((accumulator, currentValue) => {
        if (!accumulator[currentValue.albumId]) {
          accumulator[currentValue.albumId] = [currentValue];
        } else {
          accumulator[currentValue.albumId].push(currentValue);
        }
        return accumulator;
      }, {});
      return  { ...state, isLoading: false, erorr: null, photoData };
    case FAILED_REQUEST_PHOTOS:
      return  { ...state, isLoading: false, error: action.error, photoData: null };
    case REQUEST_ALBUMS_BY_ID:
      return  { ...state, isLoading: true, error: null, albums: null };
    case SUCCESS_REQUEST_ALBUMS_BY_ID:
      return  { ...state, isLoading: false, error: null, albums: action.albums };
    case FAILED_REQUEST_ALBUMS_BY_ID:
      return  { ...state, isLoading: false, error: action.error, albums: null };
    default:
      return state;
  }
};