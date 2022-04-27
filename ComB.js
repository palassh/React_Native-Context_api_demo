import React, { useContext } from 'react';
import {View, Text} from 'react-native';
import ComC from './ComC';
import { Firstname, Lastname } from './App';

function ComB() {
   const fname = useContext(Firstname);
    const lname = useContext(Lastname);

  return(
    <View>
      <Text>My name is {fname} {lname}</Text>
      <ComC/>
    </View>
  )
}

export default ComB;