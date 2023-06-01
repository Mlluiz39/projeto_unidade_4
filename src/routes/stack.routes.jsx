import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const { Navigator, Screen } = createStackNavigator()

import Home from '../screens/Home'
import ProductRegister from '../screens/ProductRegister'
import ProductView from '../screens/ProductView'

export function StackRoutes() {
  return (
    <Navigator initialRouteName="Home">
      <Screen
        name="Home"
        options={{
          title: 'Lista de Produtos',
          headerTitleAlign: 'center',
        }}
        component={Home}
      />
      <Screen
        name="Cadastrar"
        options={{
          title: 'Cadastrar Produto',
          headerTitleAlign: 'center',
        }}
        component={ProductRegister}
      />
      <Screen
        name="Editar"
        options={{
          title: 'Editar Produto',
          headerTitleAlign: 'center',
        }}
        component={ProductView}
      />
    </Navigator>
  )
}
