import React from 'react'
import {View, StyleSheet, ActivityIndicator, StatusBar} from 'react-native'
import { COLOR } from '../constants'

const Loading = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} barStyle="light-content" />
      <ActivityIndicator animating={true} size="large" color={COLOR.pinkColor} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Loading