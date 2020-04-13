import React from 'react';
import { StyleSheet, Text, View, SectionList,Button } from 'react-native';
 
import styled from 'styled-components/native';

import {Customers,SectionTitle} from '../components';



function HomeScreen({ navigation }) {
    return (
  <Container>
        
     
      <Text>Домашняя страница приложения</Text> 
      <Button
       title="Перейти к заказам"
       onPress={() => navigation.push('Customers')}
     />
   </Container>
    );
  };


const HeaderHome= styled.View`
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
const Container = styled.View `  
 flex: 1;
  margin-left: 20px;
  margin-right: 20px;
  
`;
export default HomeScreen;