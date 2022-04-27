import React from 'react';
import { View, Text } from 'react-native';
import { Firstname, Lastname } from './App';

function ComC() {
    return (
        <View>
            <Firstname.Consumer> 
                {(fname) => {
                    return (
                        <Lastname.Consumer>{(lname) => {
                            return (
                            <Text style={{color:'red'}}>My name is {fname} {lname}</Text>
                            )
                        }}</Lastname.Consumer>
                    )
                }}
            </Firstname.Consumer>

        </View>
    )
}

export default ComC;
