import React, { Component } from 'react'
import { connect } from 'react-redux'
import normalize from 'react-native-normalize'
import { navigate, setNavigator } from '../../../redux/services/navigator'
import { COLOR, defaultStyles, Images, LAYOUT } from "../../../constants"
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Footer, FooterTab, Button, Header, Content, Container, Item, Input, Label, Form } from 'native-base'
import { MaterialIcons, Entypo, FontAwesome5 } from '@expo/vector-icons';
import Carousel, { ParallaxImage, Pagination } from 'react-native-snap-carousel';

export class PaymentInformationScreen extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			sliderData: [
				{
					title: '',
					subtitle: '',
					image: Images.SBlueCard
				},
				{
					title: '',
					subtitle: '',
					image: Images.BlueCard
				},
				{
					title: '',
					subtitle: '',
					image: Images.PinkCard
				},
			],
			activeSlide: 1
		}
		setNavigator(props.navigation)
	}

	_renderItem = ({item, index}, parallaxProps) => {
		return (
			<View>
				<ParallaxImage
					source={item.image}
					containerStyle={S.imageContainer}
					style={[{resizeMode: "contain"}]}
					parallaxFactor={0.4}
					{...parallaxProps}
				/>
			</View>
		);
	}
	
	render() {
		return (
			<Container>
				<Header style={[S.BKLG, S.Jbetween, S.ROW, S.Acenter, S.headerStyle, S.MT20, S.MH10]}>
					<Entypo name="chevron-thin-left" onPress={()=>this.props.navigation.goBack()} size={12} color="#6B6864" style={{width: normalize(30)}} />
					<Text style={[S.F18, {color: "#061128"}]}>{`Payment Information`}</Text>
					<TouchableOpacity style={[S.editButton, S.Acenter]}>
						<Entypo name="dots-three-vertical" size={10} color="black" />
					</TouchableOpacity>
				</Header>
				<Content style={[S.P20, S.BKLG]}>
					<View>
						<Carousel
							data={this.state.sliderData}
							renderItem={this._renderItem}
							sliderWidth={LAYOUT.window.width - normalize(40)}
							itemWidth={normalize(280)}
							firstItem={1}
							hasParallaxImages={true}
							onSnapToItem={(index) => this.setState({ activeSlide: index }) }
						/>
						<Pagination
							dotsLength={this.state.sliderData.length}
							activeDotIndex={this.state.activeSlide}
							containerStyle={[{backgroundColor: 'transparent', paddingVertical:5}]}
							dotStyle={{
								width: 20,
								height: 7,
								borderRadius: 5,
								marginHorizontal:-5,
								backgroundColor: COLOR.pinkColor
							}}
							inactiveDotStyle={{
								width: 10,
													height: 10
							}}
							inactiveDotOpacity={0.4}
							inactiveDotScale={0.6}
						/>
					</View>
					<TouchableOpacity style={[S.BKB, S.P20, {borderRadius: 10}, S.Jbetween, S.MT20, S.MV15]}>
						<View style={[S.ROW, S.Acenter, S.Jcenter]}>
							<Entypo name="plus" size={18} color="white" />
							<Text style={[S.CLW, S.ML5, S.F18]}>{`Add Card`}</Text>
						</View>
					</TouchableOpacity>
					<View style={[S.MT20]}>
						<Text>{`Balance Info`}</Text>
						<View style={[S.MT20, S.ROW]}>
							<View style={[S.M10, S.W45P, S.BKW, S.P15, {borderRadius: 10}]}>
								<Text style={[{color: "#515969"}, S.F12]}>Available Balance</Text>
								<View style={[S.ROW, S.Acenter, S.Jbetween]}>
									<Text style={[S.CLB, S.F22]}>{`$150`}</Text>
									<Image source={Images.Gold1} />
								</View>
							</View>
							<View style={[S.M10, S.W45P, S.BKW, S.P15, {borderRadius: 10}]}>
								<Text style={[{color: "#515969"}, S.F12]}>Pending Balance</Text>
								<View style={[S.ROW, S.Acenter, S.Jbetween]}>
									<Text style={[S.CLB, S.F22]}>{`$150`}</Text>
									<Image source={Images.Gold1} />
								</View>
							</View>
						</View>
						<View style={[S.MT10, S.ROW]}>
							<View style={[S.M10, S.W45P, S.BKW, S.P15, {borderRadius: 10}]}>
								<Text style={[{color: "#515969"}, S.F12]}>Recent Payout</Text>
								<View style={[S.ROW, S.Acenter, S.Jbetween]}>
									<Text style={[S.CLB, S.F22]}>{`$99`}</Text>
									<Image source={Images.Gold1} />
								</View>
							</View>
							<View style={[S.M10, S.W45P, S.BKW, S.P15, {borderRadius: 10}]}>
								<Text style={[{color: "#515969"}, S.F12]}>Total Earning</Text>
								<View style={[S.ROW, S.Acenter, S.Jbetween]}>
									<Text style={[S.CLB, S.F22]}>{`$758`}</Text>
									<Image source={Images.Gold1} />
								</View>
							</View>
						</View>
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
	imageContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 8,
		width: normalize(287),
		height: normalize(187)
  }
})

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentInformationScreen)
