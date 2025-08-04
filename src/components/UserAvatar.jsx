import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { s } from 'react-native-size-matters';

const UserAvatar = () => {
  return (
    
      <Image  source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnhO-qoZCa_DGVqT9VeWJGnLgnOt9b6K96Jbhefl5uQjTyLk6lakPKpuDfwNTXAd89h6k&usqp=CAU"}} style={styles.image}/>
    
  )
}

export default UserAvatar;
const styles = StyleSheet.create({
    image:{
        height:s(32),
        width:s(32),
        borderRadius:s(16)
    }
})