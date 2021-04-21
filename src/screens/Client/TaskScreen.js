import React, { Component } from 'react'
import { connect } from 'react-redux'
// import normalize from 'react-native-normalize'
import { navigate, setNavigator } from '../../redux/services/navigator'
import { COLOR, defaultStyles, Images, LAYOUT } from "../../constants"
import { StyleSheet, Text, Platform, View } from 'react-native'
import WebView from 'react-native-webview'
import { request, PERMISSIONS, requestMultiple } from 'react-native-permissions';

export class TaskScreen extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			hasPermission: null,
			hasLocationPermission: null
		}
		setNavigator(props.navigation)
	}

	UNSAFE_componentWillMount() {
		if (Platform.OS === 'android') {
			requestMultiple([PERMISSIONS.ANDROID.CAMERA, PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION]).then((statuses) => {
				if (statuses["android.permission.ACCESS_FINE_LOCATION"] === "granted" && statuses["android.permission.CAMERA"] === "granted") {
					this.setState({
						hasPermission: "granted"
					})
				}
			})
		}else if (Platform.OS === 'ios') {
			requestMultiple([PERMISSIONS.IOS.CAMERA, PERMISSIONS.IOS.LOCATION_ALWAYS]).then((statuses)=> {
				if (statuses["ios.permission.LOCATION_ALWAYS"] === "granted" && statuses["ios.permission.CAMERA"] === "granted") {
					this.setState({
						hasPermission: "granted"
					})
				}
			})
		}
	}
	
	render() {
		if (this.state.hasPermission !== 'granted') {
			return (
				<View style={[S.Acenter, S.Jcenter, {width: LAYOUT.window.width, height: LAYOUT.window.height}]}>
					<Text style={[S.F18, S.Tcenter]}>Camera or Device Location is not allowed!</Text>
				</View>
			)
		}
		return (
			<View style={{width: LAYOUT.window.width, height: LAYOUT.window.height}}>
				<WebView
					source={{ uri: 'https://ibluday.com/AR/' }}
					mediaPlaybackRequiresUserAction={false}
					style={{width: LAYOUT.window.width, height: LAYOUT.window.height}}
				/>
			</View>
		)
	}
}

const S = StyleSheet.create({
	...defaultStyles,
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
})

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskScreen)