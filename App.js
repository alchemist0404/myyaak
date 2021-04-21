import React, { useEffect, useState } from "react"
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Root } from "native-base"
import AppLoading from 'expo-app-loading'
import Navigate from "./src/navigate"
import {store, persistor} from './src/redux/Store'

export default () =>{
  const [isReady, setIsReady] = useState(true)
  useEffect(() => {
    setIsReady(false)
  }, [])
  if (isReady) {
    return <AppLoading />
  }
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Root>
          <Navigate />
        </Root>
      </PersistGate>
    </Provider>
  )
}