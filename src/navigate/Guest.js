import { createAppContainer } from "react-navigation"
import { createStackNavigator } from 'react-navigation-stack'
import Login from '../screens/Guest/Login'
import SignUp from "../screens/Guest/SignUp"

const Guest = createStackNavigator(
	{
		login: { screen: Login },
		signup: { screen: SignUp }
	},
	{
		initialRouteName: 'login',
		headerMode: "none"
	}
)

export default createAppContainer(Guest)