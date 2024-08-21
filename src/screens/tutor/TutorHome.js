import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import LiveCourses from './bottom-tabs/LiveCourses';
import CourseSell from './bottom-tabs/CourseSell';
import TutorProfile from './bottom-tabs/TutorProfile';
import { THEME_COLOR } from '../../utils/colors';

const Bottom = createBottomTabNavigator();
const TutorHome = () => {
    return (
        <Bottom.Navigator screenOptions={{
            tabBarStyle:{
                height: 60
            }
        }}>
            <Bottom.Screen name="LiveCourses" component={LiveCourses} options={{
                tabBarIcon: ({ size, focused }) => {
                    return <Image
                        source={require('../../images/icons/live.png')}
                        style={{ tintColor: focused ? THEME_COLOR : 'black', width: size, height: size }}
                    />
                },
                tabBarLabel: ({ size, focused }) => <Text style={{ color: focused ? THEME_COLOR : 'black', fontSize: size }}>Courses</Text>
            }} />
            <Bottom.Screen name="CourseSell" component={CourseSell} options={{
                tabBarIcon: ({ size, focused }) => {
                    return <Image
                        source={require('../../images/icons/sell.png')}
                        style={{ tintColor: focused ? THEME_COLOR : 'black', width: size, height: size }}
                    />
                },
                tabBarLabel: ({ size, focused }) => <Text style={{ color: focused ? THEME_COLOR : 'black', fontSize: size }}>Order History</Text>
            }} />
            <Bottom.Screen name="TutorProfile" component={TutorProfile} options={{
                tabBarIcon: ({ size, focused }) => {
                    return <Image
                        source={require('../../images/icons/user.png')}
                        style={{ tintColor: focused ? THEME_COLOR : 'black', width: size, height: size }}
                    />
                },
                tabBarLabel: ({ size, focused }) => <Text style={{ color: focused ? THEME_COLOR : 'black', fontSize: size }}>Profile</Text>
            }} />
        </Bottom.Navigator>
    )
}

export default TutorHome

const styles = StyleSheet.create({})