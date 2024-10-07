import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useDebugValue, useEffect } from 'react'
import { BG_COLOR, TEXT_COLOR, THEME_COLOR } from '../../utils/colors'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { useNavigation, useRoute } from '@react-navigation/native'
import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage'
import auth from '@react-native-firebase/auth';


const Login = () => {

    const route = useRoute()
    const navigation = useNavigation()

    console.log("Login screen")

    const _signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            storeData(userInfo)
        } catch (error) {
            console.log({ ...error })
            if (error) {
                switch (error.code) {
                    case statusCodes.SIGN_IN_CANCELLED:
                        // user cancelled the login flow
                        break;
                    case statusCodes.IN_PROGRESS:
                        // operation (eg. sign in) already in progress
                        break;
                    case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
                        // play services not available or outdated
                        break;
                    default:
                    // some other error happened
                }
            } else {
                // an error that's not related to google sign in occurred
            }
        }
    };


    const storeData = async (data) => {
        const collection = route.params.screen == 'tutor' ? 'tutors' : 'learners'
        await firestore().collection(collection).doc(data.user.id).set(data)
        await AsyncStorage.setItem('NAME', data.user.name)
        await AsyncStorage.setItem('EMAIL', data.user.email)
        await AsyncStorage.setItem('PHOTO', data.user.photo)
        await AsyncStorage.setItem('USERID', data.user.id)
        if (route.params.screen == 'tutor') {
            navigation.navigate("TutorHome")
        }
    }
    
    // const storeDataAuth = async (data) => {
    //     console.log(data);
        
    //     const collection = route.params.screen == 'tutor' ? 'tutors' : 'learners'
    //     await firestore().collection(collection).doc(data.uid).set(JSON.parse(JSON.stringify(data)))
    //     await AsyncStorage.setItem('NAME', data.displayName)
    //     await AsyncStorage.setItem('EMAIL', data.email)
    //     await AsyncStorage.setItem('PHOTO', data.photoURL)
    //     await AsyncStorage.setItem('USERID', data.uid)
    //     if (route.params.screen == 'tutor') {
    //         navigation.navigate("TutorHome")
    //     }
    // }

    // const onGoogleButtonPress = async () => {
    //     await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    //     // Get the users ID token
    //     const { idToken } = await GoogleSignin.signIn();

    //     // Create a Google credential with the token
    //     const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    //     const userInfo = await auth().signInWithCredential(googleCredential)
    //     console.log(userInfo.user);
        
    //     storeDataAuth(userInfo.user)
    //     // Sign-in the user with the credential
    //     return userInfo;

    // }


    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '303212196830-pm9i6foodtee90fsd5md0npog3391rvm.apps.googleusercontent.com',
        })
    }, [])


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={BG_COLOR} />
            <Image source={require('../../images/login.png')} style={styles.banner} />
            <Text style={styles.heading}>Welcome user,</Text>
            <TouchableOpacity style={styles.loginBtn} onPress={() => {
                _signIn()
            }}>
                <Image source={require('../../images/google.png')} style={styles.google} />
                <Text style={styles.btnText}>Login with google</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BG_COLOR,
        justifyContent: 'space-around',
        // alignItems: 'center'
    },
    banner: {
        width: '100%',
        height: verticalScale(300)
    },
    heading: {
        color: TEXT_COLOR,
        fontWeight: '600',
        fontSize: moderateScale(20),
        marginLeft: moderateScale(20),
        marginTop: moderateScale(20),
    },
    loginBtn: {
        width: '90%',
        height: verticalScale(50),
        alignSelf: 'center',
        backgroundColor: BG_COLOR,
        marginTop: moderateScale(20),
        borderRadius: moderateScale(10),
        elevation: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: moderateScale(20)

    },
    google: {
        width: scale(30),
        height: scale(30),
    },
    btnText: {
        color: THEME_COLOR,
        fontSize: moderateScale(18),
        fontWeight: '600',
    }
})