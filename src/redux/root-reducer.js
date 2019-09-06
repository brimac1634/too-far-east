import { combineReducers } from 'redux';

import navReducer from './nav/nav.reducer';
import menuReducer from './menu/menu.reducer';

const rootReducer = combineReducers({
	nav: navReducer,
	menu: menuReducer
})

export default rootReducer;