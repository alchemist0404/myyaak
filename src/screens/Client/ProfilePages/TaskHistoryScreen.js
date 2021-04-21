import React, { Component } from 'react'
import { connect } from 'react-redux'
import normalize from 'react-native-normalize'
import { navigate, setNavigator } from '../../../redux/services/navigator'
import { COLOR, defaultStyles, Images, LAYOUT } from "../../../constants"
import { Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View, SectionList } from 'react-native'
import { Footer, FooterTab, Button, Header, Content, Container, Item, Input, Label, Form } from 'native-base'
import { AntDesign, Entypo, Feather, Octicons } from '@expo/vector-icons';

export class TaskHistoryScreen extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      listData: [
        {
          title: "Today",
          data: [
            {
              icon: Images.YellowDolla,
              text: "You received  0.25 point for first level completed.",
              date: "28/03/2021 12:07 PM"
            },
            {
              icon: Images.BlueBGPaypal,
              text: "Your payment withdrawal has successful",
              date: "28/03/2021 12:07 PM"
            },
            {
              icon: Images.MasterCard,
              text: "You new payment method has been successfully",
              date: "28/03/2021 12:07 PM"
            },
          ]
        },
        {
          title: "Yesterday",
          data: [
            {
              icon: Images.GreenFlag,
              text: "Your have completed all the task",
              date: "28/03/2021 12:07 PM"
            },
            {
              icon: Images.Anna,
              text: "You received a payment of $135.00 form Anna",
              date: "28/03/2021 12:07 PM"
            },
            {
              icon: Images.YellowDolla,
              text: "You received  0.50 point for second level completed.",
              date: "28/03/2021 12:07 PM"
            },
            {
              icon: Images.YellowDolla,
              text: "You received  0.25 point for first level completed.",
              date: "28/03/2021 12:07 PM"
            },
          ]
        }
      ]
    }
    setNavigator(props.navigation)
  }
  
  render() {
    return (
      <Container>
        <Header style={[S.BKLG, S.Jbetween, S.ROW, S.MT10, S.Acenter, S.headerStyle, S.MH10]}>
          <StatusBar barStyle="light-content" hidden={true} />
          <TouchableOpacity onPress={()=>navigate("HomeScreen")}>
            <Text style={[S.F18, {color: "#061128"}]}>{`Task Activity History`}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={[S.F12, {color: "#515969"}]}>{`See all`}</Text>
          </TouchableOpacity>
        </Header>
        <Content style={[S.P20, S.BKLG, S.PT0]}>
          <SectionList
            style={[S.listStyle]}
            sections={this.state.listData}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => 
              <View style={[S.ROW, S.Jbetween, S.MV5, S.BKW, S.P10, S.Acenter, {borderRadius: 5}]}>
                <View style={[S.BKLB, {borderRadius: 100, width: normalize(40), height: normalize(40), overflow: "hidden"}]}>
                  <Image source={item.icon} style={[S.listIcon]} />
                </View>
                <View style={[S.W70P]}>
                  <Text style={[S.Tleft, S.F13]}>{item.text}</Text>
                  <Text style={[{color: "#515969"}, S.F10, S.MV5]}>{item.date}</Text>
                </View>
                <Entypo name="chevron-thin-right" size={10} color="#515969" />
              </View>
            }
            renderSectionHeader={({ section: { title } }) => (
              <Text style={[S.MV20, S.F14]}>{title.toUpperCase()}</Text>
            )}
          />
        </Content>
      </Container>
    )
  }
}

const S = StyleSheet.create({
  ...defaultStyles,
  headerStyle: {
    height: normalize(60),
    elevation: 0
  },
  listStyle: {

  },
  listIcon: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
})

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskHistoryScreen)
