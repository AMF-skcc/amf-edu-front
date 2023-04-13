import React from 'react';

import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
const Profile = Loadable(lazy(() => import('pages/profile/Profile')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
	path: '/',
	element: <MainLayout />,
	children: [
		// {
		//     path: '/',
		//     element: <DashboardDefault />
		// },
		// {
		//     path: 'dashboard',
		//     children: [
		//         {
		//             path: 'default',
		//             element: <DashboardDefault />
		//         }
		//     ]
		// },
		{
			path: '/profile',
			element: <Profile />
		}
	]
};

export default MainRoutes;
