import React, { useEffect, useState } from 'react'
import { COLOR, defaultStyles, Images, LAYOUT } from "../../constants"
import { StyleSheet, Text, Platform, View } from 'react-native'
import WebView from 'react-native-webview'
import { request, PERMISSIONS, requestMultiple } from 'react-native-permissions';

const TaskScreen = ({navigation}) => {
	const [hasPermission, setHasPermission] = useState(null)
	const [hasLocationPermission, setHasLocationPermission] = useState(null)

	useEffect(() => {
		if (Platform.OS === 'android') {
			requestMultiple([PERMISSIONS.ANDROID.CAMERA, PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION]).then((statuses) => {
				if (statuses["android.permission.ACCESS_FINE_LOCATION"] === "granted" && statuses["android.permission.CAMERA"] === "granted") {
					setHasPermission("granted")
				}
			})
		}else if (Platform.OS === 'ios') {
			requestMultiple([PERMISSIONS.IOS.CAMERA, PERMISSIONS.IOS.LOCATION_ALWAYS]).then((statuses)=> {
				if (statuses["ios.permission.LOCATION_ALWAYS"] === "granted" && statuses["ios.permission.CAMERA"] === "granted") {
					setHasPermission("granted")
				}
			})
		}
	})
	
	if (hasPermission !== 'granted') {
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

const S = StyleSheet.create({
	...defaultStyles,
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
})

export default TaskScreen