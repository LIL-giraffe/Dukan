import HomeIcon from '@mui/icons-material/Home';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CampaignIcon from '@mui/icons-material/Campaign';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import PaymentsIcon from '@mui/icons-material/Payments';
import NearMeIcon from '@mui/icons-material/NearMe';
import DiscountIcon from '@mui/icons-material/Discount';
import PeopleIcon from '@mui/icons-material/People';
import PaletteIcon from '@mui/icons-material/Palette';
import BoltIcon from '@mui/icons-material/Bolt';

export const SIDEBAR_ITEMS = [
	{
		key: 'home',
		label: 'Home',
		path: '/',
		icon: <HomeIcon fontSize='small' />
	},
	{
		key: 'orders',
		label: 'Orders',
		path: '/orders',
		icon: <BookmarkBorderIcon fontSize='small'/>
	},
	{
		key: 'products',
		label: 'Products',
		path: '/products',
		icon: <BorderAllIcon fontSize='small'/>
	},
	{
		key: 'delivery',
		label: 'Delivery',
		path: '/delivery',
		icon: <LocalShippingIcon fontSize='small'/>
	},
	{
		key: 'marketing',
		label: 'Marketing',
		path: '/marketing',
		icon: <CampaignIcon fontSize='small'/>
	},
	{
		key: 'analytics',
		label: 'Analytics',
		path: '/analytics',
		icon: <SignalCellularAltIcon fontSize='small'/>
	},
    {
		key: 'payments',
		label: 'Payments',
		path: '/payments',
		icon: <PaymentsIcon fontSize='small'/>
	},
	{
		key: 'tools',
		label: 'Tools',
		path: '/tools',
		icon: <NearMeIcon fontSize='small' />
	},
	{
		key: 'discounts',
		label: 'Discounts',
		path: '/discounts',
		icon: <DiscountIcon fontSize='small'/>
	},
	{
		key: 'audience',
		label: 'Audience',
		path: '/audience',
		icon: <PeopleIcon fontSize='small'/>
	},
	{
		key: 'appearance',
		label: 'Appearance',
		path: '/appearance',
		icon: <PaletteIcon fontSize='small'/>
	},
	{
		key: 'plugins',
		label: 'Plugins',
		path: '/plugins',
		icon: <BoltIcon fontSize='small'/>
	}
]
