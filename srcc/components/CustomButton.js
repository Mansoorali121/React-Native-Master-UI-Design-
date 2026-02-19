import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4F46E5',
    padding: moderateScale(15),
    borderRadius: moderateScale(10),
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: moderateScale(16),
    fontWeight: '600',
  },
});
