import { combineReducers } from 'redux';

import navReducer from './nav/nav.reducer';
import menuReducer from './menu/menu.reducer';
import userReducer from './user/user.reducer';

const rootReducer = combineReducers({
	nav: navReducer,
	menu: menuReducer,
	user: userReducer,
})

export default rootReducer;