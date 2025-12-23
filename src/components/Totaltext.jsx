import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters';

const Totaltext = () => {
  return (
    <View style={{
        marginTop:vs(15),
        flexDirection:"row",
    }}>
        <Text
          style={{ fontSize: vs(14), marginStart: s(12), color: 'gray' }}
        >
          TOTAL: 
        </Text>
        <Text
          style={{ fontSize: vs(17), marginStart: s(12), color: '#000' }}
        >
          $96 
        </Text>
    </View>
  )
}

export default Totaltext;

const styles = StyleSheet.create({})