import React from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import {Header} from react-native-elements;

export default class writeStoryScreen extends React.Component {
    
render() {
      return(
        
        <View style={styles.container}>
          <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'Monkey Chunky',
            style: { color: '#fff', fontSize: 20 },
          }}
        />
        <View style={styles.inputView}>
        <TextInput 
          style={styles.inputBox}
          placeholder="Story Title"/>
          <TextInput 
          style={styles.inputBox}
          placeholder="Story Author"/>
          <TextInput 
          style={styles.inputBox}
          placeholder=" Write your own Story "/>
        <TouchableOpacity 
          style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
        </View>
        </View>    
         
        );
      }
    }
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    inputView:{
      flexDirection: 'row',
      margin: 20
    },
    inputBox:{
      width: 200,
      height: 40,
      borderWidth: 1.5,
      borderRightWidth: 0,
      fontSize: 20
    },
    submitButton:{
       backgroundColor: '#FBC02D',
       width: 100,
      height:50 
        },
     submitButtonText:{
       padding: 10, 
       textAlign: 'center', 
       fontSize: 20, 
       fontWeight:"bold",
        color: 'white'
       }
  });