import React from 'react';
import {
    View, 
    Text,
    StyleSheet,
} from 'react-native';

export default class Alchemy extends React.Component {
    render () {
        return (
            <View>
                <Text style = {styles.alchemy} >Data from Alchemy js.</Text>
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    alchemy:  {
        backgroundColor: '#00FB65',
        fontSize: 24
    } 
});