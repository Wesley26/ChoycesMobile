import React from 'react';
import { View } from 'react-native';

//tailwind import
import { tailwind } from '../tailwind.js';

//custom component import
import RoundBtn from '../components/button';
import Logo from '../components/logo'



export default LoginSign = ({ navigation }) => {
    return (
        <View style={tailwind('flex-1 pt-40percent')}>

            <Logo />

            <RoundBtn buttontext="Login"
                style={tailwind('bg-loginBtn')}
                onPress={() => navigation.navigate('LoginPage')}
            />

            <RoundBtn buttontext="Sign Up"
                style={tailwind('bg-signBtn')}
                onPress={() => navigation.navigate('GetStarted')}
            />



        </View>

    )
};

/**
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: "40%"
    },
    loginBtn: {
        backgroundColor: '#ffa500',
    },
    signBtn: {
        backgroundColor: '#d6204e',
    },
});
*/
