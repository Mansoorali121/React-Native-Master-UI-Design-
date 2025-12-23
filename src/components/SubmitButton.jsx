import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';
import { Plusicon } from '../assets/Icons';

const Submitbutton = () => {
  return (
    <TouchableOpacity
      style={{
        borderColor: '#F0F5FA',
        borderWidth: s(2),
        backgroundColor: '#FF7622',
        borderRadius: s(12),
        paddingVertical: vs(15),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop:vs(5),
    
      }}
    >
      <Text style={{ color: '#fff', fontSize: s(14), marginStart: s(10) }}>
        Pay and Confirm {' '}
      </Text>
    </TouchableOpacity>
  );
};

export default Submitbutton;

const styles = StyleSheet.create({});
