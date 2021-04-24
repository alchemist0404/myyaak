import React, { useState } from 'react'
import { connect } from 'react-redux'
import normalize from 'react-native-normalize'
import { navigate, setNavigator } from '../../../redux/services/navigator'
import { COLOR, defaultStyles, Images, LAYOUT } from "../../../constants"
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Footer, FooterTab, Button, Header, Content, Container, Item, Input, Label, Form } from 'native-base'
import { AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons';
import { Slider } from "@miblanchard/react-native-slider";
import { useSelector } from 'react-redux'

const PersonalInformation = ({navigation}) => {
    const user = useSelector(state => state.auth.user).userInfo.data
    const auth = useSelector(state => state.auth.loginInfo)

    const [userDetail, setUserDetail] = useState({
        email: user.email,
        password: auth.password,
        phoneNumber: "+ 00 58 22 33 44",
        homeAddress: "1555, Railroad Streat, New York",
    })
    const [isEdit, setIsEdit] = useState(false)
    
    return (
        <Container>
            <Header style={[S.BKLG, S.Jbetween, S.ROW, S.Acenter, S.headerStyle, S.MT20]}>
                <Entypo name="chevron-thin-left" onPress={()=>navigation.goBack()} size={12} color="#6B6864" style={[{width: normalize(30)}, S.ML10]} />
                <Text style={[S.F18, {color: "#061128"}]}>{`Personal Information`}</Text>
                {
                    isEdit ?
                        <TouchableOpacity style={[S.editButton, S.Acenter, S.Jcenter]} onPress={()=>setIsEdit(false)}>
                            <AntDesign name="closecircleo" size={15} color={COLOR.blueColor} />
                        </TouchableOpacity>
                    :
                        <TouchableOpacity style={[S.editButton, S.Acenter, S.Jcenter]} onPress={()=>setIsEdit(true)}>
                            <FontAwesome5 name="edit" size={15} color={COLOR.blueColor} />
                        </TouchableOpacity>
                }
            </Header>
            <Content style={[S.P20, S.BKLG]}>
                {/* Small info */}
                <View style={[S.ROW, S.Acenter, S.W100P, S.MT10]}>
                    <View style={[S.BKLB, S.PT10, S.PR10, S.W30P, {borderRadius: 10}]}>
                        <Image source={Images.MaleUser} style={[S.profilePhoto]} />
                    </View>
                    <View style={[{borderTopRightRadius: 10, borderBottomRightRadius: 10, paddingHorizontal: 10, flexGrow: 1, marginRight: 5}]}>
                        <Text style={[S.CLBL]}>{`${user.full_name}`}</Text>
                        <Text style={[S.F12, S.MT5, {color: 'rgba(0,0,0,0.5)'}]}>{`${user.title}`}</Text>
                        <View style={[S.BKW, S.MT10, S.BoxShadow1, S.W70P, {borderRadius: 8, paddingHorizontal: 15, paddingVertical: 10}]}>
                            <Image style={[S.POSA, {width: normalize(17.89), height: normalize(24.72), right: 15}]} source={Images.Medal} />
                            <Text style={[S.F10]}>{`Golden Badge`}</Text>
                            <Slider
                                value={0.5}
                                containerStyle={{
                                    height: normalize(20),
                                    width: normalize(100)
                                }}
                                trackClickable={false}
                                renderThumbComponent={() => (
                                    <View></View>
                                )}
                                trackStyle={{
                                    backgroundColor: COLOR.lightBlueColor
                                }}
                                minimumTrackTintColor={COLOR.blueColor}
                            />
                        </View>
                    </View>
                </View>
                <Form style={[S.MT20]}>
                    <Item style={[{borderColor:COLOR.transparent}, S.ML5, S.MR5]} stackedLabel>
                        <Label style={[S.W100P, S.F14, S.MV10, S.InputLabel]}>{`Email Address`}</Label>
                        <Input
                            placeholder='Email'
                            placeholderTextColor={COLOR.InputBorder}
                            style={[S.InputText, S.BoxShadow1]}
                            value={userDetail.email}
                            onChangeText={e=>setUserDetail({
                                ...userDetail,
                                email:e
                            })}
                            disabled={!isEdit}
                        />
                    </Item>
                    <Item style={[{borderColor:COLOR.transparent}, S.ML5, S.MR5]} stackedLabel>
                        <Label style={[S.W100P, S.F14, S.MV10, S.InputLabel]}>{`Phone Number`}</Label>
                        <Input
                            placeholder='Phone Number'
                            placeholderTextColor={COLOR.InputBorder} 
                            style={[S.InputText, S.BoxShadow1]}
                            value={userDetail.phoneNumber}
                            onChangeText={e=>setUserDetail({
                                ...userDetail,
                                phoneNumber: e
                            })}
                            disabled={!isEdit}
                        />
                    </Item>
                    <Item style={[{borderColor:COLOR.transparent}, S.ML5, S.MR5]} stackedLabel>
                        <Label style={[S.W100P, S.F14, S.MV10, S.InputLabel]}>{`Home Address`}</Label>
                        <Input
                            placeholder='Home Address'
                            placeholderTextColor={COLOR.InputBorder} 
                            style={[S.InputText, S.BoxShadow1]}
                            value={userDetail.homeAddress}
                            onChangeText={e=>setUserDetail({
                                ...userDetail,
                                homeAddress: e
                            })}
                            disabled={!isEdit}
                        />
                    </Item>
                    <Item style={[{borderColor:COLOR.transparent}, S.ML5, S.MR5]} stackedLabel>
                        <Label style={[S.W100P, S.F14, S.MV10, S.InputLabel]}>{`Password`}</Label>
                        <Input
                            placeholder='Password'
                            placeholderTextColor={COLOR.InputBorder} 
                            style={[S.InputText, S.BoxShadow1]}
                            secureTextEntry
                            value={userDetail.password}
                            onChangeText={e=>setUserDetail({
                                ...userDetail,
                                password:e
                            })}
                            disabled={!isEdit}
                        />
                    </Item>
                    {
                        isEdit ? 
                            <TouchableOpacity style={[S.P15, S.BKB, {borderRadius: 10}, S.MT20]}>
                                <Text style={[S.Tcenter, S.CLW]}>{`Update`}</Text>
                            </TouchableOpacity>
                        : null
                    }
                </Form>
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
        height: normalize(40),
        width: normalize(55),
        backgroundColor: COLOR.lightBlueColor,
        marginRight: -10,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        padding: normalize(10)
    },
    profilePhoto: {
        width: normalize(100),
        height: normalize(100),
        resizeMode: "contain",
    },
})

export default PersonalInformation
