import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View, SectionList, Button, Alert, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { Customers, SectionTitle } from '../components';
import Api from '../classes/Api.js'





const OrdersList = ({ navigation } = this.props) => {


  const [orders, setOrders] = useState([]);

  useEffect(() => {


    Api.getOrders().then(data => {
      setOrders(data);
    });

  }, []
  )
  if (Object.keys(orders).length > 0) {
    return (
      <Container >
        <SafeAreaView>
          <ScrollView>

            {/* <Text>{JSON.stringify(orders)}</Text> */}
            {

              orders.map(item => {
                return (
                  <TouchableOpacity onPress={() => navigation.push('Order', { id: item.id })}>
                    <Line>
                      <View key={item.id}>
                        <Text>№{item.id}</Text>
                        <Text>{item.work_name}</Text>

                        <Text>{item.status_name}</Text>
                      </View>

                    </Line>
                  </TouchableOpacity>


                )
              })
            }



          </ScrollView>
        </SafeAreaView>

        <PlusButton onPress={() => navigation.push('AddO')}>
          <Ionicons name="ios-add" size={36} color="white" />
        </PlusButton>
      </Container>
    );
  }
  else {
    return (
      <Container >
        <Tekst>Нажмите на плюсик штобы сделать заказ</Tekst>
        <PlusButton onPress={() => navigation.push('AddO')}>
          <Ionicons name="ios-add" size={36} color="white" />
        </PlusButton>
      </Container>

    )
  }

};


const Tekst = styled.Text`

font-weight: bold;
font-size: 25px;
color:#79C7E4;
`;
const Line = styled.View`
flex:1;
padding:2%;
border-radius: 15px;
margin: 0 3%;
margin-top:2%;
background: #fff;
`;

const HeaderHome = styled.View`
  flex: 1;
  alignItems: center;
  justifyContent: center;
  `;
const PlusButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    width: 64px;
    height: 64px;
    background: #79C7E4;
    position: absolute; 
    right: 25px;
    bottom: 25px;
    shadow-color: #2A86FF;
    shadow-opacity: 0.7;
    shadow-radius: 2.5;
    elevation: 5;
  `;
const Container = styled.View`  
    flex:  1;
    background: #03466C;
  
    
  `;


export default OrdersList;