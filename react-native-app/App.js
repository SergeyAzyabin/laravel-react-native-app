import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';
import { Register } from './components/Register';
import { TaskList } from './components/TaskList';


export default function App() {
  
  return (

    <View style={styles.container}>
      <Register/>
      {/* <TaskList/> */}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

    justifyContent: 'center',
  },
  
});
