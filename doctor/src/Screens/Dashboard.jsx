import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DHome from './Tabs/DHome';
import Prescription from '../Screens/Tabs/Prescription';
import Profile from '../Screens/Tabs/Profile'
import Entypo from '@expo/vector-icons/Entypo';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function Dashboard() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={DHome} options={{ 
        tabBarIcon:({color,size})=>(
            <Entypo name="home" size={size} color={color} />
        ), headerShown:false
       }}/>
      <Tab.Screen name="Prescription" component={Prescription} options={{ 
        tabBarIcon:({color,size})=>(
            <FontAwesome5 name="file-prescription" size={size} color={color} />
        ),headerShown:false
       }}/>
      <Tab.Screen name="Profile" component={Profile} options={{ 
        tabBarIcon:({color,size})=>(
            <FontAwesome name="user" size={size} color={color} />
        ),headerShown:false
       }}/>
    </Tab.Navigator>
  )
}