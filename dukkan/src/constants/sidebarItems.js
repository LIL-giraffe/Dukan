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
		icon: <HomeIcon />
	},
	{
		key: 'orders',
		label: 'Orders',
		path: '/orders',
		icon: <BookmarkBorderIcon/>
	},
	{
		key: 'products',
		label: 'Products',
		path: '/products',
		icon: <BorderAllIcon/>
	},
	{
		key: 'delivery',
		label: 'Delivery',
		path: '/delivery',
		icon: <LocalShippingIcon/>
	},
	{
		key: 'marketing',
		label: 'Marketing',
		path: '/marketing',
		icon: <CampaignIcon/>
	},
	{
		key: 'analytics',
		label: 'Analytics',
		path: '/analytics',
		icon: <SignalCellularAltIcon/>
	},
    {
		key: 'payments',
		label: 'Payments',
		path: '/payments',
		icon: <PaymentsIcon/>
	},
	{
		key: 'tools',
		label: 'Tools',
		path: '/tools',
		icon: <NearMeIcon />
	},
	{
		key: 'discounts',
		label: 'Discounts',
		path: '/discounts',
		icon: <DiscountIcon/>
	},
	{
		key: 'audience',
		label: 'Audience',
		path: '/audience',
		icon: <PeopleIcon/>
	},
	{
		key: 'appearance',
		label: 'Appearance',
		path: '/appearance',
		icon: <PaletteIcon/>
	},
	{
		key: 'plugins',
		label: 'Plugins',
		path: '/plugins',
		icon: <BoltIcon/>
	}
]
