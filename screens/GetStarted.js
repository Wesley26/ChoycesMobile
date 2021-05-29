import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

//tailwind import
import { tailwind, colorConfig } from '../tailwind.js';

import RoundBtn from '../components/button';
import Logo from '../components/logo';
import { Picker } from 'react-native-picker-dropdown'
import { Ionicons } from '@expo/vector-icons';


export default GetStarted = ({navigation}) => {

    const [loginType, setLoginType] = useState("educator");
    
    var type = `{type: "${loginType}"}`; //???
    
    return(
        <View style={tailwind('flex-1 content-center justify-end')}>
        <Logo/>
            <View style={tailwind('flex-0.4 flex-row justify-center w-85percent bg-nameTextBox rounded-full self-center items-baseline max-h-50pix min-h-50pix')}>
                    <Ionicons 
                        name="person-outline" 
                        size={24} 
                        color="white" 
                        style={tailwind('pl-10pix pt-5pix')} 
                    />
                <Picker
                    prompt= "select a login type"
                    style={tailwind('flex-1 self-center h-30pix')}
                    selectedValue={loginType}
                    onValueChange={(itemValue, itemIndex) =>
                    setLoginType(itemValue)}
                    mode="dropdown"
                    textStyle={[
                                colorConfig.textColorWhite,
                                tailwind('p-5pix text-18pix text-center')
                    ]}
                >

                            <Picker.Item label="Educator" value="educator" key="1"/>
                            <Picker.Item label="Employee" value="employee" key="2"/>
                            <Picker.Item label="Parent" value="parent" key="3"/>
                            <Picker.Item label="Student" value="student"  key="4"/>

                </Picker>
            </View>
        <View>
            <RoundBtn buttontext="Continue"
                    style={tailwind('bg-signBtn mt-10percent h-40pix')}
                    onPress={() => navigation.navigate('GetStarted2', {
                        type: loginType
                    })}
            />
        </View>

        <View style={tailwind('flex-1 justify-end items-center mb-20percent')}>
            <Text>
                Already have an account?
            </Text>


            <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}><Text style={{fontSize: 18, color: 'blue'}}>Login</Text></TouchableOpacity> 
        </View>

        </View>
    )

};

/**
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'flex-end'
    },
    container: {
        flex: 0.4,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '85%',
        bottom: -20,
        minHeight: 50,
        maxHeight: 50,
        borderRadius: 20,
        backgroundColor: '#ffa500',
        alignSelf: 'center',
        alignItems: 'baseline'


    },
    icon: {
        paddingLeft: 10,
        paddingTop: 5,
    },
    picker: {
        flex: 1,
        alignSelf:'center',
        height: 30,
        

    },
    pickerText: {

        padding: 5,
        color: '#FFFFFF',
        fontSize: 18,
        textAlign: 'center'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    signBtn: {
        marginTop: "10%",
        height: 40,
        textAlign: 'center',
        backgroundColor: '#d6204e',
    },
    bottomLink: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: "20%",
    }
});
*/