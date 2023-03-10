import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';


const CourseRegister = Loadable(lazy(() => import('pages/course/course-register/CourseRegister')));
const CourseCheck = Loadable(lazy(() => import('pages/course/course-check/CourseCheck')));
const Profile = Loadable(lazy(() => import('pages/profile/Profile')));
const TeamManagement = Loadable(lazy(() => import('pages/admin/team/TeamManagement')));

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
            path: '/',
            element: <CourseRegister />
        },
        {
            path: '/course-register',
            element: <CourseRegister />
        },
        {
            path: '/course-check',
            element: <CourseCheck />
        },
        {
            path: '/profile',
            element: <Profile />
        },
        {
            path: '/admin/team',
            element: <TeamManagement />
        },
    ]
};

export default MainRoutes;
