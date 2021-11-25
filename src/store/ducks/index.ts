import { combineReducers } from 'redux';

import grocery from './grocery';
import user from './user';

export default combineReducers({ user, grocery });
