import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const HomeScreen = () => {
  return (
    <View
      style={{
        paddingTop: vs(50),
        paddingHorizontal: s(16),
      }}
    >
      <Text
        style={{
          color: '#1D150F',
          fontSize: s(20),
          fontWeight: 'semibold',
          marginBottom: vs(6),
        }}
      >
        Meditations
      </Text>
      <Text style={{ color: '#2C2016', fontSize: s(14), marginBottom:vs(16) }}>
        Lorem Ipsum simply dummy text
      </Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
