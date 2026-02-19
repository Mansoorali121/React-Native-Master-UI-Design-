import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import CustomButton from '../components/CustomButton';

const categories = [
  { id: 1, title: 'Parts of Speech' },
  { id: 2, title: 'English Grammar' },
  { id: 3, title: 'Vocabulary' },
  { id: 4, title: 'General English' },
];

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Choose Category</Text>

      <FlatList
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CustomButton
            title={item.title}
            onPress={() =>
              navigation.navigate('Quiz', { category: item.title })
            }
          />
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(20),
  },
  heading: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    marginBottom: moderateScale(20),
  },
});
