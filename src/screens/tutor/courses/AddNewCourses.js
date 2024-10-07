import { Image, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { BG_COLOR, THEME_COLOR } from '../../../utils/colors'
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters'
import CustomInput from '../../../components/CustomInput'
import BgButton from '../../../components/BgButton'
import { launchImageLibrary } from 'react-native-image-picker';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import Loader from '../../../components/Loader'



const AddNewCourses = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('')
    const [price, setPrice] = useState('')
    const [active, setActive] = useState(true)
    const [bannerImage, setBannerImage] = useState('')
    const [loading, setLoading] = useState(false)
    const navigation = useNavigation()

    const addBanner = async () => {
        const result = await launchImageLibrary({ mediaType: 'photo',quality: 0.5 });
        console.log(result);
        if (!result.didCancel) {
            setBannerImage(result)
        }

    }

    const uploadCourse = async () => {
        setLoading(true)
        const userName = await AsyncStorage.getItem('NAME');
        const userImage = await AsyncStorage.getItem('EMAIL');
        const userId = await AsyncStorage.getItem('USERID');

        const reference = storage().ref(bannerImage.assets[0].fileName);
        const pathToFile = bannerImage.assets[0].uri;
        // uploads file
        await reference.putFile(pathToFile);
        const url = await storage().ref(bannerImage.assets[0].fileName).getDownloadURL();
        await firestore().collection('courses').add({
            title,
            description : desc,
            price,
            active,
            banner: url,
            userName,
            userImage,
            userId,
        })
        setLoading(false)
        navigation.goBack()
    }

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.banner} onPress={() => addBanner()} >

                {
                    bannerImage
                        ?
                        <Image source={{ uri: bannerImage.assets[0].uri }} style={{ width: '100%', height: '100%', borderRadius: moderateScale(20) }} />
                        :
                        <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../../../images/icons/plus.png')} style={styles.addImg} />
                            <Text style={styles.addText}> Add Course Banner</Text>
                        </View>

                }

            </TouchableOpacity>

            <CustomInput
                onChangeText={txt => {
                    setTitle(txt);
                }}
                placeholder='Course Title'
                value={title}
            />
            <CustomInput
                onChangeText={txt => {
                    setDesc(txt);
                }}
                placeholder='Enter Description'
                value={desc}
                multiline={true}
            />
            <CustomInput
                keyboardType={'numeric'}
                onChangeText={txt => {
                    setPrice(txt);
                }}
                placeholder='Price'
                value={price}
            />

            <View style={styles.activeView}>
                <Text style={styles.activeText}>Course is active:</Text>
                <Switch
                    value={active}
                    onValueChange={value => { setActive(value) }}
                    trackColor={{ false: '#767577', true: "#fcb195" }}
                    thumbColor={active ? THEME_COLOR : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                />
            </View>
            <View style={styles.gap}>
                <BgButton title={'Upload Course'} color={'white'} onClick={()=> uploadCourse()}/>
            </View>
            <Loader visible={loading} />

        </ScrollView>
    )
}

export default AddNewCourses

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BG_COLOR
    },
    banner: {
        width: '90%',
        height: verticalScale(180),
        borderWidth: 1,
        alignSelf: 'center',
        marginTop: moderateVerticalScale(20),
        borderRadius: moderateScale(20),
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#9e9e9e'
    },
    addImg: {
        width: scale(20),
        height: scale(20),
        tintColor: 'black'
    },
    addText: {
        fontSize: moderateScale(20),
        fontWeight: '600',
        color: 'black',
        marginTop: moderateVerticalScale(10)
    },
    activeView: {
        width: '90%',
        alignSelf: 'center',
        marginTop: moderateVerticalScale(20),
        marginBottom: moderateVerticalScale(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    activeText: {
        fontSize: moderateScale(16),
        fontWeight: '600'
    },
    gap: {
        marginBottom: moderateVerticalScale(50)
    }
})