import React, { Component, useState } from 'react'
import normalize from 'react-native-normalize'
import { COLOR, defaultStyles, Images, LAYOUT } from "../../../constants"
import { Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Footer, FooterTab, Button, Header, Content, Container, Item, Input, Label, Form } from 'native-base'
import { AntDesign, Entypo, Feather, Octicons } from '@expo/vector-icons';
import Slider from 'rn-range-slider';

const RedeemScreen = ({navigation}) => {
  const [amount, setAmount] = useState(400)
  const [activePayment, setActivePayment] = useState("credit")
  const [paymentMethods] = useState([
    {
      key: "credit",
      name: "Credit",
      icon: null,
    },
    {
      key: "paypal",
      name: "Paypal",
      icon: Images.PaypalIcon,
    },
    // {
    //   key: "payoneer",
    //   name: "Payoneer",
    //   icon: Images.PayoneerIcon,
    // }
  ])
  const [cardHolderName, setCardHolderName] = useState("Emerson Dokidis")
  const [cardNumber, setCardNumber] = useState("4225976500086141")
  const [expireDate, setExpireDate] = useState("08/24")
  const [CVV, setCVV] = useState("722")

  const handleValueChange = (amount) => {
    setAmount(amount)
  };

  const renderThumb = () => (
    <View>
      <Image source={Images.SliderThumb} style={[{width: normalize(30), height: normalize(22), resizeMode: "contain"}]} />
    </View>
  )
  const renderRail = () => (
    <View style={[S.W100P, {height: normalize(12), backgroundColor: COLOR.lightBlueColor, borderRadius: 20}]}></View>
  )
  const renderRailSelected = () => (
    <View style={[{backgroundColor: COLOR.blueColor, height: normalize(12), borderRadius: 20}]}></View>
  )
  const renderLabel = () => (
    <View style={[{backgroundColor: "#2898FF", borderRadius: 3}, S.P5, S.PH10]}>
      <Text style={[S.CLW, S.F14]}>{`$${amount}`}</Text>
    </View>
  )
  const renderNotch = () => (
    <View style={[{height: 15, width: 1, backgroundColor: COLOR.blueColor}]}></View>
  )

  const goConfirm = () => {
    var params = {}
    if (activePayment == "paypal") {
      params = {
        type: "paypal",
        amount
      }
    }
    navigation.navigate("RedeemConfirmScreen", params)
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
      <Content style={[S.P20, S.BKLG, S.MB10]}>
        <View>
          <ImageBackground source={Images.BackgroundPink} style={[{width: "100%", height: normalize(70)}, S.ROW, S.Jbetween, S.Acenter, S.PH20]}>
            <Text style={[S.CLW]}>{`Total Balance`}</Text>
            <Text style={[S.CLW, S.FW700, S.F22]}>{`$1000`}</Text>
          </ImageBackground>
        </View>
        <View style={[S.MT20]}>
          <Text>{`Price Range`}</Text>
          <Slider
            style={[S.W100P, S.MT40, S.MB5]}
            min={100}
            max={1000}
            step={100}
            floatingLabel
            disableRange={true}
            low={amount}
            allowLabelOverflow={true}
            renderThumb={renderThumb}
            renderRail={renderRail}
            renderRailSelected={renderRailSelected}
            renderLabel={renderLabel}
            renderNotch={renderNotch}
            onValueChanged={handleValueChange}
          />
          <View style={[S.ROW, S.PH15, S.Jbetween]}>
            <Text style={[S.P10, S.BKW, {borderRadius: 5}, S.PV5]}>{`$100`}</Text>
            <Text style={[S.P10, S.BKW, {borderRadius: 5}, S.PV5]}>{`$400`}</Text>
            <Text style={[S.P10, S.BKW, {borderRadius: 5}, S.PV5]}>{`$700`}</Text>
            <Text style={[S.P10, S.BKW, {borderRadius: 5}, S.PV5]}>{`$1000`}</Text>
          </View>
        </View>
        <View style={[S.MT20]}>
          <View style={[S.ROW, S.Jbetween, S.Acenter]}>
            <Text>{`Payment Method`}</Text>
            <AntDesign name="pluscircle" size={24} color={COLOR.blueColor} />
          </View>
          <ScrollView horizontal style={[S.MT10, S.PB5]}>
            {
              paymentMethods.map((item, i) => (
                <TouchableOpacity onPress={() => setActivePayment(item.key)} key={i} style={[S.ROW, S.Acenter, S.P10, S.PH15, {borderRadius: 5}, S.MH10, activePayment === item.key ? {borderWidth: 1, borderColor: COLOR.blueColor, backgroundColor: COLOR.lightBlueColor} : {}]}>
                  <View style={[S.ROW]}>
                    {
                      item.icon ? 
                        <Image source={item.icon} style={[{width: normalize(20), height: normalize(23), resizeMode: "contain"}, S.MR5]} />
                      : null
                    }
                    <Text style={[S.CLBL, S.MR15]}>{`${item.name}`}</Text>
                  </View>
                  {
                    activePayment === item.key ?
                      <AntDesign name="checkcircle" size={16} color={COLOR.blueColor} />
                    : 
                      <Feather name="circle" size={16} color={COLOR.blueColor} />
                  }
                </TouchableOpacity>
              ))
            }
          </ScrollView>
          <Form style={[S.MB40]}>
            {
              activePayment == 'credit' ? 
                <React.Fragment>
                  <Item style={[{borderColor:COLOR.transparent}, S.ML5]} stackedLabel>
                      <Label style={[S.W100P, S.F14, S.MV10, S.InputLabel]}>{`Card Holder Name`}</Label>
                      <Input
                          placeholder='Card Holder Name'
                          placeholderTextColor={COLOR.InputBorder} 
                          style={[S.InputText]}
                          value={cardHolderName}
                          onChangeText={e=>setCardHolderName(e)}
                      />
                  </Item>
                  <Item style={[{borderColor:COLOR.transparent}, S.ML5]} stackedLabel>
                      <Label style={[S.W100P, S.F14, S.MV10, S.InputLabel]}>{`Card Number`}</Label>
                      <Input
                          placeholder='Card Number'
                          placeholderTextColor={COLOR.InputBorder} 
                          style={[S.InputText, S.BKW]}
                          value={cardNumber}
                          onChangeText={e=>setCardNumber(e)}
                      />
                  </Item>
                  <View style={[S.ROW, S.Jbetween]}>
                    <Item style={[{borderColor:COLOR.transparent}, S.ML5, S.W45P]} stackedLabel>
                        <Label style={[S.W100P, S.F14, S.MV10, S.InputLabel]}>{`Expery Date`}</Label>
                        <Input
                            placeholder='Expery Date'
                            placeholderTextColor={COLOR.InputBorder} 
                            style={[S.InputText, S.BKW]}
                            value={expireDate}
                            onChangeText={e=>setExpireDate(e)}
                        />
                    </Item>
                    <Item style={[{borderColor:COLOR.transparent}, S.ML5, S.W45P]} stackedLabel>
                        <Label style={[S.W100P, S.F14, S.MV10, S.InputLabel]}>{`CVV`}</Label>
                        <Input
                            placeholder='CVV'
                            placeholderTextColor={COLOR.InputBorder} 
                            style={[S.InputText, S.BKW]}
                            value={CVV}
                            onChangeText={e=>setCVV(e)}
                        />
                    </Item>
                  </View>
                </React.Fragment>
              :
                <View></View>
            }
            <TouchableOpacity style={[S.P15, S.BKB, {borderRadius: 10}, S.MT20]} onPress={()=>goConfirm()}>
              <Text style={[S.Tcenter, S.CLW]}>{`Redeem Now`}</Text>
            </TouchableOpacity>
          </Form>
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

export default RedeemScreen
