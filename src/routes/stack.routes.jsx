import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const { Navigator, Screen } = createStackNavigator()

import Home from '../screens/Home'
import ProductRegister from '../screens/ProductRegister'

export function StackRoutes() {
  return (
    <Navigator initialRouteName="Home">
      <Screen
        name="Home"
        options={{
          title: 'Home',
          headerTitleAlign: 'center',
        }}
        component={Home}
      />
      <Screen
        name="Cadastrar"
        options={{
          headerShown: false,
        }}
        component={ProductRegister}
      />
    </Navigator>
  )
}
