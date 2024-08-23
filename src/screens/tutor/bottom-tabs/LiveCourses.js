import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { BG_COLOR, THEME_COLOR } from '../../../utils/colors'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import CourseItem from '../../../components/courses/CourseItem'
import AsyncStorage from '@react-native-async-storage/async-storage'
import firestore from '@react-native-firebase/firestore';

const LiveCourses = () => {
    const navigation = useNavigation()
    const isFocused = useIsFocused()
    const [courses, setCourses] = useState([])

    useEffect(()=>{ 
        getCourses()
    },[isFocused])

    const getCourses = async () => {
        const userId = await AsyncStorage.getItem('USERID')
        const data = await firestore().collection('courses').where('userId', '==', userId).get()
        // console.log(data.docs[0].id);
        
        setCourses(data.docs)
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={courses}
                keyExtractor={(item) => item.id}
                renderItem={({ item , index }) => (
                    <CourseItem item={item} index={index} length={5} />
                )}
            />
            <TouchableOpacity style={styles.addBtn} onPress={() => navigation.navigate("AddNewCourses")}>
                <Image source={require('../../../images/icons/plus.png')} style={styles.addImg} />
                
            </TouchableOpacity>

        </View>
    )
}

export default LiveCourses

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BG_COLOR,

    },
    addBtn: {
        flexDirection: 'row',
        gap: moderateScale(10),
        height: verticalScale(50),
        width: verticalScale(50),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: THEME_COLOR,
        position: 'absolute',
        bottom: moderateScale(20),
        right: moderateScale(20),
        borderRadius: moderateScale(30),
        paddingHorizontal: moderateScale(15),
        elevation: 5
    },
    addText: {
        fontSize: moderateScale(16),
        fontWeight: 'bold',
        color: 'white'
    },
    addImg: {
        width: scale(16),
        height: verticalScale(16),
        tintColor: 'white'
    }

})