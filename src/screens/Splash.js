import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import {THEME_COLOR } from '../utils/colors'
import { SPLASH_TAGLINE } from '../utils/strings'
import { useNavigation } from '@react-navigation/native'
import { moderateScale } from 'react-native-size-matters'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Splash = () => {
  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      checkLogin()
    }, 2000)
  }, [])

  const checkLogin = async () =>{
    const userId = await AsyncStorage.getItem('USERID')
    if(userId){
      navigation.navigate('TutorHome')
    } else {
      navigation.navigate('ChooseUserType')
    }
  }
  return (
    <View style= {styles.container}> 
      <StatusBar backgroundColor={THEME_COLOR} />
      <Image source={require('../images/logo.jpg')} style={styles.logo}/>
      <Text style={styles.tagline}>{SPLASH_TAGLINE}</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: THEME_COLOR
  },
  logo:{
    width: '50%',
    height: '20%',
    resizeMode: 'contain'
  },
  tagline:{
    fontSize: moderateScale(16),
    color: 'white',
    fontWeight: '600',
    marginTop: 10
  }
})