import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import { TEXT_COLOR } from '../../utils/colors'

const CourseItem = ({item,index,length}) => {
    // console.log(item);
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
            <Image source={{uri: item._data.banner}} style={{
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
            }}>{item._data.title}</Text>

            <Text style={{
                color:TEXT_COLOR,
                fontSize: moderateScale(14),
                fontWeight: '500',
                marginTop: verticalScale(5),
                marginHorizontal: verticalScale(10),
                opacity: 0.8
            }}>{item._data.description} </Text>
            <Text style={{
                color:'green',
                fontSize: moderateScale(14),
                fontWeight: '500',
                marginTop: verticalScale(5),
                marginHorizontal: verticalScale(10),
                opacity: 0.8
            }}>Price: ₹{item._data.price} </Text>
        </View>
    )
}

export default CourseItem

const styles = StyleSheet.create({})