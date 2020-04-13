import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { Button } from 'react-native-elements';
import { Customers, SectionTitle } from '../components';
import Api from '../classes/Api.js'



function OrderScreen({ route, navigation }) {
  // const id = navigation.useNavigationParam('id');
  const id = route.params.id;
  const [order, setOrder] = useState([]);
  const deleteOrder = id =>{
    Api.deleteOrder(id).then(data => {
      alert('Заказ №' + id+'удален');
      navigation.push('Orders');
    });

  } 
  useEffect(() => {

    alert('Заказ №' + id);
    Api.getOrder(id).then(data => {
      setOrder(data);
    });
   

  }, []
  )

  return (


    <Container>


     
      <Line>
        <View key={order.id}>
          <Tekst>Заказ №{order.id}</Tekst>
          <Text>Вид работы:</Text>
          <Tekst>{order.work_name}</Tekst>
          <Text>Комментарии:</Text>
          <Tekst>{order.comment}</Tekst>
        </View>
        

        <Button
        title="Отменить заказ"
        type="clear"
        onPress={() => deleteOrder(id)}>
      </Button>
      </Line>
      
    </Container>
  );
};
const DeleteButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    width: 64px;
    height: 64px;
    background: red;
    position: absolute; 
    right: 25px;
    bottom: 25px;
    shadow-color: #2A86FF;
    shadow-opacity: 0.7;
    shadow-radius: 2.5;
    elevation: 5;
  `;


  const Tekst= styled.Text`

  font-weight: bold;
  font-size: 25px;
  color:#79C7E4;
  `;

const Line = styled.View`

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
  background: #2A86FF;
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
export default OrderScreen;