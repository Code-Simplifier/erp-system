import { View, Text, Image, TextInput, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view';
import React, { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
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


const Address = () => {

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

    return (
        <KeyboardAvoider>
            <SafeAreaView>
                <View style={{ paddingHorizontal: 25 }}>
                    <View style={{ alignItems: 'center', margin: 30 }}>
                        <FontAwesome name='address-card' size={200} color="#7c5dc1" />
                    </View>
                    <Text style={styles.header}>Address</Text>

                    <View style={styles.inputView}>
                        <Ionicons name='flag-outline' size={20} color="#7c5dc1" style={{ marginRight: 5 }} />
                        <TextInput placeholder='Country' style={{ flex: 1, paddingVertical: 0 }} keyboardAppearance="dark" />
                    </View>

                    <View style={styles.inputView}>
                        <Ionicons name='location-outline' size={20} color="#7c5dc1" style={{ marginRight: 5 }} />
                        <TextInput placeholder="State" style={{ flex: 1, paddingVertical: 0 }} secureTextEntry={true} keyboardAppearance="dark" />
                    </View>

                    <View style={styles.inputView}>
                        <FontAwesome name='address-book-o' size={20} color="#7c5dc1" style={{ marginRight: 5 }} />
                        <TextInput placeholder="Street Address" style={{ flex: 1, paddingVertical: 0 }} secureTextEntry={true} keyboardAppearance="dark" />
                    </View>

                    <View style={styles.inputView}>
                        <MaterialIcons name='alternate-email' size={20} color="#7c5dc1" style={{ marginRight: 5 }} />
                        <TextInput placeholder="Email Address" style={{ flex: 1, paddingVertical: 0 }} secureTextEntry={true} keyboardAppearance="dark" keyboardType='email-address' />
                    </View>

                    <View style={styles.inputView}>
                        <Feather name='phone' size={20} color="#7c5dc1" style={{ marginRight: 5 }} />
                        <TextInput placeholder="Phone Number" style={{ flex: 1, paddingVertical: 0 }} secureTextEntry={true} keyboardAppearance="dark" keyboardType='phone-pad' />
                    </View>

                    <View style={styles.radio}>
                        <RadioButton
                            value="first"
                            status={checked === 'first' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('first')}
                            color="#7c5dc1"
                        />
                        <Text style={{ paddingVertical: 7 }}>General</Text>
                    </View>
                    <View style={styles.radio}>
                        <RadioButton
                            value="second"
                            status={checked === 'second' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('second')}
                            color="#7c5dc1"
                        />
                        <Text style={{
                            paddingVertical: 7,
                        }}>Scheduled Caste</Text>
                    </View>
                    <View style={styles.radio}>
                        <RadioButton
                            value="third"
                            status={checked === 'third' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('third')}
                            color="#7c5dc1"
                        />
                        <Text style={{ paddingVertical: 7 }}>Scheduled Tribes</Text>
                    </View>
                    <View style={styles.radio}>
                        <RadioButton
                            value="fourth"
                            status={checked === 'fourth' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('fourth')}
                            color="#7c5dc1"
                        />
                        <Text style={{
                            paddingVertical: 7,
                        }}>Backward Classes</Text>
                    </View>

                    <CustomButton onPress={onTextPressed} text='Continue' />
                    <CustomLink onPress={onTextPressed} text='Edit Previous' />
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
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#7c5dc1',
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 0
    }
})

export default Address