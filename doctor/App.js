import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
import Onboardings from './Screens/Onboarding';
import Board from './Screens/Board';
import Preview from './Screens/Preview';
import LastPage from './Screens/LastPage';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Onboarding" component={Onboardings} />
				<Stack.Screen name="Board" component={Board} />
				<Stack.Screen name="ImagePreview" component={Preview} />
				<Stack.Screen name="Lastpage" component={LastPage} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
