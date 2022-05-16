import { View, Text, Image, TextInput, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view';
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import KeyboardAvoider from '../../components/KeyboardAvoider'
import CustomButton from '../../components/CustomButton'
import CustomLink from '../../components/CustomLink'
import DateTimePicker from '@react-native-community/datetimepicker';
import { RadioButton } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";


const Register = () => {

    const [checked, setChecked] = React.useState('first');

    const [date, setDate] = useState(new Date())
    const [mode, setMode] = useState('date')
    const [show, setShow] = useState(false)
    const [text, setText] = useState('Date of birth')

    const navigation = useNavigation()

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate)
        let fdate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + (tempDate.getFullYear())
        setText(fdate)
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const onTextPressed = () => {
        navigation.goBack()
    }

    const onRegisterPressed = () => {
        navigation.navigate('Address')
    }

    return (
        <KeyboardAvoider>
            <SafeAreaView>
                <View style={{ paddingHorizontal: 25 }}>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={require('../../../assets/register.png')} style={styles.img} />
                    </View>
                    <Text style={styles.header}>Register</Text>

                    <View style={styles.inputView}>
                        <AntDesign name='user' size={20} color="#7c5dc1" style={{ marginRight: 5 }} />
                        <TextInput placeholder='Full Name' style={{ flex: 1, paddingVertical: 0 }} keyboardAppearance="dark" />
                    </View>

                    <View style={styles.inputView}>
                        <MaterialCommunityIcons name='face-man-outline' size={20} color="#7c5dc1" style={{ marginRight: 5 }} />
                        <TextInput placeholder="Father's Full Name" style={{ flex: 1, paddingVertical: 0 }} secureTextEntry={true} keyboardAppearance="dark" />
                    </View>

                    <View style={styles.inputView}>
                        <MaterialCommunityIcons name='face-woman-outline' size={20} color="#7c5dc1" style={{ marginRight: 5 }} />
                        <TextInput placeholder="Mother's Full Name" style={{ flex: 1, paddingVertical: 0 }} secureTextEntry={true} keyboardAppearance="dark" />
                    </View>

                    <View style={styles.inputView}>
                        <AntDesign name='calendar' size={20} color="#7c5dc1" style={{ marginRight: 5 }} />
                        <TouchableWithoutFeedback onPress={() => {
                            showMode('date')
                        }} onLongPress={() => { setShow(false) }}>
                            <Text style={{ color: '#666' }}>{text}</Text>
                        </TouchableWithoutFeedback>
                    </View>

                    <View style={styles.radio}>
                        <RadioButton
                            value="first"
                            status={checked === 'first' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('first')}
                            color="#7c5dc1"
                        />
                        <Text style={{ paddingVertical: 7 }}>Male</Text>
                    </View>
                    <View style={styles.radio}>
                        <RadioButton
                            value="second"
                            status={checked === 'second' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('second')}
                            color="#7c5dc1"
                        />
                        <Text style={{ paddingVertical: 7}}>Female</Text>
                    </View>


                    
                    {show && (
                        <DateTimePicker
                            testID='datePicker'
                            value={date}
                            mode={mode}
                            display="spinner"
                            onChange={onChange}
                        />
                    )}
                    <CustomButton onPress={onRegisterPressed} text='Register' />
                    <CustomLink onPress={onTextPressed} text='Login' />
                </View>
            </SafeAreaView>
        </KeyboardAvoider>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 28,
        fontWeight: '500',
        color: '#333',
        marginBottom: 30
    },
    img: {
        height: 180,
        width: 260,
        marginBottom: 30,
        marginTop: 70
    },
    inputView: {
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25
    },
    radio: {
        flexDirection: 'row', borderWidth: 1, borderColor: '#7c5dc1', borderRadius: 10, marginBottom: 10, marginTop: 0 
    }
})

export default Register