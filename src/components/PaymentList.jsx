import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import {
  CashICon,
  MasterCardIcon,
  PaypalIcon,
  VisaIcon,
} from '../assets/Icons';
import PaymentCard from './PaymentCard';
import { s, vs } from 'react-native-size-matters';

const Paymentmethods = [
  { label: 'Cash', icon: <CashICon /> },
  { label: 'Visa', icon: <VisaIcon /> },
  { label: 'Mastercard', icon: <MasterCardIcon /> },
  { label: 'Paypal', icon: <PaypalIcon /> },
];

const PaymentList = () => {
  const [selectedmethod, setselectedMethod] = useState('');
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: s(16), paddingHorizontal: s(16), marginTop:vs(15) }}
        data={Paymentmethods}
        keyExtractor={item => item.label}
        renderItem={({ item }) => (
          <PaymentCard
            title={item.label}
            icon={item.icon}
            onPress={() => setselectedMethod(item.label)}
            isselected={selectedmethod === item.label}
          />
        )}
      />
    </View>
  );
};

export default PaymentList;

const styles = StyleSheet.create({});
