import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import { BG_COLOR, TEXT_COLOR, THEME_COLOR } from '../utils/colors'
import { SELECT_USER } from '../utils/strings'
import BgButton from '../components/BgButton'
import BorderButton from '../components/BorderButton'
import { useNavigation } from '@react-navigation/native'

const ChooseUser = () => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Image source={require('../images/chooseUser.png')} style={styles.banner}/>
            <Text style={styles.heading} >{SELECT_USER}</Text>
            <BgButton title={'I am a tutor'} color={'#FFF'} onClick={()=>{
                navigation.navigate('Login', {
                    screen: 'tutor'
                })

            }}/>
            <BorderButton title={'I am a learner'} color={THEME_COLOR} onClick={()=>{
                navigation.navigate('Login', {
                    screen: 'learner'
                })
            }}/>
        </View>
    )
}

export default ChooseUser

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: BG_COLOR,
    },
    banner:{
        width: '100%',
        height: '50%',
    },
    heading:{
        fontSize: moderateScale(20),
        color: TEXT_COLOR,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: moderateVerticalScale(20)
    }
})