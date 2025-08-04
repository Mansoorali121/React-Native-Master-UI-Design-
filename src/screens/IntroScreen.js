import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SVGComponent from '../components/Mainlogo';
import CircleLogo from '../components/Circlelogo';

const IntroScreen = () => {
  return (
    <View style={styles.container}>
      
      <SVGComponent />

      <CircleLogo  style={styles.mainlogo}/>
    </View>
  )
}

export default IntroScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent: 'center',
    backgroundColor:"#fff"
  },
  mainlogo:{position:"absolute",
    bottom:0,
    right:0
  }
})