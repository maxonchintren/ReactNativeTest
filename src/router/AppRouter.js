import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import List from '../screens/List/List'

const Stack = createStackNavigator()

const AppRouter = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="List"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="List" component={List}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppRouter
