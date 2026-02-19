import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import CustomButton from '../components/CustomButton';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    if (email.trim().length === 0) {
      Alert.alert('Please enter email');
      return;
    }

    navigation.replace('Home', { userEmail: email });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>English Quiz App</Text>

      <TextInput
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <CustomButton title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: moderateScale(20),
    backgroundColor: '#F3F4F6',
  },
  title: {
    fontSize: moderateScale(22),
    fontWeight: 'bold',
    marginBottom: verticalScale(30),
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderRadius: moderateScale(10),
    padding: moderateScale(12),
    marginBottom: verticalScale(20),
  },
});
