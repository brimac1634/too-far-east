import { combineReducers } from 'redux';

import navReducer from './nav/nav.reducer';
import menuReducer from './menu/menu.reducer';
import userReducer from './user/user.reducer';
import updatesReducer from './updates/updates.reducer';
import loadingReducer from './loading/loading.reducer';
import alertReducer from './alert/alert.reducer';

const rootReducer = combineReducers({
	nav: navReducer,
	menu: menuReducer,
	user: userReducer,
	updates: updatesReducer,
	loading: loadingReducer,
	alert: alertReducer
})

export default rootReducer;