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
import { ADMIN_TYPE } from 'utils/constant';
import LocalLibraryRoundedIcon from '@mui/icons-material/LocalLibraryRounded';

// icons
const icons = {
	FontSizeOutlined,
	BgColorsOutlined,
	BarcodeOutlined,
	AntDesignOutlined,
	LoadingOutlined,
	AppstoreAddOutlined,
	ScheduleOutlined,
	EyeOutlined,
	LocalLibraryRoundedIcon
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const admin = {
	id: 'admin-menu',
	title: '관리자',
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
			id: 'book-admin',
			title: '도서 관리자',
			authority: ADMIN_TYPE,
			type: 'collapse',
			icon: icons.LocalLibraryRoundedIcon,
			children: [
				{
					id: 'book',
					title: '도서 관리',
					type: 'item',
					url: '/book-admin/book'
				},
				{
					id: 'category',
					title: '카테고리 관리',
					type: 'item',
					url: '/book-admin/category'
				}
			]
		}
	]
};

export default admin;
