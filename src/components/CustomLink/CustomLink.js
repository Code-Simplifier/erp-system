import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import React from 'react'

const CustomLink = ({onPress, fgColor, text}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={[styles.linkText, fgColor ? {color: fgColor} : {}]}>{text}</Text>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    linkText: {
        color: '#7c5dc1', 
        fontWeight: '700', 
        alignSelf: 'center', 
        marginBottom: 30
    }
})

export default CustomLink