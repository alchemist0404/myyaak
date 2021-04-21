import React, { Component } from 'react'
import { connect } from 'react-redux'
import normalize from 'react-native-normalize'
import { navigate, setNavigator } from '../../../redux/services/navigator'
import { COLOR, defaultStyles, Images, LAYOUT } from "../../../constants"
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'
import { Footer, FooterTab, Button, Header, Content, Container, Item, Input, Label, Form } from 'native-base'
import { MaterialIcons, Entypo, FontAwesome5 } from '@expo/vector-icons';
import VerticalBarGraph from '@chartiful/react-native-vertical-bar-graph';

export class PaymentHistoryScreen extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			listData: [
				{
					icon: Images.GrDollar,
					text: "Payout",
					date: "22 Mar, 2021",
					amount: 89.45
				},
				{
					icon: Images.GrBag,
					text: "Redeem",
					date: "19 Mar, 2021",
					amount: 33.41
				},
				{
					icon: Images.GrTransfer,
					text: "Transfer",
					date: "22 Mar, 2021",
					amount: 89.45
				},
				{
					icon: Images.GrDollar,
					text: "Payout",
					date: "22 Mar, 2021",
					amount: 89.45
				},
			]
		}
		setNavigator(props.navigation);
	}
	
	render() {
		return (
			<Container>
				<Header style={[S.BKLG, S.Jbetween, S.ROW, S.Acenter, S.headerStyle, S.MT20, S.MH10]}>
					<Entypo name="chevron-thin-left" onPress={()=>this.props.navigation.goBack()} size={12} color="#6B6864" style={{width: normalize(30)}} />
					<Text style={[S.F18, {color: "#061128"}]}>{`Payment History`}</Text>
					<TouchableOpacity style={[S.editButton, S.Acenter]}>
						<Entypo name="dots-three-vertical" size={10} color="black" />
					</TouchableOpacity>
				</Header>
				<Content style={[S.P20, S.BKLG, S.PB0]}>
					<View style={[S.BKW, S.P20, {borderRadius: 15}]}>
						<Text style={[S.F18]}>Reports</Text>
						<VerticalBarGraph
							data={[20, 45, 28, 80, 99, 43, 50]}
							labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
							width={LAYOUT.window.width - 60}
							height={200}
							barRadius={5}
							barWidthPercentage={0.65}
							baseConfig={{
								hasXAxisBackgroundLines: false,
								hasXAxisLabels: false,
								yAxisLabelStyle: {
									color: "#999999",
									yOffset: 0
								}
							}}
							style={{
								marginTop: 20,
							}}
							barColor={COLOR.pinkColor}
						/>
					</View>
					<View style={[S.MB40]}>
						<Text style={[S.MV20]}>{`Recents`}</Text>
						<FlatList
							style={[S.listStyle]}
							data={this.state.listData}
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

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentHistoryScreen)
