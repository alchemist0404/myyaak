import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { Image, TouchableOpacity, View, ImageBackground } from 'react-native'
import { Container, Content, Button, Item, Text,Input, Form, Toast, Left, Icon } from "native-base"
import { Images, Root, Styles } from "../../constants"
import { fetchs } from "../../redux/services"
import Loading from "../../theme/Loading"
import { setUserInfo } from "../../redux/actions/authActions"
import normalize from "react-native-normalize"

const SignUp = ({navigation}) => {
	const dispatch = useDispatch()
	const [loading, setLoading] = useState(false)
	const [state, setState] = useState({
        firstName: "",
        lastName: "",
        Email: "",
        Mobile: "",
        password: "",
        cpassword: "",
        emergencyName: "",
        emergencyContact: "",
	})

    const signupClientApi = async () => {
        if(state.Email==""){
            Toast.show({text: "Email is Required!",buttonText: "X",type: "danger",duration:4000,position:'top'});
        }else if(state.password==""){
            Toast.show({text: "Password is Required!",buttonText: "X",type: "danger",duration:4000,position:'top'});
        }else if(state.cpassword==""){
            Toast.show({text: "Confirm Password is Required!",buttonText: "X",type: "danger",duration:4000,position:'top'});
        }else if(state.cpassword!==state.password){
            Toast.show({text: "Confirm Password is not match!",buttonText: "X",type: "danger",duration:4000,position:'top'});
        }else if(state.firstName==""){
            Toast.show({text: "Name is Required!",buttonText: "X",type: "danger",duration:4000,position:'top'});
        }else if(state.lastName==""){
            Toast.show({text: "Name is Required!",buttonText: "X",type: "danger",duration:4000,position:'top'});
        }else if(state.Mobile==""){
            Toast.show({text: "phone number is Required!",buttonText: "X",type: "danger",duration:4000,position:'top'});
        }else{
			setLoading(true)
            const response = await fetchs({url:Root.client_signup_EndURL, body:{
                first_name: state.firstName,
                last_name: state.lastName,	
                password: state.password,
                email: state.Email,
                phone: state.Mobile,
                emergency_name: state.emergencyName,
                emergency_contact: state.emergencyContact,
                token:'',
            }})
            if(response.status==="failed"){
				Toast.show({ text: response.error_list[0].message, buttonText: "x", type: "danger", duration:4000, position:'top'})
			}else{
                console.log(response);
				let clientData = response["Client Details"][0]
				const clientProfile = await fetchs({
					url: Root.client_profileDetail_EndURL, 
					body: {userid: clientData.ClientId}
				})
				if(clientProfile.status==="success"){
					let client = clientProfile.client_profile_details[0]
					dispatch(setUserInfo({
						userid: client["ClientId"],
						email: client["Email"],
						username: client["Username"],
						profile_image: client["Profile Image"],
						location: client["Location"],
						mobile_number: client["Mobile Number"],
						emergency_number: client["Emergency Contact"],
						emergency_name: client["Emergency Name"],
						language_spoken: client["Languages Spoken"],
						perfered_language: client["Perfered Language"],
						preactice_area: client["Preactice Area"],
						flag: 'client',
					}))
				}else{
					console.log(clientProfile)
				}
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
                <Content contentContainerStyle={Styles.PV50}>
                    <View style={Styles.Acenter}>
                        <Text style={{fontSize:22,color:'#fff',marginLeft:5}}>Register</Text>
                        <TouchableOpacity onPress={() =>navigation.navigate('login')} style={[{position:'absolute', left:normalize(20)}, Styles.H100P, Styles.Jcenter]}>
                            <Icon type="AntDesign" name="arrowleft" style={[Styles.CLW, Styles.F30]} />
                        </TouchableOpacity>
                    </View>
                    <Form style={Styles.MH20}>
                        <View style={[Styles.ROW, Styles.MT20, Styles.Acenter, Styles.Jbetween]}>
                            <Text style={Styles.CLW}>User Type</Text>
                            <TouchableOpacity style={[Styles.ROW, Styles.Jbetween, Styles.Acenter]}>
                                <Icon type="MaterialIcons" name="radio-button-on" style={[Styles.CLW, Styles.F30, Styles.MR10]}/>
                                <Text style={Styles.CLW}>Client</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[Styles.ROW, Styles.Jbetween, Styles.Acenter]} onPress={()=>navigation.navigate("a_signup")}>
                                <Icon type="MaterialIcons" name="radio-button-off" style={[Styles.CLW, Styles.F30, Styles.MR10]}/>
                                <Text style={Styles.CLW}>Attorney</Text>
                            </TouchableOpacity>
                        </View>
                        <Item regular style={{marginTop:10}}>
                            <Icon active name='person' style={Styles.CLW} />
                            <Input 
                                style={Styles.CLW} 
                                value={state.firstName} 
                                onChangeText={ (text) => setState({...state, firstName: text }) }  
                                placeholder="First Name" 
                                placeholderTextColor="#fff"  
                            />
                        </Item>
                        <Item regular style={{marginTop:10}}>
                            <Icon active name='person' style={{color:'#fff'}} />
                            <Input 
                                style={{color:'#fff'}} 
                                value={state.lastName} 
                                onChangeText={ (text) => setState({...state, lastName: text }) }  
                                placeholder="Last Name" 
                                placeholderTextColor="#fff" 
                            />
                        </Item>
                        <Item regular style={{marginTop:10}}>
                            <Icon active name='mail' style={{color:'#fff'}} />
                            <Input 
                                style={{color:'#fff'}} 
                                value={state.Email} 
                                onChangeText={ (text) => setState({...state, Email: text }) }  
                                placeholder="Email" 
                                placeholderTextColor="#fff" 
                            />
                        </Item>
                        <Item regular style={{marginTop:10}}>
                            <Icon active type="FontAwesome" style={{color:'#fff'}} name="tablet" />
                            <Input 
                                style={{color:'#fff'}} 
                                value={state.Mobile} 
                                onChangeText={ (text) => setState({...state, Mobile: text }) }  
                                placeholder="Mobile"  
                                placeholderTextColor="#fff" 
                            />
                        </Item>
                        <Item regular style={{marginTop:10}}>
                            <Icon active type='AntDesign' name='lock1' style={{color:'#fff'}} />
                            <Input 
                                style={{color:'#fff'}} 
                                value={state.password} 
                                onChangeText={ (text) => setState({...state, password: text }) }  
                                placeholder="Password" 
                                secureTextEntry={true} 
                                placeholderTextColor="#fff" 
                            />
                        </Item>
                        <Item regular style={{marginTop:10}}>
                            <Icon active type='AntDesign' name='lock1' style={{color:'#fff'}} />
                            <Input 
                                style={{color:'#fff'}} 
                                value={state.cpassword} 
                                onChangeText={ (text) => setState({...state, cpassword: text }) }  
                                placeholder="Confirm Password" 
                                secureTextEntry={true} 
                                placeholderTextColor="#fff" 
                            />
                        </Item>
                        <View style={{height:30}}/>
                        <Button onPress={signupClientApi} full style={{height:65, marginTop:20,backgroundColor:'rgb(7, 77, 149)'}}>
                            <Text style={{fontSize:16}}>Sign Up</Text>
                        </Button>
                    </Form>
                </Content>
            </ImageBackground>
        </Container>
	)
}

export default SignUp