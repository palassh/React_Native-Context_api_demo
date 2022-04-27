import React, { createContext } from 'react';
import { View, StyleSheet } from 'react-native';
import ComA from './ComA';

const Firstname = createContext();
const Lastname = createContext();

function App() {
  return (
    <View style={styles.container}>
      <Firstname.Provider value={'Palash'}>
        <Lastname.Provider value={'Sahu'}>
          <ComA />
        </Lastname.Provider>
      </Firstname.Provider>
    </View>
  );
}

export default App;
export {Firstname, Lastname};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})