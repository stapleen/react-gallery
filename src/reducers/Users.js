import { REQUEST_USERS, SUCCESS_REQUEST_USERS, FAILED_REQUEST_USERS } from '../constants/ActionTypes';
    
const initialState = [
  {
    isLoading: false,
    users: null,
    error: null
  }
];

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_USERS:
      return  { ...state, isLoading: true, users: null, error: null };
    case SUCCESS_REQUEST_USERS:
      return  { ...state, isLoading: false, users: action.users, erorr: null };
    case FAILED_REQUEST_USERS:
      return  { ...state, isLoading: false, users: null, error: action.error };
    default:
      return state;
  }
};