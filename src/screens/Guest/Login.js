import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { Image, TouchableOpacity, View, ImageBackground, StyleSheet, StatusBar } from 'react-native'
import { Container, Content, Button, Item, Input, Form, Text, Toast, Label, Header } from "native-base"
import { COLOR, Images, LAYOUT, defaultStyles } from "../../constants"
import { fetchs } from "../../redux/services"
import { setUserInfo } from "../../redux/actions/authActions"
import { Octicons } from '@expo/vector-icons'; 
import Loading from "../../theme/Loading"
import normalize from "react-native-normalize"

const Login = ({navigation}) => {
	const dispatch = useDispatch()
	const [loading, setLoading] = useState(false)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [notShowPassword, setNotShowPassword] = useState(true)
	
	if (loading) {
		return ( <Loading/>)
	}

	const handleLogin = async () => {
		if (email == "") {
			Toast.show({text: "Email is Required!",buttonText: "X",type: "danger",duration:4000,position:'top'});
			return
		} else if (password == "") {
			Toast.show({text: "Password is Required!",buttonText: "X",type: "danger",duration:4000,position:'top'});
			return
		}
		setLoading(true)

		const response = await fetchs({url: "user/login",body:{
			username: email,
			password
		}})
		if (response.status == true) {
			console.log(`response.data`, response.data);
			dispatch(setUserInfo( response.data ))
		} else {
			Toast.show({text: response.data, buttonText: "X", type: "danger", duration:4000, position:'top'});
			setLoading(false);
		}
	}

	return (
		<Container>
			<Header style={{height: 0}}>
				<StatusBar hidden={true}  />
			</Header>
			<Content>
				<View style={[S.MV50, S.Acenter, S.Jcenter]}>
					<Image source={Images.Logo} style={{width: normalize(100), resizeMode: "contain", height: normalize(100)}} />
					<Text style={[S.F21, S.CLSP, S.MT20, S.FW700]}>{`Sign in to your account`}</Text>
				</View>
				<Form style={[S.P20]}>
					<Item style={[S.ML5, {borderColor: 'transparent'}]} stackedLabel>
						<Label style={[S.W100P, S.F14, S.MV10, S.InputLabel]}>{`Email Address`}</Label>
						<Input
							placeholder='Email'
							placeholderTextColor={COLOR.InputBorder}
							style={[S.InputText, S.BoxShadow1, S.PR50, {borderRadius: 5}]}
							value={email}
							onChangeText={e=>setEmail(e)}
						/>
					</Item>
					<Item style={[S.ML5, {borderColor: 'transparent'}]} stackedLabel>
						<Label style={[S.W100P, S.F14, S.MV10, S.InputLabel]}>{`Password`}</Label>
						<View style={[S.ROW]}>
							<Input
								placeholder='Password'
								placeholderTextColor={COLOR.InputBorder}
								style={[S.InputText, S.BoxShadow1, S.PR50, {borderRadius: 5}]}
								value={password}
								secureTextEntry={notShowPassword}
								onChangeText={e=>setPassword(e)}
							/>
							<TouchableOpacity style={[S.POSA, S.H100P, S.Jcenter, {elevation:3, zIndex:1, right:normalize(20)}]} onPress={()=>setNotShowPassword(!notShowPassword)}>
								<Octicons name={notShowPassword ? "eye" : "eye-closed"} size={20} color={COLOR.greyColor}/>
							</TouchableOpacity>
						</View>
					</Item>
					<TouchableOpacity style={[S.MT20, S.BKSP, S.P15, {borderRadius: 5}]} onPress={()=>handleLogin()}>
						<Text style={[S.CLW, S.F18, S.Tcenter]}>{`Log in`}</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[S.MV10]}>
						<Text style={[S.F14, S.Tcenter, S.CLSP]}>{`Forgot password?`}</Text>
					</TouchableOpacity>
				</Form>
			</Content>
		</Container>
	)
}

const S = StyleSheet.create({
	...defaultStyles,
})

export default Login