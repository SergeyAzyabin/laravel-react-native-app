import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import * as SecureStore from 'expo-secure-store';

import OrdersList from './screens/OrdersList'  ;
import HomeScreen from './screens/HomeScreen';
import OrderScreen from './screens/OrderScreen';
import AddOrder from './screens/AddOrder';
import {Registrations} from './screens/Registrations';
import {Login} from './screens/Login';

const AppNavigator = createStackNavigator();



function App(){
  return( 
    <NavigationContainer>
      <AppNavigator.Navigator  initialRouteName={"Orders,Order,AddO,Registr,Log"}>
     {/* <Image style={{height:50, width:100}} source={require('../Assets/Image.png')}/> */}
      <AppNavigator.Screen name="Log" component={Login} options={{ 
          title: 'Вход',
          headerStyle: {
            backgroundColor: '#79C7E4',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },

           }} />
      <AppNavigator.Screen name="Registr" component={Registrations} options={{ 
          title: 'Регистрация',
          headerStyle: {
            backgroundColor: '#79C7E4',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
           }} />
        <AppNavigator.Screen name="Orders" component={OrdersList} options={{
           title: 'Список заказов',
           headerStyle: {
            backgroundColor: '#79C7E4',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
            }} />
            <AppNavigator.Screen name="Order" component={OrderScreen} options={{
           title: 'Заказ',
           headerStyle: {
            backgroundColor: '#79C7E4',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
            }} />
            <AppNavigator.Screen name="AddO" component={AddOrder} options={{
           title: 'Добавить заказ',
           headerStyle: {
            backgroundColor: '#79C7E4',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
            }} />
       </AppNavigator.Navigator>
       
       
       
      
    </NavigationContainer>
  )
};

export default App;
