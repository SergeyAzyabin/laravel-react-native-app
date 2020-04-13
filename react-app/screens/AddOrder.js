
import React, { Component, useState, useEffect } from 'react';
import { View, Button, TextInput, Alert, Text, Picker } from 'react-native';
import styled from 'styled-components/native';

import axios from 'axios';
import { useForm } from 'react-hook-form';
import qs from 'query-string';
import * as SecureStore from 'expo-secure-store';
import Api from '../classes/Api.js'



const AddOrder = ({ navigation }) => {
  const [text, setText] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedValue, setSelectedValue] = useState("Тип работы");

  const onSubmit = data => {
    Api.addOrder(data).then(() => {
      navigation.push('Orders');
      // alert('SLAVA UKRAINA!!!!');
    });





  }
  const { register, handleSubmit, setValue } = useForm();
  useEffect(() => {
    Api.getCategories().then(data => {
      setCategories(data);
    });
    register('comment');
    register('work_id')

  }, [register]);


  return (
    <View>
      <InputType placeholder='comment' onChangeText={(text) => { setValue('comment', text) }}></InputType>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedValue(itemValue);
          setValue('work_id', itemValue)
        }}>
        {
          categories.map(item => {
            return (
              <Picker.Item label={item.name} value={item.id} />
            )
          })
        }
      </Picker>
      <Button
        color="#3366CC"
        title="ADD"
        onPress={handleSubmit(onSubmit)}
      />
      <Text>{text}</Text>


    </View>


  );
};




const InputType = styled.TextInput`
  margin-right: 15px;
  border-radius: 20px;
  width: 200px;
  height: 60px;
`;

const InputComments = styled.TextInput`
  margin-right: 15px;
  border-radius: 20px;
  width: 200px;
  height: 60px;
`;



export default AddOrder;
