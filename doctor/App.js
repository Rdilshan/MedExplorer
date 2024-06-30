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
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import Future from './Screens/Future';
import Confirme from './Screens/Confirme';
import Pread from './Screens/Pread';

const Stack = createNativeStackNavigator();

const toastConfig = {
	success: (props) => (
	  <BaseToast
		{...props}
		style={{ borderLeftColor: 'green' }}
		contentContainerStyle={{ paddingHorizontal: 20 }}
		text1Style={{
		  fontSize: 17,
		  fontWeight: 'bold'
		}}
		text2Style={{
			fontSize: 15
		  }}
	  />
	),
	
	error: (props) => (
	  <ErrorToast
	  
		{...props}
		text1Style={{
		  fontSize: 17
		}}
		text2Style={{
		  fontSize: 15
		}}
	  />
	),
	
	tomatoToast: ({ text1, props }) => (
	  <View style={{ height: 60, width: '100%', backgroundColor: 'red' }}>
		<Text>{text1}</Text>
		<Text>{props.uuid}</Text>
	  </View>
	)
  };
  

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
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
				<Stack.Screen name="ProfileUpdate" component={Profile}/>
				<Stack.Screen name="Pnumber" component={Pnumber}/>
				<Stack.Screen name="Patient" component={Patient}/>
				<Stack.Screen name="Dashboard" component={Dashboard} />
				<Stack.Screen name="Future" component={Future} />
				<Stack.Screen name="Confirme" component={Confirme} />
				<Stack.Screen name="Pread" component={Pread} />
			</Stack.Navigator>
			<Toast ref={(ref) => Toast.setRef(ref)} config={toastConfig} />
		</NavigationContainer>
	);
}
