import { 
  REQUEST_PHOTOS_BY_ID,
  SUCCESS_REQUEST_PHOTOS_BY_ID,
  FAILED_REQUEST_PHOTOS_BY_ID
} from '../constants/ActionTypes';
    
const initialState = [
  {
    isLoading: false,
    photos: null,
    error: null
  }
];

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_PHOTOS_BY_ID:
      return  { ...state, isLoading: true, error: null, photos: null };
    case SUCCESS_REQUEST_PHOTOS_BY_ID:
      return  { ...state, isLoading: false, error: null, photos: action.photos };
    case FAILED_REQUEST_PHOTOS_BY_ID:
      return  { ...state, isLoading: false, error: action.error, photos: null };
    default:
      return state;
  }
};