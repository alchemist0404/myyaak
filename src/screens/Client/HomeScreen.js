import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { COLOR, defaultStyles, Images, LAYOUT } from "../../constants"
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Button, Container, Content, Footer, FooterTab, Header, Icon, Left, Right, Toast } from 'native-base'
import normalize from 'react-native-normalize'
import { MaterialIcons, Octicons, Entypo, Foundation, FontAwesome5 } from '@expo/vector-icons';
import { fetchs } from '../../redux/services'
import { LogOut, setUserInfo } from '../../redux/actions/authActions'
import { useSelector } from 'react-redux'
import Loading from '../../theme/Loading'

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user)
  const [loading, setLoading] = useState(false)
  const tasks = [
    {
      name: "Task 1",
      complete: true,
    },
    {
      name: "Task 2",
      complete: true,
    },
    {
      name: "Task 3",
      complete: false,
    },
    {
      name: "Task 4",
      complete: false,
    },
    {
      name: "Task 5",
      complete: false,
    }
  ]

  useEffect( () => {
    setLoading(true)
    getUserData()
  }, [])
  
  const getUserData = async () => {
    const response = await fetchs({
      url: "player/user/getUserData"
    })
    setLoading(false)
    if (response.status == true) {
      dispatch(setUserInfo({
        ...user,
        userInfo: response.data.data
      }))
    }
  }

  if (loading) {
		return ( <Loading />)
	}

  return (
    <Container>
      {/* Header */}
      <Header style={[S.BKLG, S.Jbetween, S.ROW, S.MT10, S.Acenter, S.headerStyle, S.MH10]}>
        <StatusBar backgroundColor={COLOR.blueColor} barStyle="light-content" hidden={true} />
        <Image source={Images.LogoIcon} style={[{width: normalize(78), height: normalize(28)}]} />
        <View></View>
        <View style={[S.ROW, S.Acenter]}>
          <Octicons name="bell" size={18} color="#838994" />
          <TouchableOpacity style={[S.BKLP, S.userAvatar, S.ML15]} onPress={()=>navigation.navigate('ProfileScreen')}>
            <Image source={Images.FemaleUser} style={[S.userAvatarImg]} />
          </TouchableOpacity>
        </View>
      </Header>
      {/* Header */}

      {/* Content */}
      <Content style={[S.BKLG, S.P20]}>
        {/* Balance info card */}
        <View style={[S.balanceInfoCard, S.P20]}>
          <View style={[S.ROW, S.Jbetween, S.P10]}>
            <View style={[S.Acenter]}>
              <View style={[S.P10, S.balanceInforCardImgGroup]}>
                <Image source={Images.MoneyBag} style={[S.balanceInfoImage]} />
              </View>
              <Text style={[S.CLW, S.F30, S.MT15]}>{`$100.00`}</Text>
              <Text style={[S.MT5,{color: 'rgba(255, 255, 255, 0.6)'}]}>{`Available Balance`}</Text>
            </View>
            <Image source={Images.Line} />
            <View style={[S.Acenter]}>
              <View style={[S.P10, S.balanceInforCardImgGroup]}>
                <Image source={Images.Cash} style={[S.balanceInfoImage, {resizeMode: "contain"}]} />
              </View>
              <Text style={[S.CLW, S.F30, S.MT15]}>{`1000`}</Text>
              <Text style={[S.MT5,{color: 'rgba(255, 255, 255, 0.6)'}]}>{`Point Balance`}</Text>
            </View>
          </View>
          <View style={[S.W100P]}>
            <TouchableOpacity style={[S.P15, S.W100P, {borderWidth: 0.3, borderColor: COLOR.whiteColor, borderRadius: 7}, S.MT10]} onPress={()=>navigation.navigate("RedeemScreen")}><Text style={[{color: COLOR.whiteColor}, S.Tcenter]}>Redeem</Text></TouchableOpacity>
          </View>
        </View>
        {/* Offer percent card */}
        <View style={[S.extraPoint, S.ROW, S.MT20]}>
          <View style={[S.W45P, S.BKLP, S.Acenter, S.P20, {borderTopLeftRadius: 20, borderBottomLeftRadius: 20}]}>
            <Image source={Images.PercentOff} style={{width: normalize(120), resizeMode: "contain", height: normalize(100)}} />
          </View>
          <View style={[S.W55P, S.P10, S.Jbetween, {borderWidth: 0.4, borderColor: 'rgba(0,0,0,0.1)', borderLeftWidth: 0, borderTopRightRadius: 20, borderBottomRightRadius: 20}]}>
            <Text>{`10% Extra Point in Every Task!`}</Text>
            <Text style={[S.F14, {color: 'rgba(0, 0, 0, 0.7)'}, S.MT10]}>{`You can get extra 10 points from every logo collect.`}</Text>
            <Text style={[S.CLBL]}>{`Claim Offer`}</Text>
          </View>
        </View>
        {/* Pending Task status */}
        <View style={[S.P20, S.MT20, S.MB60, {borderWidth: 0.4, borderColor: 'rgba(0,0,0,0.1)', borderRadius: 15}]}>
          <View style={[S.ROW, S.Jbetween, S.Acenter]}>
            <Text>{`Pending Task`}</Text>
            <TouchableOpacity>
              <Entypo name="dots-three-vertical" size={15} color="#838994" />
            </TouchableOpacity>
          </View>
          <View style={[S.MT20, S.ROW, S.Jbetween]}>
            {
              tasks.map((item, i) => (
                <View key={i} style={[S.Acenter]}>
                  {
                    item.complete ? 
                      <React.Fragment>
                        <Image source={Images.Success} style={[{width: normalize(25), height: normalize(25)}]} />
                      </React.Fragment>
                    :
                    <React.Fragment>
                      <Image source={Images.Pending} style={[{width: normalize(25), height: normalize(25)}]} />
                    </React.Fragment>
                  }
                  <Foundation name="flag" style={[S.MT5]} size={25} color={item.complete ? `#838994` : `#CDCFD4`} />
                  {/* <View style={[S.flagDownbar]}></View> */}
                  <Text style={[S.F15, S.MT10]}>{item.name}</Text>
                </View>
              ))
            }
          </View>
        </View>
      </Content>
      {/* Content */}

      {/* Footer */}
      <Footer style={[S.BKW, {height: normalize(60), borderTopWidth: 0}]}>
        <FooterTab style={[S.BKW, S.Jbetween, {borderTopWidth: 0}]}>
          <Button onPress={()=>navigation.navigate('HomeScreen')}>
            {
                navigation.state.routeName === "HomeScreen" ?
                <View style={[S.activeFooterTab]}>
                    <Image source={Images.HomeWhite} style={[{width: normalize(20), height: normalize(20)}]} />
                    <Text style={[S.F14, S.CLW, S.ML10]}>{`Home`}</Text> 
                </View>
                : 
                <Image source={Images.HomeBlack} style={[{width: normalize(20), height: normalize(20)}]} />
            }
          </Button>
          <Button style={S.BKPGR, {borderRadius: 50, alignItems:'center'}} onPress={()=>navigation.navigate('TaskIndicator')}>
            <View style={[S.BKPGR,S.Jcenter,S.Acenter, S.BtnTask, S.BoxShadow]} >
              <Image source={Images.HomeFlag} style={[{width: normalize(16.25), height: normalize(18.75)}]} />
            </View>
          </Button>
          <Button onPress={()=>navigation.navigate('ProfileScreen')}>
            {
              navigation.state.routeName === "ProfileScreen" ?
              <View style={[S.activeFooterTab]}>
                <Image source={Images.UserWhite} style={[{width: normalize(20), height: normalize(20)}]} />
                <Text style={[S.F14, S.CLW, S.ML10]}>{`Profile`}</Text> 
              </View>
              : 
              <Image source={Images.UserBlack} style={[{width: normalize(20), height: normalize(20)}]} />
            }
          </Button>
        </FooterTab>
      </Footer>
      {/* Footer */}
    </Container>
  )
}

const S = StyleSheet.create({
  ...defaultStyles,
  balanceInfoCard: {
    backgroundColor: COLOR.pinkColor,
    width: "100%",
    // height: normalize(200),
    borderRadius: 20
  },
  balanceInforCardImgGroup: {
    borderWidth: 0.5,
    borderColor: COLOR.whiteColor,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.11)'
  },
  balanceInfoImage: {
    width: normalize(20),
    height: normalize(20),
  },
  headerStyle: {
    height: normalize(100),
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
  BtnTask: {
    bottom: normalize(25),
    borderRadius: 50,
    width: normalize(55),
    height: normalize(55)
  },
  extraPoint: {
    width: "100%",
    borderRadius: 20
  },
  flagDownbar: {
    width: "100%",
    height: 2,
    backgroundColor: "#FBFBFB",
    marginTop: -2
  },
  activeFooterTab: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: normalize(10),
    borderRadius: 15,
    backgroundColor: "#061128",
    paddingHorizontal: 15
  }
})

export default HomeScreen