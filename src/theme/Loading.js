import React from 'react'
import {View, StyleSheet, ActivityIndicator} from 'react-native'
import { COLOR } from '../constants'

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator animating={true} size="large" color={COLOR.primary} />
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