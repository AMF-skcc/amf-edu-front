import React from 'react';

import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
const BookManagement = Loadable(lazy(() => import('pages/admin/book/BookManagement')));
const BookRegistration = Loadable(lazy(() => import('pages/admin/book/BookRegistration')));

// ==============================|| MAIN ROUTING ||============================== //

const AdminRoutes = {
	path: '/',
	element: <MainLayout />,
	children: [
		{
			path: 'book-admin',
			children: [
				{
					path: 'book',
					element: <BookManagement />
				},
				{
					path: 'book/registration',
					element: <BookRegistration />
				}
			]
		}
	]
};

export default AdminRoutes;
