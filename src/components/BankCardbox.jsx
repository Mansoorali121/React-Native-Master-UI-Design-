import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';
import { Card } from '../assets/Icons';
import LottieView from 'lottie-react-native';

const BankCardbox = () => {
  return (
    <View style={styles.container}>
      {/* <Card /> */}
      <LottieView
        autoPlay
        style={{ width: s(150), height: s(150)}}
        source={require('../assets/Credit Card.json')}
      />
      <Text
        style={{
          color: '#32343E',
          fontSize: s(16),
          fontWeight: 'bold',
          marginTop: vs(17),
        }}
      >
        No Master Card Added{' '}
      </Text>

      <Text
        style={{
          color: '#2D2D2D',
          fontSize: 15,
          marginTop: vs(6),
          textAlign: 'center',
        }}
      >
        You can add a Mastercard and save it for later
      </Text>
    </View>
  );
};

export default BankCardbox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F8F9',
    // backgroundColor: 'red',

    // height: vs(257),
    borderTopRightRadius: s(10),
    // marginTop: vs(0),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: vs(35),
    marginHorizontal: vs(30),
  },
});
