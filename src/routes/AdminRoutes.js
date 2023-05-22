import React from 'react';

import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
const BookManagement = Loadable(lazy(() => import('pages/admin/book-admin/book/BookManagement')));
const BookRegistration = Loadable(lazy(() => import('pages/admin/book-admin/book/BookRegistration')));
const CategoryManagement = Loadable(lazy(() => import('pages/admin/book-admin/category/CategoryManagement')));

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
				},
				{
					path: 'category',
					element: <CategoryManagement />
				}
			]
		}
	]
};

export default AdminRoutes;
