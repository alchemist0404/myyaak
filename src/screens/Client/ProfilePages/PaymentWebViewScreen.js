import React, { useEffect, useState } from 'react'
import { COLOR, defaultStyles, Images, LAYOUT, Root } from "../../../constants"
import { StyleSheet, Text, Platform, View } from 'react-native'
import WebView from 'react-native-webview'
import { useSelector } from 'react-redux';
import { Toast } from 'native-base';
import { fetchs } from '../../../redux/services';

const PaymentWebViewScreen = ({navigation}) => {
    const props = navigation.state.params
	const [changed, setChanged] = useState(false)

	const navigationChange = async (status) => {
		if (changed) {
			return
		}
		if (status.url.includes(Root.paymentReturnURL) || status.url.includes(Root.paymentCancelURL)) {
			setChanged(true)
		}
		if (status.url.includes(Root.paymentReturnURL)) {
			Toast.show({text: "Payment Success!", buttonText: "X", type: "success", duration:4000, position:'top'});
			fetchs({url: "player/payment/paymentUpdate", body: {
				payment_id: props.paymentID,
				status: "approved"
			}})
			navigation.navigate("HomeScreen")
		} else if (status.url.includes(Root.paymentCancelURL)) {
			Toast.show({text: "Payment Cancelled!", buttonText: "X", type: "danger", duration:4000, position:'top'});
			fetchs({url: "player/payment/paymentUpdate", body: {
				payment_id: props.paymentID,
				status: "cancelled"
			}})
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