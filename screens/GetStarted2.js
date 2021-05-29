import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
//import { firebase } from '../src/firebase/config'; //firebase had to be removed for now

//tailwind import
import { tailwind, 
        fontConfig, 
        colorConfig } from '../tailwind.js';

//custom component import
import Logo from '../components/logo';
import { Ionicons } from '@expo/vector-icons';
import Btn from '../components/button';


export default GetStarted2 = ({ navigation, route }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verify, setVerify] = useState('');
    const [phone, setPhone] = useState('');

    const { type } = route.params;

    const onRegisterPress = () => {

        console.log("You have successfully registered!");

        /**
        //Come back to this once we figure out the firebase situation - WesD.

        if (password !== verify) {
            Alert.alert("Passwords don't match.")
            return
        }
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const data = {
                    id: uid,
                    email,
                    name,
                    phone,
                    type
                };
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .set(data)
                    .then(() => {
                        Alert.alert("Profile Created!")
                        navigation.navigate('LoginPage')
                    })
                    .catch((error) => {
                        Alert.alert(error.message)
                    });
            })
            .catch((error) => {
                Alert.alert(error.message)
            }) 
    */
    }
    return (
        <View style={tailwind('flex-1')}>
            <Logo />
            <View style={tailwind('flex-2 text-center content-center -top-50')}>
                <Text style={[
                                fontConfig.fontFamilyText,
                                tailwind('mt-30pix text-25pix text-center font-bold')
                            ]}>
                    Get Started with your {type} account
            </Text>
            </View>
            <View style={[
                            colorConfig.borderColor,
                            tailwind('flex-10 justify-start border-t-2')
                        ]}>
                <ScrollView>

                    <View style={tailwind('py-3')}>

                        <View style={tailwind('flex-1 flex-row bg-nameTextBox h-45pix w-80percent rounded-full mt-15pix self-center text-18pix items-center')}>
                            <Ionicons name='person-circle-outline' size={30} color="white" style={tailwind('pl-20pix pr-5pix')} />
                            <TextInput
                                style={tailwind('text-center w-60percent text-white text-20pix pt-5pix')}
                                placeholder='Full Name'
                                placeholderTextColor='white'
                                iconName='person-circle-outline'
                                value={name}
                                onChangeText={(value) => setName(value)}
                            />
                        </View>

                        <View style={tailwind('flex-1 flex-row bg-emailTextBox h-45pix w-80percent rounded-full mt-15pix self-center text-18pix items-center')}>
                            <Ionicons name='mail-outline' size={30} color="white" style={tailwind('pl-20pix pr-5pix')} />
                            <TextInput
                                style={tailwind('text-center w-60percent text-white text-20pix pt-5pix')}
                                placeholder='Email'
                                placeholderTextColor='white'
                                value={email}
                                onChangeText={(value) => setEmail(value)}
                            />
                        </View>


                        <View style={tailwind('flex-1 flex-row bg-phoneTextBox h-45pix w-80percent rounded-full mt-15pix self-center text-18pix items-center')}>
                            <Ionicons name='call-outline' size={30} color="white" style={tailwind('pl-20pix pr-5pix')} />
                            <TextInput
                                style={tailwind('text-center w-60percent text-white text-20pix pt-5pix')}
                                placeholder='Phone'
                                placeholderTextColor='white'
                                value={phone}
                                keyboardType='phone-pad'
                                onChangeText={(value) => setPhone(value)}
                            />
                        </View>

                        <View style={tailwind('flex-1 flex-row bg-passwordTextBox h-45pix w-80percent rounded-full mt-15pix self-center text-18pix items-center')}>
                            <Ionicons name='lock-open-outline' size={30} color="white" style={tailwind('pl-20pix pr-5pix')} />
                            <TextInput
                                style={tailwind('text-center w-60percent text-white text-20pix pt-5pix')}
                                placeholder='Password'
                                placeholderTextColor='white'
                                secureTextEntry={true}
                                value={password}
                                onChangeText={(value) => setPassword(value)}
                            />
                        </View>

                        <View style={tailwind('flex-1 flex-row bg-passwordTextBox h-45pix w-80percent rounded-full mt-15pix self-center text-18pix items-center')}>
                            <Ionicons name='lock-open-outline' size={30} color="white" style={tailwind('pl-20pix pr-5pix')} />
                            <TextInput
                                style={tailwind('text-center w-60percent text-white text-20pix pt-5pix')}
                                placeholder='Retype Password'
                                placeholderTextColor='white'
                                secureTextEntry={true}
                                value={verify}
                                onChangeText={(value) => setVerify(value)}
                            />
                        </View>

                    </View>
                    <Btn
                        style={tailwind('bg-createAcctBtn w-40percent h-40pix m-5pix')}
                        buttontext="Create"
                        onPress={() => onRegisterPress()}
                    />


                    <View style={tailwind('flex-1 my-20pix justify-end items-center')}>
                        <Text>
                            Already have an account?
            </Text>

                        <TouchableOpacity 
                            onPress={() => navigation.navigate('LoginPage')}>
                                
                            <Text style={[
                                        colorConfig.textColorBlue, 
                                        tailwind('text-18pix')
                                    ]}>
                                Login
                            </Text>

                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </View>

        </View>

    );

};

/**
const styles = StyleSheet.create({

    screen: {
        flex: 1,
    },

    icon: {
        paddingLeft: 20,
        paddingRight: 5,
    },
    inputStyle: {
        textAlign:'center',
        width: '60%',
        color: 'white',
        fontSize: 20,
        paddingTop: 5,
    },
    bottomLink: {
        flex: 1,
        marginTop: 20,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 20,
    }

});
*/
