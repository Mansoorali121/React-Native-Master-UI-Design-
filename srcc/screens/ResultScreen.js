import React from 'react';
import { View, Text } from 'react-native';

const ResultScreen = ({ route, navigation }) => {
  const { score } = route.params;

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>Your Score: {score}</Text>
      <Text onPress={() => navigation.replace('Home')}>
        Go Home
      </Text>
    </View>
  );
};

export default ResultScreen;
