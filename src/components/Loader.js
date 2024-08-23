import { ActivityIndicator, Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { THEME_COLOR } from '../utils/colors'
import { scale } from 'react-native-size-matters'

const Loader = ({visible}) => {
    return (
        <Modal transparent visible={visible} style={{flex:1}} >
            <View style={{backgroundColor:'rgba(0,0,0,0.6)',flex:1, justifyContent: 'center',alignItems:'center'}} >
                <View style={{
                    width: scale(80),
                    height: scale(80),
                    borderRadius: 10,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <ActivityIndicator size="large" color={THEME_COLOR} />
                </View>
            </View>
        </Modal>
    )
}

export default Loader

const styles = StyleSheet.create({})