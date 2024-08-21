import {  FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import { TEXT_COLOR } from '../../../utils/colors'
import HistoryItem from '../../../components/courses/HistoryItem'

const CourseSell = () => {
    return (
        <View style={styles.container}>
            <View style={styles.gridView}>
                <View style={styles.gridCard}>
                    <Text style={styles.heading}>₹ 50000</Text>
                    <Text style={styles.title}>Total sale</Text>
                </View>
                <View style={styles.gridCard}>
                    <Text style={styles.heading}>10</Text>
                    <Text style={styles.title}>Courses sold </Text>
                </View>
            </View>

            <Text style={[styles.heading,
                {
                    marginLeft: moderateScale(20),
                    marginVertical: moderateScale(10),
                }
            ]}>History</Text>
            <FlatList
                data={[1, 2, 3, 4, 5]}
                keyExtractor={(item) => item.toString()}
                renderItem={({ item }) => (
                    <HistoryItem />
                )}
            />
        </View>
    )
}

export default CourseSell

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    gridView:{
        width: '90%',
        height: verticalScale(100),
        justifyContent:'space-between', 
        alignSelf:'center',
        flexDirection:'row',
        marginTop: moderateScale(20),  
    },
    gridCard:{
        width: '45%',
        height: '100%',
        backgroundColor:'white',
        borderRadius: moderateScale(10),
        elevation: 5,
        justifyContent:'center',
        alignItems:'center'
    },
    heading:{
        fontSize: moderateScale(20),
        fontWeight:"600",
        color:TEXT_COLOR,
    },
    title:{
        fontSize: moderateScale(14),
        fontWeight:"500",
        color:TEXT_COLOR,
        
    }
})