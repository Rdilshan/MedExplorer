// Soft UI Dashboard React layouts
import Dashboard from 'layouts/dashboard';
import Tables from 'layouts/tables';



import Profile from 'layouts/profile';
import SignIn from 'layouts/authentication/sign-in';
import SignUp from 'layouts/authentication/sign-up';

// Soft UI Dashboard React icons
import Shop from 'examples/Icons/Shop';
import Office from 'examples/Icons/Office';
import Settings from 'examples/Icons/Settings';
import Document from 'examples/Icons/Document';
import SpaceShip from 'examples/Icons/SpaceShip';
import CustomerSupport from 'examples/Icons/CustomerSupport';
import CreditCard from 'examples/Icons/CreditCard';
import Cube from 'examples/Icons/Cube';

const routes = [
	{
		type: 'collapse',
		name: 'Dashboard',
		key: 'dashboard',
		route: '/dashboard',
		icon: <Shop size="12px" />,
		component: <Dashboard />,
		noCollapse: true,
	},
	{
		type: 'collapse',
		name: 'Tables',
		key: 'tables',
		route: '/tables',
		icon: <Office size="12px" />,
		component: <Tables />,
		noCollapse: true,
	},
	
	
	
	{ type: 'title', title: 'Account Pages', key: 'account-pages' },
	{
		type: 'collapse',
		name: 'Profile',
		key: 'profile',
		route: '/profile',
		icon: <CustomerSupport size="12px" />,
		component: <Profile />,
		noCollapse: true,
	},
	{
		type: 'collapse',
		name: 'Sign In',
		key: 'sign-in',
		route: '/authentication/sign-in',
		icon: <Document size="12px" />,
		component: <SignIn />,
		noCollapse: true,
	},
	{
		type: 'collapse',
		name: 'Sign Up',
		key: 'sign-up',
		route: '/authentication/sign-up',
		icon: <SpaceShip size="12px" />,
		component: <SignUp />,
		noCollapse: true,
	},
];

export default routes;
