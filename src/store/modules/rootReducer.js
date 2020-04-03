import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import bitcoin from './bitcoin/reducer';

export default combineReducers({
  auth,
  user,
  bitcoin,
});
