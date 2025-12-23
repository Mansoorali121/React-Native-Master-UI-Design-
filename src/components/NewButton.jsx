import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';
import { Plusicon } from '../assets/Icons';

const NewButton = () => {
  return (
    <TouchableOpacity
      style={{
        borderColor: '#F0F5FA',
        borderWidth: s(2),
        backgroundColor: '#fff',
        borderRadius: s(10),
        paddingVertical: vs(15),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop:vs(5)
      }}
    >
      <Plusicon />
      <Text style={{ color: '#FF7622', fontSize: s(14), marginStart: s(10) }}>
        Add New{' '}
      </Text>
    </TouchableOpacity>
  );
};

export default NewButton;

const styles = StyleSheet.create({});
