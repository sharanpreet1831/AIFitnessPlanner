import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View style = {styles.maincontainer}>
      <Text style = {styles.title}> Fitness Planner </Text>
      <Text > Your AI - Powered Fitness journey starts here  </Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    maincontainer:{
        flex : 1,
        justifyContent : 'center',
        alignItems :  'center',

    },
    title : {
        fontSize : 26 , 
        fontWeight : 'bold' ,
       

    }
})