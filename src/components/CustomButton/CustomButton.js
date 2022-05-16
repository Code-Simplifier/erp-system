import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, bgColor, fgColor}) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, bgColor ? {backgroundColor: bgColor} : {}]}>
            <Text style={[styles.buttonText, fgColor ? {color: fgColor} : {}]}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#7c5dc1',
        borderRadius: 10,
        marginBottom: 20,
        marginTop: 20
    },
    buttonText: {
        color: '#fff',
        padding: 15,
        alignSelf: 'center'
    }
})

export default CustomButton