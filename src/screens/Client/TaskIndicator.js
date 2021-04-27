import React, { useState, useEffect, useRef } from 'react'
import normalize from 'react-native-normalize'
import { COLOR, defaultStyles, Images, LAYOUT } from "../../constants"
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native'
import Steps from 'react-native-steps';
import { fetchs } from '../../redux/services';
import MapboxGL from "@react-native-mapbox-gl/maps";
MapboxGL.setAccessToken("pk.eyJ1IjoibWFsZXRpZ2VyIiwiYSI6ImNrbjQ5eGMxcTA0dDIydm9mbjY4Zm8wOHMifQ.TWABwlDJkdgUACO1DMeBPw");

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

const TaskIndicator = ({navigation}) => {

    const [tasks, setTasks] = useState([])
    const [center, setCenter] = useState([
        151.2144,
        -33.8572
    ])
    const [current] = useState(0)
    const _map = useRef()

    useEffect(() => {
        async function fetchData() {
            const response = await fetchs({
                url: "admin/tasks/getTasks"
            })
            if (response.status) {
                setTasks(response.data)
                setCenter([response.data[0].task_position.lng, response.data[0].task_position.lat])
            } else {
                console.log(`Error ------> `, response.data)
            }
        }
        fetchData()
    }, [])

    return (
        <View>
            <View style={[S.POSA, {width: normalize(80), height: normalize(40), top: 20, left: 0, zIndex: 99, borderTopRightRadius: 30, borderBottomRightRadius: 30}, S.BKW, S.ROW, S.Acenter, S.P10]}>
                <View style={[S.circle]}></View>
                <Text style={[S.FW700, S.ML10]}>{`100`}</Text>
            </View>
            <MapboxGL.MapView style={[S.W100P, S.H100P]} ref={_map}>
                <MapboxGL.Camera centerCoordinate={center} zoomLevel={17} />
                {
                    tasks.length > 0 ?
                        tasks.map((item, i) => (
                            <MapboxGL.MarkerView draggable={true} coordinate={[item.task_position.lng, item.task_position.lat]} id={`task${i}`} key={i}>
                                <Image source={Images.Marker} style={{width: normalize(47), height: normalize(58), resizeMode:"contain"}} />
                            </MapboxGL.MarkerView>
                        ))
                    : null
                }
            </MapboxGL.MapView>
            <View style={[S.POSA, S.W100P, {height: normalize(150), bottom: 0, zIndex: 99, borderTopLeftRadius: 20, borderTopRightRadius: 20}, S.BKW, S.P20]}>
                <Steps
                    configs={configs}
                    current={current}
                    labels={labels}
                    reversed={false}
                    direction="horizontal"
                />
                <TouchableOpacity style={[S.P15, S.playButton, S.MT15]} onPress={()=>navigation.navigate("TaskScreen")}>
                    <Text style={[S.CLW, S.Tcenter]}>Play Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
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

export default TaskIndicator
