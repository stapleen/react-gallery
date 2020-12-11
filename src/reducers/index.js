import { combineReducers } from 'redux';
import Gallery from './Gallery';
import Users from './Users';
import Albums from './Albums';

export default combineReducers({
  Gallery,
  Users,
  Albums
})