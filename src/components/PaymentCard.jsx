import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { CashICon, Markicon } from '../assets/Icons';
import { s, vs } from 'react-native-size-matters';

const PaymentCard = ({ isselected = false, title, icon, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {isselected && (
        <View style={styles.checkmarkcontainer}>
          <Markicon />
        </View>
      )}
      <View style={[styles.card, isselected && styles.selectedcard]}>
        {/* <CashICon /> */}
        {icon}
      </View>
      <Text style={styles.label}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PaymentCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F0F5FA',
    // backgroundColor:"blue",
    borderRadius: s(10),
    width: s(85),
    height: vs(72),
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: s(14),
    color: '#464E57',
    textAlign: 'center',
    marginTop: vs(4),
  },
  container: {
    width: s(85),
  },
  selectedcard: {
    backgroundColor: '#fff',
    borderWidth: s(2),
    borderColor: '#FF7622',
  },
  checkmarkcontainer: {
    height: s(24),
    width: vs(24),
    borderRadius: s(12),
    backgroundColor: '#FF7622',
    borderColor: '#fff',
    // borderWidth:2,
    borderWidth: s(2),
    position: 'absolute',
    zIndex: 1,
    top: s(-8),
    right: s(-8),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
