import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { s } from 'react-native-size-matters';
import { Sendicon } from '../assets/Icons';

const SocialCircle = () => {
  return (
    <View style={styles.circle}>
      
    </View>
  )
}

export default SocialCircle;

const styles = StyleSheet.create({
    circle:{height:s(46),
        width:s(46),
        borderRadius:s(40),
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#fff",
        borderWidth:s(1),
        borderColor:"#E4E6E8"
    },
})