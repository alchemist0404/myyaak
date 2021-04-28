import React, { useState } from 'react'
import normalize from 'react-native-normalize'
import { COLOR, defaultStyles, Images, LAYOUT } from "../../../constants"
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Footer, FooterTab, Button, Header, Content, Container, Item, Input, Label, Form, Toast } from 'native-base'
import { AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons';
import { Slider } from "@miblanchard/react-native-slider";
import { useDispatch, useSelector } from 'react-redux'
import { Root } from '../../../constants'
import { fetchs } from '../../../redux/services'
import { updateUserInfo } from '../../../redux/actions/authActions'
import Loading from '../../../theme/Loading'

const PersonalInformation = ({navigation}) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user)
    const auth = useSelector(state => state.auth.loginInfo)
    const [loading, setLoading] = useState(false)
    const profilePhoto = user.userInfo.user_image ? {uri: Root.profileAvatarURL + user.userInfo.user_image} : Images.BlankProfile;

    const [userDetail, setUserDetail] = useState({
        email: user.userInfo.email,
        password: auth.password,
        fullName: user.userInfo.full_name,
        homeAddress: "1555, Railroad Streat, New York",
    })
    const [isEdit, setIsEdit] = useState(false)

    const handleUpdate = async () => {
        if (userDetail.email == "") {
			Toast.show({text: "Email is Required!",buttonText: "X",type: "danger",duration:4000,position:'top'});
			return
		} else if (userDetail.password.length < 6) {
			Toast.show({text: "Password is Required over 6 charactors!",buttonText: "X",type: "danger",duration:4000,position:'top'});
			return
		} else if (userDetail.fullName == "") {
            Toast.show({text: "Full Name is required!",buttonText: "X",type: "danger",duration:4000,position:'top'});
			return
        }
        setLoading(true)
        const response = await fetchs({url: "player/user/updateUserData",body:{
			...userDetail,
            id: user.userInfo.user_id
		}})
        setLoading(false)
        if (response.status) {
            dispatch(updateUserInfo({
                ...user,
                userInfo: response.data.data
            }))
            Toast.show({text: "Your Information successfully updated.", buttonText: "X", type: "success", duration: 4000, position:'top'});
            setIsEdit(true)
        } else {
            Toast.show({text: response.data, buttonText: "X", type: "danger", duration:4000, position:'top'});
        }
    }

    if (loading) {
		return ( <Loading/>)
	}
    
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
                        <Image source={profilePhoto} style={[S.profilePhoto]} />
                    </View>
                    <View style={[{borderTopRightRadius: 10, borderBottomRightRadius: 10, paddingHorizontal: 10, flexGrow: 1, marginRight: 5}]}>
                        <Text style={[S.CLBL]}>{`${user.userInfo.full_name}`}</Text>
                        <Text style={[S.F12, S.MT5, {color: 'rgba(0,0,0,0.5)'}]}>{`${user.userInfo.title}`}</Text>
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
                <Form style={[S.MV20]}>
                    <Item style={[{borderColor:COLOR.transparent}, S.ML5, S.MR5]} stackedLabel>
                        <Label style={[S.W100P, S.F14, S.MV10, S.InputLabel]}>{`Full Name`}</Label>
                        <Input
                            placeholder='Full Name'
                            placeholderTextColor={COLOR.InputBorder} 
                            style={[S.InputText, S.BoxShadow1]}
                            value={userDetail.fullName}
                            onChangeText={e=>setUserDetail({
                                ...userDetail,
                                fullName: e
                            })}
                            disabled={!isEdit}
                        />
                    </Item>
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
                            <TouchableOpacity style={[S.P15, S.BKB, {borderRadius: 10}, S.MT20]} onPress={()=>handleUpdate()}>
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
