import React , { Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import qs from 'query-string';
import * as SecureStore from 'expo-secure-store';
import styled from 'styled-components/native';

let renderCount = 0;
const registerUrl = 'http://192.168.31.142/api/register';


export const Registrations = ({ navigation }) => {
    


  const onSubmit = data => {
    
    axios.post(
        registerUrl, 
        qs.stringify(data),
        {
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded'
                //other header fields
          },
          validateStatus: function (status) {
            return status < 400; // Reject only if the status code is greater than or equal to 500
          }
        }
    ).then((response) => {
          
        // const token = '';
        SecureStore.setItemAsync('token', response.data.access_token);
        
        
        navigation.push('Log');
    });
    
  }
  const { register, handleSubmit, setValue } = useForm();
    
  useEffect(()=>{
    register('name')
    register('email')
    register('password')
    register('password_confirmation')
  },[register]);

  renderCount++;


  
    
  

    
    

    

    
        return(
            <View style={styles.registerContainer}>
                <Text>Регистрация</Text>
                <View style={styles.row}>
                  {/* <Text style={styles.text}>Name</Text> */}
                  <Line placeholder='Name' style={styles.input} onChangeText={(text)=>{
                    setValue('name' ,text)
                  }}></Line>
                </View>
                  <View style={styles.row}>
                    {/* <Text>Email</Text> */}
                      <Line placeholder='Email' style={styles.input} onChangeText={(text)=>{
                        setValue('email' ,text)
                      }}></Line>
                </View>
                <View style={styles.row}>
                    {/* <Text>Password</Text> */}
                    <Line placeholder='Password' style={styles.input} onChangeText={(text)=>{
                      setValue('password' ,text)
                    }}></Line>
                </View>
                <View style={styles.row}>
                {/* <Text>Password Confirmation:</Text> */}
                <Line placeholder='Password Confirmation' style={styles.input} onChangeText={(text)=>{
                  setValue('password_confirmation' ,text)
                }}></Line>
                </View>
              
                <View style={styles.buttonWrap}>
                    <Button
                        style={styles.button}
                        color="#3366CC"
                        title="Register"
                        onPress={handleSubmit(onSubmit)}
                    >
                    </Button>
                </View>
                
                    
            </View>
            
        );
    


        // .url,{
        //     name:'',
        //     email:'',
        //     password:'',
        //     password_confirmation:''
            
        // }
    



}
const Line = styled.TextInput`
flex:1;
padding:2%;
border-radius: 15px;
margin: 0 3%;
margin-top:2%;
background: #fff;
`;

const styles = StyleSheet.create({
    registerContainer:{
      paddingLeft:30,
      paddingRight:30
    },
    input: {
      // marginRight:10,
      
      
     
      paddingLeft:20,
      paddingRight:20,
      marginTop:20,
      width:'100%',
      
      
    },
    buttonWrap: {
      marginTop:20,
    },
    row:{
      flexDirection:'row',
      // alignItems:'flex-end',
      // justifyContent:'flex-start'
      width:'100%'

    },
    text:{
      maxWidth:'30%',
      


    }
  });
 