import localStorageHandler from './localStorageHandler';
import { LOGIN } from './constant';

export const initialize = () => {
	const loginInfo = localStorageHandler.getItem(LOGIN);
	if (!loginInfo) return logout();
};
export const login = (values) => {
	localStorageHandler.setItem(LOGIN, values);
};

export const logout = () => {
	localStorageHandler.removeItem(LOGIN);
	if (!location.hash) {
		location.hash = '#reload';
		const { href } = location;
		location.href = href;
	}
};

export const getLoginInfo = () => {
	return localStorageHandler.getItem(LOGIN);
};
