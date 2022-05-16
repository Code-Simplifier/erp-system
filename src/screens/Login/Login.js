import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view';
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import KeyboardAvoider from '../../components/KeyboardAvoider'
import CustomButton from '../../components/CustomButton'
import CustomLink from '../../components/CustomLink/'
import { useNavigation } from "@react-navigation/native";

const Login = () => {

  const navigation = useNavigation()

  const onRegisterPressed = () => {
    navigation.navigate('Register')
  }

  return (
    <KeyboardAvoider>
      <SafeAreaView>
        <View style={{ paddingHorizontal: 25 }}>
          <View style={{ alignItems: 'center' }}>
            <Image source={require('../../../assets/login.png')} style={styles.img} />
          </View>
          <Text style={styles.header}>Login</Text>
          <View style={styles.inputView}>
            <AntDesign name='user' size={20} color="#7c5dc1" style={{ marginRight: 5 }} />
            <TextInput placeholder='Username' style={{ flex: 1, paddingVertical: 0 }} keyboardAppearance="dark" />
          </View>
          <View style={styles.inputView}>
            <Ionicons name='ios-lock-closed-outline' size={20} color="#7c5dc1" style={{ marginRight: 5 }} />
            <TextInput placeholder='Password' style={{ flex: 1, paddingVertical: 0 }} secureTextEntry={true} keyboardAppearance="dark" />
            <TouchableOpacity onPress={() => { }}>
              <Text style={{ color: '#7c5dc1', fontWeight: '700' }}>Forgot?</Text>
            </TouchableOpacity>
          </View>
          <CustomButton onPress={{}} text='Login' />
          <CustomLink onPress={onRegisterPressed} text='Register' />
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
    height: 250,
    width: 250,
    borderRadius: 200,
    borderColor: '#7c5dc1',
    borderWidth: 0.3,
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
})

export default Login