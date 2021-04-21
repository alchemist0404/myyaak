import React, { useState } from "react"
import { useDispatch } from "react-redux"
import * as ImagePicker from 'expo-image-picker'
import { Image, TouchableOpacity, View, ImageBackground, Picker } from 'react-native'
import { Container, Content, Button, Item, Text,Input, Form, Toast, Left, Icon, CheckBox } from "native-base"
import { COLOR, Images, LAYOUT, Root, Styles } from "../../constants"
import { fetchs } from "../../redux/services"
import Loading from "../../theme/Loading"
import { setUserInfo } from "../../redux/actions/authActions"
import normalize from "react-native-normalize"

const AttorneySignUp = ({navigation}) => {
	const dispatch = useDispatch()
	const [loading, setLoading] = useState(false)
	const [state, setState] = useState({
        firstName: "",
        lastName: "",
        Email: "",
        Mobile: "",
        password: "",
        cpassword: "",
        attorneyId: "",
        selected: "",
        image: "",
	})

    const signupAttorneyApi = async () => {
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
            const response = await fetchs({url:Root.attorney_signup_EndURL, body:{
                first_name: state.firstName,
                last_name: state.lastName,	
                password: state.password,
                email: state.Email,
                phone: state.Mobile,
                attorney_id: state.attorneyId,
                profile_pic: state.image,
                token:'12345678',
            }})
            if(response.status==="failed"){
				Toast.show({ text: response.error_list[0].message, buttonText: "x", type: "danger", duration:4000, position:'top'})
			}else{
				let attorneyData = response["Contractor Details"][0]
				const attorneyProfile = await fetchs({
					url: Root.attorney_profileDetail_EndURL, 
					body: {userid: attorneyData.ContractorId}
				})
				if(attorneyProfile.status==="success"){
					let attorney = attorneyProfile.contractor_profile_details[0]
					dispatch(setUserInfo({
						userid: attorney["ContractorId"],
						email: attorney["Email"],
						username: attorney["Username"],
						profile_image: attorney["Profile Image"],
						location: attorney["Location"],
						mobile_number: attorney["Mobile Number"],
						language_spoken: attorney["Languages Spoken"],
						perfered_language: attorney["Perfered Language"],
						preactice_area: attorney["Preactice Area"],
						bio: attorney["Bio"],
						flag: 'contractor',
					}))
				}else{
					console.log(attorneyProfile)
				}
			}
			setLoading(false)
        }
    }

    const _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1
        });
        if (!result.cancelled) {
          setState({...state, image: result.uri });
        }
      }
 
	if (loading) {
		return ( <Loading/>)
	}

	return (
        <Container>
            <ImageBackground source={Images.backgroundimg} style={[Styles.W100P, Styles.H100P]}>
            <Content contentContainerStyle={Styles.PV30}>
                <View style={Styles.Acenter}>
                    <Text style={{fontSize:22,color:'#fff',marginLeft:5}}>Register</Text>
                    <TouchableOpacity onPress={() =>navigation.navigate('login')} style={[{position:'absolute', left:normalize(20)}, Styles.H100P, Styles.Jcenter]}>
                        <Icon type="AntDesign" name="arrowleft" style={[Styles.CLW, Styles.F30]} />
                    </TouchableOpacity>
                </View>
                <Form style={Styles.MH20}>
                    <View style={[Styles.ROW, Styles.MT20, Styles.Acenter, Styles.Jbetween]}>
                        <Text style={Styles.CLW}>User Type</Text>
                        <TouchableOpacity style={[Styles.ROW, Styles.Jbetween, Styles.Acenter]} onPress={()=>navigation.navigate("signup")}>
                            <Icon type="MaterialIcons" name="radio-button-off" style={[Styles.CLW, Styles.F30, Styles.MR10]}/>
                            <Text style={Styles.CLW}>Client</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[Styles.ROW, Styles.Jbetween, Styles.Acenter]}>
                            <Icon type="MaterialIcons" name="radio-button-on" style={[Styles.CLW, Styles.F30, Styles.MR10]}/>
                            <Text style={Styles.CLW}>Attorney</Text>
                        </TouchableOpacity>
                    </View>
                    <Item regular style={{marginTop:10}}>
                        <Icon active name='person' style={{color:'#fff'}} />
                        <Input 
                            style={{color:'#fff'}} 
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
                            secureTextEntry
                            placeholder="Password" 
                            placeholderTextColor="#fff" 
                        />
                    </Item>
                    <Item regular style={{marginTop:10}}>
                        <Icon active type='AntDesign' name='lock1' style={{color:'#fff'}} />
                        <Input 
                            style={{color:'#fff'}} 
                            secureTextEntry
                            value={state.cpassword} 
                            onChangeText={ (text) => setState({...state, cpassword: text }) }  
                            placeholder="Confirm Password" 
                            placeholderTextColor="#fff" 
                        />
                    </Item>
                    <Item picker regular style={{marginTop:10}}>
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-down" style={[Styles.CLW]}/>}
                            textStyle={{ color: "#fff" }}
                            style={{ width: LAYOUT.window.width-normalize(40), color:COLOR.whiteColor }}
                            selectedValue={state.selected}
                            onValueChange={(e)=>setState({...state, selected:e})}
                            placeholder="Select US States"
                            placeholderStyle={{ color: "#fff" }}
                            placeholderIconColor="#007aff"  
                        >
                            {LAYOUT.Coutrycode.map((item, key)=><Picker.Item key={key} label={item.label} value={item.value} />)}
                        </Picker>
                        <Icon type='Entypo' name='triangle-down' style={{color:'#fff', position:'absolute', right:normalize(10)}} />
                    </Item>
                    <Item regular style={{marginTop:10}}>
                        <Text style={[Styles.CLW, Styles.F26]}>  #  </Text>
                        <Input  
                            value={state.attorneyId} 
                            style={{color:'#fff'}} 
                            onChangeText={ (text) => setState({...state, attorneyId: text }) }  
                            placeholder="Attorney ID Number" 
                            placeholderTextColor="#fff" 
                        />
                    </Item>
                    <View style={{marginVertical:10,borderWidth:1,borderColor:'#c2c2c2',backgroundColor:'rgba(146,145,145, 0.5)'}}>
                        <Text style={{color:'#fff',textAlign:'center'}}>Upload Your Drivers License</Text>
                        <View style={{flexDirection:'row',marginTop:10}}>
                            <View style={{width:'50%'}}>
                                <TouchableOpacity onPress={_pickImage} >
                                    <Icon active name='camera' style={{color:'#fff',fontSize:25,textAlign:'center'}} />
                                </TouchableOpacity>
                            </View>
                            <View style={{width:'50%',borderLeftWidth:1,borderColor:'#c2c2c2'}}>
                                <Text style={{color:'#fff',textAlign:'center',marginLeft:10,fontSize:13}}>Image Size: Max 2MB</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[Styles.ROW, Styles.MT15]}>
                        <CheckBox color={COLOR.whiteColor}/>
                        <Text  style={[Styles.CLW, Styles.F16, Styles.ML20]}>By clicking this, I have read the <Text style={[Styles.CLW, Styles.F16, {textDecorationLine:'underline'}]}> Disclaimer Statement </Text> by ASAPEsq. LLC</Text>
                    </View>
                    <View style={[Styles.ROW, Styles.MT15]}>
                        <CheckBox color={COLOR.whiteColor}/>
                        <Text  style={[Styles.CLW, Styles.F16, Styles.ML20]}>By clicking this, I have read & accept the <Text style={[Styles.CLW, Styles.F16, {textDecorationLine:'underline'}]}> Privacy Policy </Text> for ASAPEsq. LLC</Text>
                    </View>
                    <Button onPress={signupAttorneyApi} full style={{height:65, marginTop:20,backgroundColor:'rgb(7, 77, 149)'}}>
                        <Text style={{fontSize:16}}>Sign Up</Text>
                    </Button>
                    </Form>
                </Content>
            </ImageBackground>
        </Container>
	)
}

export default AttorneySignUp