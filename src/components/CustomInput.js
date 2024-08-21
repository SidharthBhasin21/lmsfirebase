import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { moderateScale, moderateVerticalScale, verticalScale } from 'react-native-size-matters'
import { THEME_COLOR } from '../utils/colors'

const CustomInput = ({keyboardType,onChangeText,placeholder, value,multiline}) => {
    const [isFocused, setIsFocused] = useState()
    return (
        <View style={[styles.container,{
                borderColor: isFocused ? THEME_COLOR : '#9e9e9e',
                height: multiline ? verticalScale(100) : verticalScale(50),
            }]}>
            <TextInput 
                onBlur={() => setIsFocused(false)} 
                onFocus={() => setIsFocused(true)}
                onSubmitEditing={() => setIsFocused(false)}
                style={{width: '100%',fontSize: moderateScale(14)}}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                placeholder={placeholder? placeholder : ''}
                value={value}
                multiline={multiline}
            />
        </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({
    container: {
        width: '90%',
        
        borderWidth: 1,
        alignSelf: 'center',
        marginTop: moderateVerticalScale(15),
        borderRadius: moderateVerticalScale(10),
        justifyContent: 'center',
        paddingHorizontal: moderateScale(20),
    }
})