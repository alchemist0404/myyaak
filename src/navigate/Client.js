import { createAppContainer } from "react-navigation"
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from '../screens/Client/HomeScreen'
import TaskIndicator from '../screens/Client/TaskIndicator'
import TaskScreen from '../screens/Client/TaskScreen'
import ProfileScreen from '../screens/Client/ProfilePages'
import PersonalInfoScreen from '../screens/Client/ProfilePages/PersonalInformation'
import RedeemScreen from '../screens/Client/ProfilePages/RedeemScreen'
import RedeemConfirmScreen from '../screens/Client/ProfilePages/RedeemConfirmScreen'
import TaskHistoryScreen from '../screens/Client/ProfilePages/TaskHistoryScreen'
import PaymentInformationScreen from '../screens/Client/ProfilePages/PaymentInformationScreen'
import PaymentHistoryScreen from '../screens/Client/ProfilePages/PaymentHistoryScreen'
import PaymentWebViewScreen from '../screens/Client/ProfilePages/PaymentWebViewScreen'

const Cient = createStackNavigator(
	{
		HomeScreen: {
			screen: HomeScreen,
		},
		TaskIndicator: {
			screen: TaskIndicator,
		},
		TaskScreen: {
			screen: TaskScreen,
		},
		ProfileScreen: {
			screen: ProfileScreen,
		},
		PersonalInfoScreen: {
			screen: PersonalInfoScreen,
		},
		RedeemScreen: {
			screen: RedeemScreen,
		},
		RedeemConfirmScreen: {
			screen: RedeemConfirmScreen,
		},
		PaymentWebViewScreen: {
			screen: PaymentWebViewScreen,
		},
		TaskHistoryScreen: {
			screen: TaskHistoryScreen,
		},
		PaymentInformationScreen: {
			screen: PaymentInformationScreen,
		},
		PaymentHistoryScreen: {
			screen: PaymentHistoryScreen,
		}
	},
	{
		initialRouteName: "HomeScreen",
		headerMode: "none"
	}
)

export default createAppContainer(Cient)