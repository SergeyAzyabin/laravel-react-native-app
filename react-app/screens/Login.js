import React , { Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Alert,Linking, Icon,} from 'react-native';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import qs from 'query-string';
import * as SecureStore from 'expo-secure-store';
import Api from '../classes/Api.js'
import styled from 'styled-components/native';
import { Button } from 'react-native-elements';



let renderCount = 0;
const registerUrl = 'http://192.168.31.142/api/login';


export const Login = ({ navigation }) => {
    


  const onSubmit = data => {
    
    Api.login(data).then(() => {
      navigation.push('Orders');
      // alert('SLAVA UKRAINA!!!!');
    });
    
  }
  const { register, handleSubmit, setValue } = useForm();
    
  useEffect(()=>{
    // Api.checkAuth().then(() => {
    //   navigation.push('Orders');
      
    // });
    register('email')
    
    register('password')
    
  },[register]);

  renderCount++;


  
    
  

    
    

    

    
        return(
          <Container>
          <Tekst>У вас уже есть аккаунт?</Tekst>
            <View style={styles.registerContainer}>
                
                
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
               <Reg style={styles.buttonWrap}>
               <Button  type="clear" title="Регистрация"  onPress={() => navigation.push('Registr')}>
                    
                    </Button>
               </Reg>
             
                <View style={styles.buttonWrap}>
                    <Button
                        type="clear"
                        title="Вход"
                        backgroundcolor= "#79C7E4"
                        onPress={handleSubmit(onSubmit)}
                    >
                    </Button>

                </View>
                
                    
            </View>

            </Container>
        );
    


        // .url,{
        //     name:'',
        //     email:'',
        //     password:'',
        //     password_confirmation:''
            
        // }
    



}
const Reg = styled.View `
align-self: flex-end
  
`;
const Tekst = styled.Text `  
font-weight: bold;
font-size: 25px;
color:#79C7E4;
  
`;
const Container = styled.View `  
flex:  1;
  justify-content: center;
  align-items:center;
  background: #03466C;
  
`;
const Baton = styled.Button `  
border-radius: 15px;

  
`;
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
 