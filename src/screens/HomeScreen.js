import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';
import TopTabs from '../components/TopTabs';
import MediaAtionCard from '../components/MediaAtionCard';
import { dummyData } from '../data/data';

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
      <Text style={{ color: '#2C2016', fontSize: s(14), marginBottom: vs(16) }}>
        Lorem Ipsum simply dummy text
      </Text>
      <TopTabs />
      {/* <MediaAtionCard /> */}
      {/* Fetching all the cards  */}

      <FlatList
        data={dummyData}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{
          marginBottom: vs(16),
          justifyContent: 'space-between',
        }}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <MediaAtionCard
            imageURl={item.image}
            title={item.title}
            date={item.date}
          />

          
        )}
        contentContainerStyle={{
          paddingBottom:vs(150),
          paddingTop:vs(24)
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
