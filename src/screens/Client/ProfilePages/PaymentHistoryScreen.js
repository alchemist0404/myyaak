import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import normalize from 'react-native-normalize'
import { COLOR, defaultStyles, Images, LAYOUT } from "../../../constants"
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'
import { Footer, FooterTab, Button, Header, Content, Container, Item, Input, Label, Form } from 'native-base'
import { MaterialIcons, Entypo, FontAwesome5 } from '@expo/vector-icons';
import VerticalBarGraph from '@chartiful/react-native-vertical-bar-graph';
import Loading from '../../../theme/Loading'
import { fetchs } from '../../../redux/services'

const PaymentHistoryScreen = ({navigation}) => {
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true)
	const [listData, setListData] = useState([])
	const [calendarData, setCalendarData] = useState([0,0,0,0,0,0,0,0,0,0,0,0])

	useEffect(() => {
		getPaymentHistory()
	}, [])

	const getPaymentHistory = async () => {
		const response = await fetchs({url: "player/payment/loadPaymentHistory"})
		if (response.status == true && response.data.length > 0) {
			var history = []
			var calData = []
			for (let i = 0; i < response.data.length; i++) {
				if (response.data[i].status == "approved") {
					var obj = {
						icon : response.data[i].type == "deposit" ? Images.GrBag : response.data[i].type == "withdraw" ? Images.GrDollar : Images.GrTransfer,
						text : response.data[i].type == "deposit" ? "Redeem" : response.data[i].type == "withdraw" ? "Payout" : "Transfer",
						date : formatDate(response.data[i].date),
						amount: response.data[i].amount
					}
					history.push(obj)
				}
			}
			setListData(history)
			for (let i = 0; i < 12; i++) {
				var amo = 0
				for (let j = 0; j < response.data.length; j++) {
					var mon = Number(response.data[j].date.split("-")[1])
					var year = Number(response.data[j].date.split("-")[0])
					if (year == new Date().getFullYear() && mon == i + 1) {
						amo = amo + response.data[j].amount
					}
				}
				calData.push(amo)
			}
			// if (Math.max(...calData) > 100) {
			// 	var val = Math.pow(10, Math.max(...calData).toString().length - 2)
			// 	for (let i = 0; i < calData.length; i++) {
			// 		calData[i] = calData[i] / val
			// 	}
			// }
			setCalendarData(calData)
			setLoading(false)
		}
	}

	const formatDate = (date) => {
		var newDate = ""
		date = date.split("T")[0]
		var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
		var day = date.split("-")[2]
		var mon = months[Number(date.split("-")[1]) - 1]
		var year = date.split("-")[0]

		newDate = day + " " + mon + ", " + year
		return newDate
	}
	
	if (loading) {
		return ( <Loading />)
	}

	return (
		<Container>
			<Header style={[S.BKLG, S.Jbetween, S.ROW, S.Acenter, S.headerStyle, S.MT20, S.MH10]}>
				<Entypo name="chevron-thin-left" onPress={()=>navigation.goBack()} size={12} color="#6B6864" style={{width: normalize(30)}} />
				<Text style={[S.F18, {color: "#061128"}]}>{`Payment History`}</Text>
				<TouchableOpacity style={[S.editButton, S.Acenter]}>
					<Entypo name="dots-three-vertical" size={10} color="black" />
				</TouchableOpacity>
			</Header>
			<Content style={[S.P20, S.BKLG, S.PB0]}>
				<View style={[S.BKW, {borderRadius: 15}]}>
					<Text style={[S.F18, S.ML20, S.MT20]}>Reports</Text>
					{
						Math.max(...calendarData) == 0 ? 
							<Text style={[S.M20, S.Tcenter]}>There is no Graph Data</Text>
						:
						<VerticalBarGraph
							data={calendarData}
							labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
							width={LAYOUT.window.width - 50}
							height={200}
							barRadius={5}
							barWidthPercentage={0.75}
							baseConfig={{
								hasXAxisBackgroundLines: false,
								hasXAxisLabels: false,
								yAxisLabelStyle: {
									color: "#999999",
									yOffset: 0
								}
							}}
							style={{
								marginVertical: 20,
								paddingLeft: 5
							}}
							barColor={COLOR.pinkColor}
						/>
					}
				</View>
				<View style={[S.MB40]}>
					<Text style={[S.MV20]}>{`Recents`}</Text>
					<FlatList
						style={[S.listStyle]}
						data={listData}
						keyExtractor={(item, index) => index}
						renderItem={({ item }) => 
							<View style={[S.ROW, S.Jbetween, S.MV5, S.BKW, S.P10, S.Acenter, {borderRadius: 5}, S.PR30]}>
								<View style={[S.BKW, {width: normalize(50), height: normalize(50), overflow: "hidden"}]}>
									<Image source={item.icon} style={[S.listIcon]} />
								</View>
								<View style={[S.W60P, S.ML10]}>
									<Text style={[S.Tleft, S.F14]}>{item.text}</Text>
									<Text style={[{color: "#515969"}, S.F11, S.MV5]}>{item.date}</Text>
								</View>
								<Text style={[S.F16]}>{`$${item.amount}`}</Text>
							</View>
						}
					/>
				</View>
			</Content>
		</Container>
	)
}

const S = StyleSheet.create({
	...defaultStyles,
	headerStyle: {
		height: normalize(60),
		elevation: 0
	},
	editButton: {
		padding: normalize(10)
	},
	listIcon: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
})

export default PaymentHistoryScreen
