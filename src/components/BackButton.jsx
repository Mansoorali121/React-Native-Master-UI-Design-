import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';
// import Entypo from '@expo/vector-icons/Entypo';

const BackButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      {/* <Entypo name="chevron-left" size={24} color="black" /> */}
      {/* <Text>Back Button  </Text> */}
      <Image source={require('../assets/left.png')} style={styles.image} />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    height: s(32),
    width: s(32),
    borderRadius: s(16),
    backgroundColor: '#ECF0F4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: { height: s(20), width: s(20) },
});
