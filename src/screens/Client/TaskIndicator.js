import React from 'react'
import { connect } from 'react-redux'
import normalize from 'react-native-normalize'
import { navigate, setNavigator } from '../../redux/services/navigator'
import { COLOR, defaultStyles, Images, LAYOUT } from "../../constants"
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
// import MapViewDirections from 'react-native-maps-directions';
// import { Config } from '../../constants/config'
import Steps from 'react-native-steps';

const labels = ["5 Points","5 Points","5 Points","5 Points","5 Points"];
const configs = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize:25,
    separatorStrokeWidth: 0.7,
    currentStepStrokeWidth: 0.7,
    stepStrokeCurrentColor: COLOR.pinkColor,
    stepStrokeWidth: 0.7,
    stepStrokeFinishedColor: COLOR.pinkColor,
    stepStrokeUnFinishedColor: COLOR.pinkColor,
    separatorFinishedColor: COLOR.pinkColor,
    separatorUnFinishedColor: COLOR.pinkColor,
    stepIndicatorFinishedColor: COLOR.pinkColor,
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: COLOR.pinkColor,
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: COLOR.pinkColor,
    labelColor: 'rgba(0,0,0,0.7)',
    labelSize: 11,
    currentStepLabelColor: 'rgba(0,0,0,0.7)'
};

class TaskIndicator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          taks:[],
          current: 0
        }
        setNavigator(props.navigation)
      }
    render() {
        return (
            <View>
                <View style={[S.POSA, {width: normalize(80), height: normalize(40), top: 20, left: 0, zIndex: 99, borderTopRightRadius: 30, borderBottomRightRadius: 30}, S.BKW, S.ROW, S.Acenter, S.P10]}>
                    <View style={[S.circle]}></View>
                    <Text style={[S.FW700, S.ML10]}>{`100`}</Text>
                </View>
                <MapView style={[S.W100P, S.H100P]}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0122,
                        longitudeDelta: 0.0121,
                    }}
                    // zoomEnabled={false}
                    customMapStyle={LAYOUT.mapStyle}
                >
                    <Marker
                        coordinate={{
                            latitude : 37.79225 , longitude : -122.4344
                        }}
                    >
                        <Image source={Images.Marker} style={{width: normalize(40), height: normalize(57)}} />
                    </Marker>
                    <Marker
                        coordinate={{
                            latitude : 37.78825 , longitude : -122.4357
                        }}
                    >
                        <Image source={Images.Marker} style={{width: normalize(40), height: normalize(57)}} />
                    </Marker>
                    <Marker
                        coordinate={{
                            latitude : 37.789525 , longitude : -122.4298
                        }}
                    >
                        <Image source={Images.Marker} style={{width: normalize(40), height: normalize(57)}} />
                    </Marker>
                    <Marker
                        coordinate={{
                            latitude : 37.786525 , longitude : -122.4291
                        }}
                    >
                        <Image source={Images.Marker} style={{width: normalize(40), height: normalize(57)}} />
                    </Marker>
                    <Marker
                        coordinate={{
                            latitude : 37.785825 , longitude : -122.4321
                        }}
                    >
                        <Image source={Images.Marker} style={{width: normalize(40), height: normalize(57)}} />
                    </Marker>
                    <Marker
                        coordinate={{
                            latitude : 37.78965 - 0.005 , longitude : -122.4324 + 0.003
                        }}
                    >
                        <Image source={Images.Location} style={{width: normalize(30), height: normalize(30)}} />
                    </Marker>
                    {/* <MapViewDirections
                        origin={{
                            latitude : 37.78825 - 0.005 , longitude : -122.4324 + 0.003
                        }}
                        destination={{
                            latitude : 37.785825 , longitude : -122.4321
                        }}
                        apikey={Config.googlApiKey}
                        strokeWidth={3}
                        strokeColor={`#2898FF`}
                    /> */}
                </MapView>
                <View style={[S.POSA, S.W100P, {height: normalize(150), bottom: 0, zIndex: 99, borderTopLeftRadius: 20, borderTopRightRadius: 20}, S.BKW, S.P20]}>
                    <Steps
                        configs={configs}
                        current={this.state.current}
                        labels={labels}
                        reversed={false}
                        direction="horizontal"
                    />
                    <TouchableOpacity style={[S.P15, S.playButton, S.MT15]} onPress={()=>navigate("TaskScreen")}>
                        <Text style={[S.CLW, S.Tcenter]}>Play Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


const S = StyleSheet.create({
    ...defaultStyles,
    stepText: {
        borderRadius: 50,
        borderWidth: 0.3,
        borderColor: '#9643FF',
        width: normalize(28),
        height: normalize(28),
        textAlign: 'center',
        color: COLOR.pinkColor
    },
    playButton: {
        backgroundColor: COLOR.blueColor,
        borderRadius: 17
    },
    circle: {
        width: 15,
        height: 15,
        borderRadius: 50,
        borderWidth: 5,
        borderColor: COLOR.pinkColor
    }
})

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskIndicator)
