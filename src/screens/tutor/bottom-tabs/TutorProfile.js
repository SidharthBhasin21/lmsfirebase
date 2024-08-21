import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { moderateScale, scale } from 'react-native-size-matters'
import { useIsFocused } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import firestore from '@react-native-firebase/firestore';
import { TEXT_COLOR } from '../../../utils/colors'


const TutorProfile = () => {
    const isFocused = useIsFocused()
    const [user, setUser] = useState({})

    useEffect(() => {
        getData();
    },[isFocused])

    const getData = async () => {
        const userId = await AsyncStorage.getItem('USERID')
        const user = await firestore().collection('tutors').doc(userId).get()
        if(user){
            setUser(user.data().user)
        }
        
    }

    if(user == null) return <ActivityIndicator size="large" color="#0000ff" />
    return (
        <View style = {styles.container}>
            <Image source={{uri: user.photo}} style={styles.userImg}/>
            <Text style={styles.name}>{user.name}</Text>
        </View>
    )
}

export default TutorProfile

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    userImg:{
        width: scale(200),
        height: scale(200),
        alignSelf: 'center',
        marginTop: moderateScale(20),
        borderRadius: scale(50)
    },
    name: {
        fontSize: moderateScale(20),
        fontWeight: '600',
        color: TEXT_COLOR,
        alignSelf: 'center',
        marginTop: moderateScale(20)
    }
})