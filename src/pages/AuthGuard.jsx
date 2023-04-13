import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { initialize } from 'utils/authHandler';
import { getLoginInfo } from '../utils/authHandler';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const AuthGuard = ({ children }) => {
	const { pathname } = useLocation();
	const isAuthPage = pathname.includes('auth');
	const loginInfo = getLoginInfo();

	useEffect(() => {
		initialize();
	}, []);

	// 비로그인 상태일 때
	if (!isAuthPage && !loginInfo) {
		return <Navigate to={'/auth/login'} replace />;
	}
	return children;
};

export default AuthGuard;

AuthGuard.prototype = {
	children: PropTypes.node.isRequired
};
