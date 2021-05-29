import React from 'react';
import { Button, View } from 'react-native';

//tailwind import
import { tailwind } from '../tailwind.js';

/* 
I am currently using the custom component import, but I will change it to a standalone since it'll be a submission button. Also, I think I will turn these inputs into pure components tomorrow 

Update 1: Created an input component, but not sure about passing down values, will look into "props." Also needs a true submit button. secureTextEntry deals with obscuring password input. 
*/

import RoundBtn from '../components/button';
import Input from '../components/input';
import Logo from '../components/logo';



export default LoginPage = ({ navigation }) => {
    return (
        <View style={tailwind('flex-1 flex-col justify-center')}>

        <Logo/>

            <Input
                style={tailwind('bg-loginBtn')}
                placeholder='Username'
                placeholderTextColor='white'
                iconName='person-circle-outline'
            />        

            <Input
                style={tailwind('bg-password')}
                placeholder='Password'
                placeholderTextColor='white'
                iconName='lock-open-outline'
               //secureTextEntry 
            />
           
            <RoundBtn buttontext="Login"
                style={tailwind('bg-loginBtn2 mt-15pix')}
                onPress={() => navigation.navigate('Welcome')}
            />
            <View style ={tailwind('mt-30pix')}>
            <Button title=" EduLanding" onPress={() => navigation.navigate('EduLanding')}/>
            <Button title=" EmpLanding" onPress={() => navigation.navigate('EmpLanding')}/>
            <Button title=" StudentLanding" onPress={() => navigation.navigate('StudentLanding')}/>
            <Button title=" ParentLanding" onPress={() => navigation.navigate('ParentLanding')}/>
</View>

        </View>

    )

};

/**
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection:'column',
        justifyContent: 'center'
    },
    username: {
        backgroundColor: '#ffa500',
    },

    password: {
        backgroundColor: '#d6204e',
    },
    loginBtn: {
        backgroundColor: '#23b5ce',
        marginTop: 15,
    },
    image: {
        width: '80%',
        resizeMode: 'contain',
        marginTop: 80,
        alignSelf: 'center',
    }
});
*/
