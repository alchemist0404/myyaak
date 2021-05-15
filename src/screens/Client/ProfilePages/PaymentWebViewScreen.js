import React, { useEffect, useState } from 'react'
import { COLOR, defaultStyles, Images, LAYOUT, Root } from "../../../constants"
import { StyleSheet, Text, Platform, View } from 'react-native'
import WebView from 'react-native-webview'
import { useSelector } from 'react-redux';
import { Toast } from 'native-base';

const PaymentWebViewScreen = ({navigation}) => {
    const props = navigation.state.params

	const navigationChange = (status) => {
		console.log(`props.url`, props.url)
		console.log(`status.url`, status.url)
		if (status.url.includes(Root.paymentReturnURL)) {
			Toast.show({text: "Payment Success!", buttonText: "X", type: "success", duration:4000, position:'top'});
			navigation.navigate("HomeScreen")
		} else if (status.url.includes(Root.paymentCancelURL)) {
			Toast.show({text: "Payment Cancelled!", buttonText: "X", type: "danger", duration:4000, position:'top'});
			navigation.navigate("HomeScreen")
		}
	}

	return (
		<View style={{width: LAYOUT.window.width, height: LAYOUT.window.height}}>
			<WebView
				source={{ uri: `${props.url}` }}
				mediaPlaybackRequiresUserAction={false}
				style={{width: LAYOUT.window.width, height: LAYOUT.window.height}}
				onNavigationStateChange={navigationChange}
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

export default PaymentWebViewScreen