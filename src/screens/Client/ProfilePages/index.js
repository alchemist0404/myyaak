import React from 'react'
import { useDispatch } from 'react-redux'
import { COLOR, defaultStyles, Images, LAYOUT } from "../../../constants"
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Footer, FooterTab, Button, Header, Content, Container } from 'native-base'
import { MaterialIcons, Entypo, FontAwesome5 } from '@expo/vector-icons';
import normalize from 'react-native-normalize'
import { LogOut } from '../../../redux/actions/authActions'


const ProfileScreen = ({navigation}) => {
    const dispatch = useDispatch()
    return (
        <Container>
            {/* Header */}
            <Header style={[S.BKLG, S.Jbetween, S.ROW, S.Acenter, S.headerStyle, S.MT20, S.MH10]}>
                <StatusBar backgroundColor={COLOR.blueColor} barStyle="light-content" hidden={true} />
                <Entypo name="chevron-thin-left" onPress={()=>navigation.goBack()} size={12} color="#6B6864" />
                <Text style={[S.F18, {color: "#061128"}]}>{`Profile`}</Text>
                <View style={{width: 12}}></View>
            </Header>
            {/* Header */}
            {/* Content */}
            <Content style={[S.BKLG, S.P20, S.PT0]}>
                {/* Small info */}
                <View style={[S.ROW, S.Acenter, S.W100P, S.MT10]}>
                    <View style={[S.BKLB, S.PT10, S.PR10, S.W30P, {borderRadius: 10}]}>
                        <Image source={Images.MaleUser} style={[S.profilePhoto]} />
                    </View>
                    <View style={[S.BoxShadow1, S.H90, S.BKW, S.P10, {borderTopRightRadius: 10, borderBottomRightRadius: 10, paddingHorizontal: 10, flexGrow: 1, marginRight: 5}]}>
                        <Image style={[S.POSA, {width: normalize(17.89), height: normalize(24.72), right: 20}]} source={Images.Medal} />
                        <View>
                            <Text style={[S.F12, S.BKSY, S.P5, S.CLW, {borderRadius: 3, paddingHorizontal: 10, width: normalize(55)}]}>{`Level 2`}</Text>
                        </View>
                        <Text style={[S.CLBL, S.MT10]}>{`Emerson Dokidis`}</Text>
                        <Text style={[S.F12, S.MT5, {color: 'rgba(0,0,0,0.5)'}]}>{`Student`}</Text>
                    </View>
                </View>
                {/* Balance cards */}
                <View style={[S.ROW, S.Jbetween, S.MT20, S.P5]}>
                    <View style={[S.Acenter, S.P15, S.BoxShadow1, S.BKW, {borderRadius: 10, width: "30%"}]}>
                        <View style={[S.BKB, S.P10, {borderRadius: 3}]}>
                            <Image source={Images.Cash} style={[S.balanceCardImg]} />
                        </View>
                        <Text style={[S.CLBL, S.FW700]}>{`100`}</Text>
                        <Text style={[{color: COLOR.textGreyColor}, S.F12]}>{`Toatal Point`}</Text>
                    </View>
                    <View style={[S.Acenter, S.P15, S.BoxShadow1, S.BKW, {borderRadius: 10, width: "30%"}]}>
                        <View style={[S.BKP, S.P10, {borderRadius: 3}]}>
                            <Image source={Images.MoneyBag} style={[S.balanceCardImg]} />
                        </View>
                        <Text style={[S.CLP, S.FW700]}>{`$250`}</Text>
                        <Text style={[{color: COLOR.textGreyColor}, S.F12]}>{`Toatal Balance`}</Text>
                    </View>
                    <View style={[S.Acenter, S.P15, S.BoxShadow1, S.BKW, {borderRadius: 10, width: "30%"}]}>
                        <View style={[S.BKRP, S.P10, {borderRadius: 3}]}>
                            <Image source={Images.Exchange} style={[S.balanceCardImg]} />
                        </View>
                        <Text style={[{color: COLOR.textGreyColor, marginTop: 5}, S.F12]}>{`Point`}</Text>
                        <Text style={[{color: COLOR.textGreyColor}, S.F12]}>{`Exchange`}</Text>
                    </View>
                </View>
                {/* Profile Menu Options */}
                <View style={[S.MT20, S.MB40]}>
                    <TouchableOpacity style={[S.ROW, S.Acenter, S.Jbetween, {paddingVertical: 10, borderBottomColor: '#F2F3F4', borderBottomWidth: 1}]} onPress={()=>navigation.navigate("PersonalInfoScreen")}>
                        <View style={[S.ROW, S.Acenter]}>
                            <Image source={Images.GrUser} style={[{width: normalize(30), height: normalize(30)}]} />
                            <Text style={[S.ML15, {color: "#515969"}]}>Personal Information</Text>
                        </View>
                        <Entypo name="chevron-thin-right" size={18} color="#515969" />
                    </TouchableOpacity>
                    <TouchableOpacity style={[S.ROW, S.Acenter, S.Jbetween, {paddingVertical: 10, borderBottomColor: '#F2F3F4', borderBottomWidth: 1}]} onPress={()=>navigation.navigate("PaymentInformationScreen")}>
                        <View style={[S.ROW, S.Acenter]}>
                            <Image source={Images.GrWallet} style={[{width: normalize(30), height: normalize(30)}]} />
                            <Text style={[S.ML15, {color: "#515969"}]}>Payment Information</Text>
                        </View>
                        <Entypo name="chevron-thin-right" size={18} color="#515969" />
                    </TouchableOpacity>
                    <TouchableOpacity style={[S.ROW, S.Acenter, S.Jbetween, {paddingVertical: 10, borderBottomColor: '#F2F3F4', borderBottomWidth: 1}]} onPress={()=>navigation.navigate("PaymentHistoryScreen")}>
                        <View style={[S.ROW, S.Acenter]}>
                            <Image source={Images.GrHistory} style={[{width: normalize(30), height: normalize(30)}]} />
                            <Text style={[S.ML15, {color: "#515969"}]}>Payment History</Text>
                        </View>
                        <Entypo name="chevron-thin-right" size={18} color="#515969" />
                    </TouchableOpacity>
                    <TouchableOpacity style={[S.ROW, S.Acenter, S.Jbetween, {paddingVertical: 10, borderBottomColor: '#F2F3F4', borderBottomWidth: 1}]} onPress={()=>navigation.navigate("RedeemScreen")}>
                        <View style={[S.ROW, S.Acenter]}>
                            <Image source={Images.GrRedeem} style={[{width: normalize(30), height: normalize(30)}]} />
                            <Text style={[S.ML15, {color: "#515969"}]}>Redeem</Text>
                        </View>
                        <Entypo name="chevron-thin-right" size={18} color="#515969" />
                    </TouchableOpacity>
                    <TouchableOpacity style={[S.ROW, S.Acenter, S.Jbetween, {paddingVertical: 10, borderBottomColor: '#F2F3F4', borderBottomWidth: 1}]} onPress={()=>navigation.navigate("TaskHistoryScreen")}>
                        <View style={[S.ROW, S.Acenter]}>
                            <Image source={Images.GrList} style={[{width: normalize(30), height: normalize(30)}]} />
                            <Text style={[S.ML15, {color: "#515969"}]}>Task History</Text>
                        </View>
                        <Entypo name="chevron-thin-right" size={18} color="#515969" />
                    </TouchableOpacity>
                    <TouchableOpacity style={[S.ROW, S.Acenter, S.Jbetween, {paddingVertical: 10}]} onPress={()=>dispatch( LogOut() )}>
                        <View style={[S.ROW, S.Acenter]}>
                            <Image source={Images.GrLogout} style={[{width: normalize(30), height: normalize(30)}]} />
                            <Text style={[S.ML15, {color: "#515969"}]}>Log Out</Text>
                        </View>
                        <Entypo name="chevron-thin-right" size={18} color="#515969" />
                    </TouchableOpacity>
                </View>
            </Content>
            {/* Content */}
            {/* Footer */}
            <Footer style={[S.BKW, {height: normalize(60), borderTopWidth: 0}]}>
                <FooterTab style={[S.BKW, S.Jbetween, {borderTopWidth: 0}]}>
                    <Button onPress={()=>navigation.navigate("HomeScreen")}>
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
    headerStyle: {
        height: normalize(60),
        elevation: 0
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
    },
    profilePhoto: {
        width: normalize(100),
        height: normalize(100),
        resizeMode: "contain",
    },
    balanceCardImg: {
        width: normalize(18),
        height: normalize(18),
        resizeMode: "contain"
    }
})

export default ProfileScreen;