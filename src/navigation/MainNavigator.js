import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../screens/Splash';
import ChooseUser from '../screens/ChooseUser';
import Login from '../screens/Login/Login';
import TutorHome from '../screens/tutor/TutorHome';
import AddNewCourses from '../screens/tutor/courses/AddNewCourses';

const Stack = createStackNavigator();

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Splash"
                    component={Splash}
                    options={{
                        headerShown: false,
                    }}
                    
                />
                <Stack.Screen
                    name="ChooseUserType"
                    component={ChooseUser}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="TutorHome"
                    component={TutorHome}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="AddNewCourses"
                    component={AddNewCourses}
                    options={{
                        headerShown: true,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigator;

const styles = StyleSheet.create({});
