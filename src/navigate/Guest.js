import { createAppContainer } from "react-navigation"
import { createStackNavigator } from 'react-navigation-stack'
import Login from '../screens/Guest/Login'

const Guest = createStackNavigator(
	{
		login: { screen: Login }
	},
	{
		initialRouteName: 'login',
		headerMode: "none"
	}
)

export default createAppContainer(Guest)