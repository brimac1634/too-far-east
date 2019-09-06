import MenuActionTypes from './menu.types';

export const toggleMenu = showMenu => ({
	type: MenuActionTypes.TOGGLE_MENU,
	payload: showMenu
})