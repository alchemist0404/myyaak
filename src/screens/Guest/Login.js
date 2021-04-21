import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { Image, TouchableOpacity, View, ImageBackground } from 'react-native'
import { Container, Content, Button, Item, Input, Form, Text, Toast } from "native-base"
import { COLOR, Images, LAYOUT, Root, Styles } from "../../constants"
import { fetchs } from "../../redux/services"
import { setUserInfo } from "../../redux/actions/authActions"
import Loading from "../../theme/Loading"

const Login = ({navigation}) => {
	const dispatch = useDispatch()
	const [loading, setLoading] = useState(false)
	
	if (loading) {
		return ( <Loading/>)
	}

	return (
		<Container>
			<Text>Login</Text>
		</Container>
	)
}

export default Login