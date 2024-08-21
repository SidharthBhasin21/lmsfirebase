import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import { TEXT_COLOR } from '../../utils/colors'

const CourseItem = ({item,index,length}) => {
    return (
        <View style={{
            width: '90%',
            height: verticalScale(200),
            alignSelf: 'center',
            marginTop: verticalScale(20),
            elevation: 5,
            backgroundColor: 'white',
            borderRadius: verticalScale(10),
            marginBottom: index == length - 1 ? verticalScale(100) : verticalScale(5)
            
        }}>
            <Image source={require('../../images/course.jpg')} style={{
                width: '100%',
                height: '60%',
                resizeMode: 'cover',
            }}/>
            <Text style={{
                color:TEXT_COLOR,
                fontSize: moderateScale(16),
                fontWeight: 'bold',
                marginTop: verticalScale(10),
                marginHorizontal: verticalScale(10)
            }}>React Native full zero to hero</Text>

            <Text style={{
                color:TEXT_COLOR,
                fontSize: moderateScale(14),
                fontWeight: '500',
                marginTop: verticalScale(5),
                marginHorizontal: verticalScale(10),
                opacity: 0.8
            }}>This course will teach you react natice from basic to advanced </Text>
        </View>
    )
}

export default CourseItem

const styles = StyleSheet.create({})