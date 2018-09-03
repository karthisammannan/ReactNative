import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';

class SampleScreen extends Component {

    render () {
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <StatusBar
                backgroundColor="#F5F5F5"
                barStyle="dark-content"
            /> 
            <View >         
                <Text>Auth Screen</Text>
             </View>     
            </View>
        );
    }
}

export default SampleScreen;