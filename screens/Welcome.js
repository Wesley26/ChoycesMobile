import React from 'react';
import { Text, 
        TouchableWithoutFeedback,
        View, } from 'react-native';

//tailwind import
import { tailwind, fontConfig } from '../tailwind.js';

//custom component import
import Logo from '../components/logo';

export default Welcome = ({ navigation }) => {
    return(
        <TouchableWithoutFeedback 
        onPress={() => navigation.navigate('LoginSign')}>

            <View  style={tailwind('flex-1 justify-center')}>

            <Logo/>

                <Text style={[ 
                            fontConfig.fontFamilyText,
                            tailwind('text-38pix font-bold self-center -top-40')
                            ]}>
                    WELCOME
                </Text>

            </View>

        </TouchableWithoutFeedback>
    )
};

/**
const styles = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent: 'center'

    },
    image: {
        resizeMode: 'contain',
        marginTop: 120,
        alignSelf: 'center',
    },
    text: {
       
        fontSize:38,
        fontWeight: 'bold',
        alignSelf: 'center',
        top: -40

    }
})
*/