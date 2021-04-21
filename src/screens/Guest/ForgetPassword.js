import React, { useState } from "react"
import { Image, View, ImageBackground } from 'react-native'
import { Container, Content, Button, Item, Input, Form, Text, Toast } from "native-base"
import { COLOR, Images, Root, Styles } from "../../constants"
import { fetchs } from "../../redux/services"
import Loading from "../../theme/Loading"

const ForgetPassword = ({navigation}) => {
	const [loading, setLoading] = useState(false)
	const [email, setEmail] = useState("")

	const forgetPasswordApiCall = async () => {
        if(email==""){
            Toast.show({text: "Email is Required!",buttonText: "X",type: "danger",duration:4000,position:'top'});
        }else{
            setLoading(true)
            const response = await fetchs({url:Root.forgetpassword_EndURL, body:{email}})
            if(response.status==="success"){
                Toast.show({text: response.message, buttonText: "Okay", type: "success", duration:4000, position:'bottom' })
            }else{
                Toast.show({text: "Invalid!",buttonText: "x",type: "danger",duration:4000,position:'top'});
            }
            setLoading(false)
        }
	}
	
	if (loading) {
		return ( <Loading/>)
	}

	return (
        <Container>  
            <ImageBackground source={Images.backgroundimg} style={[Styles.W100P, Styles.H100P]}>
                <Content>
                    <Form style={Styles.MH20}>
                        <View style={{height:90}}/>
                        <Image source={Images.logo} style={{height:200,width:200, alignSelf:'center'}}/>
                        <Item regular style={Styles.MT50}>
                            <Input 
                                style={Styles.CLW} 
                                value={email} 
                                onChangeText={email=>setEmail(email)}
                                placeholder="Email/Phone Number"
                                placeholderTextColor={COLOR.whiteColor}
                            />
                        </Item>
                        <Button full style={[Styles.H55, Styles.MT30, {backgroundColor:'rgb(7, 77, 149)'}]} onPress={forgetPasswordApiCall}>
                            <Text style={{fontSize:16}}> SUBMIT </Text>
                        </Button>
                        <Button full style={[Styles.H55, Styles.MT30, {backgroundColor:'none'}]} onPress={() => navigation.popToTop()}>
                            <Text style={{fontSize:16,color:'#fff'}}> CANCEL </Text>
                        </Button>	
                    </Form>
                </Content>
            </ImageBackground> 
        </Container>
	)
}

export default ForgetPassword