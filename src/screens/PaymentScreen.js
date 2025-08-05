import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';
import BackButton from '../components/BackButton';
import PaymentCard from '../components/PaymentCard';
import PaymentList from '../components/PaymentList';

const PaymentScreen = () => {
  return (
    <View style={{ flex: 1, paddingTop: vs(40) }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: vs(38),
          paddingHorizontal: s(16)
        }}
      >
        <BackButton />
        <Text
          style={{ fontSize: vs(17), marginStart: s(12), color: '#181C2E' }}
        >
          Payment
        </Text>
      </View>
      {/* <PaymentCard title="Cash" />
      <PaymentCard isselected={true} /> */}
    <PaymentList />
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({});
