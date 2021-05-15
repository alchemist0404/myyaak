import React, { Component, useState } from 'react'
import normalize from 'react-native-normalize'
import { COLOR, defaultStyles, Images, LAYOUT, Root } from "../../../constants"
import { Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Footer, FooterTab, Button, Header, Content, Container, Item, Input, Label, Form } from 'native-base'
import { AntDesign, Entypo, Feather, Octicons } from '@expo/vector-icons';
import Loading from '../../../theme/Loading'

const RedeemConfirmScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false)
  const paymentInfo = navigation.state.params
  const paypalDetail = {
    "intent": "sale",
    "payer": {
      "payment_method": "paypal"
    },
    "transactions": [{
      "amount": {
        "total": paymentInfo.amount,
        "currency": "AUD",
        "details": {
          "subtotal": paymentInfo.amount,
          "tax": "0",
          "shipping": "0",
          "handling_fee": "0",
          "shipping_discount": "0",
          "insurance": "0"
        }
      }
    }],
    "redirect_urls": {
      "return_url": Root.paymentReturnURL,
      "cancel_url": Root.paymentCancelURL
    }
  }
  const redeem = async () => {
    setLoading(true)
    if (paymentInfo.type == "paypal") {
      var data = "grant_type=client_credentials";

      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
      
      xhr.open("POST", "https://api.sandbox.paypal.com/v1/oauth2/token");
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.setRequestHeader("Authorization", "Basic QVZENVRLV1Z1b0Y5cE13TEp4bWxkejBDSVR4N0hxbTlQU0RKcDlGSkNZUFJpTlN4akF6czR4SGNIWUV4SGQyWGZuSkxiS1Y1Rm9tMFVqUHo6RUVKRWRHMFBEWFNBaGdSNE1VVHR3b2lxdTFDb0hzdThLYXYwTWZmMFpEY29EM1BmVXBZV3JZSnlWblNSSTZjS1p4d1NMbHZoSlFhZzVoWGw=");
      
      xhr.send(data);

      xhr.addEventListener("readystatechange", async function() {
        if(this.readyState === 4) {
          const response = JSON.parse(this.responseText)
          var headers = new Headers();
          headers.append("Content-Type", "application/json");
          headers.append("Authorization", `${response.token_type} ${response.access_token}`);

          var requestOptions = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(paypalDetail),
            redirect: 'follow'
          };

          var result = await fetch("https://api.sandbox.paypal.com/v1/payments/payment", requestOptions)
          const responseData = await result.json()
          var url = responseData.links.find(item => item.rel == "approval_url")
          navigation.navigate("PaymentWebViewScreen", {url: url.href, amount: paymentInfo.amount})
          setLoading(false)
        }
      });
    }
  }
  
  if (loading) {
		return ( <Loading />)
	}

  return (
    <Container>
      <Header style={[S.BKLG, S.Jbetween, S.ROW, S.MT10, S.Acenter, S.headerStyle, S.MH10]}>
        <StatusBar backgroundColor={COLOR.blueColor} barStyle="light-content" hidden={true} />
        <TouchableOpacity onPress={()=>navigation.navigate("HomeScreen")}>
          <Image source={Images.LogoIcon} style={[{width: normalize(78), height: normalize(28)}]} />
        </TouchableOpacity>
        <View></View>
        <View style={[S.ROW, S.Acenter]}>
          <Octicons name="bell" size={18} color="#838994" />
          <TouchableOpacity style={[S.BKLP, S.userAvatar, S.ML15]}>
            <Image source={Images.FemaleUser} style={[S.userAvatarImg]} />
          </TouchableOpacity>
        </View>
      </Header>
      <Content style={[S.P20, S.BKLG, S.MB10, S.H100P]}>
        <View style={[S.Jbetween, S.H100P]}>
          <View>
            <ImageBackground source={Images.BackgroundPink} style={[{width: "100%", height: normalize(70)}, S.ROW, S.Jbetween, S.Acenter, S.PH20]}>
              <Text style={[S.CLW]}>{`Total Balance`}</Text>
              <Text style={[S.CLW, S.FW700, S.F22]}>{`$800`}</Text>
            </ImageBackground>
          </View>
          <View style={[S.PV50, S.Acenter]}>
            <Image source={Images.CardWallet} style={[{width: normalize(144), height: normalize(172)}]} />
            <Text style={[S.F22, S.MT20]}>{`Redeem $${paymentInfo.amount}`}</Text>
            <Text style={[S.F13, {color: "#818792"}, S.PH20, S.W75P, S.Tcenter, S.MT20]}>{`Each time a friend signs up through your referal link well reward you both $5`}</Text>
          </View>
          <TouchableOpacity style={[S.P15, S.BKB, {borderRadius: 10}, S.MT20]} onPress={() => redeem()}>
            <Text style={[S.Tcenter, S.CLW]}>{`Redeem Now`}</Text>
          </TouchableOpacity>
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
  userAvatar: {
    borderRadius: 50,
    overflow: "hidden"
  },
  userAvatarImg: {
    resizeMode: 'contain',
    width: 35,
    height: 35,
    backgroundColor: COLOR.lightPinkColor
  },
  sliderStyle: {
    width: "100%"
  }
})

export default RedeemConfirmScreen