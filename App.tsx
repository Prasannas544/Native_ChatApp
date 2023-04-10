import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React, { createContext, useContext, useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from "./config/firebase";
import { firebase } from 'firebase'


import Chat from './screens/Chat'
import Login from './screens/Login'
import Signup from './screens/Signup';
import Home from './screens/Home'


const Stack = createStackNavigator()

const App = () => {


  return (

    <NavigationContainer>
      <Stack.Navigator  >
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: true }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: true }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: true }} />
        <Stack.Screen name="Chat" component={Chat} options={{ headerShown: true }} />

      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App
