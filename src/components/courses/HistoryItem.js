import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import { TEXT_COLOR } from '../../utils/colors'

const HistoryItem = () => {
    return (
        <View style={{
            width: '90%',
            height: verticalScale(100),
            alignSelf: 'center',
            marginTop: verticalScale(20),
            elevation: 5,
            backgroundColor: 'white',
            borderRadius: verticalScale(10),
        }}>
            <Text style={{
                color: TEXT_COLOR,
                fontSize: moderateScale(16),
                fontWeight: 'bold',
                marginTop: verticalScale(10),
                marginHorizontal: verticalScale(10)
            }}>React Native full zero to hero</Text>

            <Text style={{
                color: TEXT_COLOR,
                fontSize: moderateScale(14),
                fontWeight: '500',
                marginTop: verticalScale(5),
                marginHorizontal: verticalScale(10),
                opacity: 0.8
            }}>This course will teach you react natice from basic to advanced </Text>
        </View>
    )
}

export default HistoryItem

const styles = StyleSheet.create({})