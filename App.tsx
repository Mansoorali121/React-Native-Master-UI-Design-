import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IntroScreen from './src/screens/IntroScreen';
import ContactUsScreen from './src/screens/ContactUsScreen';
import HomeScreen from './src/screens/HomeScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import Index from './srcc';
import AppNavigator from './srcc/navigation/AppNavigator';

const App = () => {
  return (
    <AppNavigator />
  )
}

export default App;

const styles = StyleSheet.create({})