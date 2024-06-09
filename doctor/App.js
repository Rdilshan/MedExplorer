import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
import Onboardings from './Screens/Onboarding';
import Board from './Screens/Board';
import Preview from './Screens/Preview';
import Wrong from './Screens/Wrong';
import Success from './Screens/Success';
import EnterCode from './Screens/EnterCode';
import Register from './Screens/Register';
import SignIn from './Screens/SignIn';
import NewPasswordone from './Screens/NewPasswordDone';
import EnterNewPassword from './Screens/EnterNewPassword';
import Profile from './Screens/Profile';
import Dashboard from './Screens/Dashboard';
import Pnumber from './Screens/Pnumber'
import Patient from './Screens/Patient'


const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Dashboard" screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Onboarding" component={Onboardings} />
				<Stack.Screen name="Board" component={Board} />
				<Stack.Screen name="ImagePreview" component={Preview} />
				<Stack.Screen name="Wrong" component={Wrong} />
				<Stack.Screen name="Success" component={Success} />
				<Stack.Screen name="EnterCode" component={EnterCode}/>
				<Stack.Screen name="Register" component={Register}/>
				<Stack.Screen name="SignIn" component={SignIn}/>
				<Stack.Screen name="NewPasswordone" component={NewPasswordone}/>
				<Stack.Screen name="EnterNewPassword" component={EnterNewPassword}/>
				<Stack.Screen name="Profile" component={Profile}/>
				<Stack.Screen name="Pnumber" component={Pnumber}/>
				<Stack.Screen name="Patient" component={Patient}/>
				<Stack.Screen name="Dashboard" component={Dashboard} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
