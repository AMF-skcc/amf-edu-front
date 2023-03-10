// assets
import {
    AppstoreAddOutlined,
    AntDesignOutlined,
    BarcodeOutlined,
    BgColorsOutlined,
    FontSizeOutlined,
    LoadingOutlined,
    ScheduleOutlined,
    EyeOutlined
} from '@ant-design/icons';
import {ADMIN_TYPE} from "../utils/constant";

// icons
const icons = {
    FontSizeOutlined,
    BgColorsOutlined,
    BarcodeOutlined,
    AntDesignOutlined,
    LoadingOutlined,
    AppstoreAddOutlined,
    ScheduleOutlined,
    EyeOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
    id: 'course-menu',
    title: 'Course',
    type: 'group',
    children: [
        // {
        //     id: 'carpool-history',
        //     title: '내 카풀 내역',
        //     type: 'collapse',
        //     icon: icons.LoadingOutlined,
        //     children: [
        //         {
        //             id: 'now-carpool ',
        //             title: '진행중인 카풀',
        //             type: 'item',
        //             url: '/icons/ant',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'last-carpool ',
        //             title: '지난 카풀',
        //             type: 'item',
        //             url: '/party-matching',
        //             breadcrumbs: false
        //         }
        //     ]
        // },
        {
            id: 'course',
            title: '수강신청',
            type: 'collapse',
            icon: icons.ScheduleOutlined,
            children: [
                {
                    id: 'course-register',
                    title: '신청',
                    type: 'item',
                    url: '/course-register',
                    breadcrumbs: false
                },
                {
                    id: 'course-check',
                    title: '신청내역',
                    type: 'item',
                    url: '/course-check',
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'admin',
            title: '관리자 영역',
            authority: ADMIN_TYPE,
            type: 'collapse',
            icon: icons.EyeOutlined,
            children: [
                {
                    id: 'team',
                    title: '팀 관리',
                    type: 'item',
                    url: '/admin/team',
                    breadcrumbs: false
                },
                {
                    id: 'instructor',
                    title: '강사 관리',
                    type: 'item',
                    url: '/admin/instructor',
                    breadcrumbs: false
                },
                {
                    id: 'course',
                    title: '강의 관리',
                    type: 'item',
                    url: '/admin/course',
                    breadcrumbs: false
                },
            ]
        }
    ]
};

export default utilities;
