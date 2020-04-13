import styled from 'styled-components/native';
import React , { Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';



const Group = ({user, vidpraktiki, active, statys,navigate}) => {
  
return (
    <GroupItem onPress ={navigate.bind(this,'Order')}>
      <Avatar 
          source = {{
          uri:user.avatar
         }}
        />
          <View style={{flex:1}}>
            <FullName>{user.fullname}</FullName>
            <GrayText>{vidpraktiki}</GrayText>
          </View>
      <StatysText active={active}>{statys}</StatysText>
    </GroupItem>
);
};

Group.defaultProps = {
    groupTitle: 'Untitled',
    items: []
};

const StatysText = styled.Text`
  background: ${props => (props.active ? '#e9f5ff' : '#F08080')};
  color: ${props => (props.active ? '#4294ff' : '#fff')};
  border-radius: 18px;
  font-weight: 600;
  font-size: 14px;
  width: 90px;
  height: 32px;
  text-align: center;
  line-height: 35px;
`;

const GrayText = styled.Text`
  color: #8b979f;
  font-size: 16px;
`;

const FullName = styled.Text`
  font-weight: 600;
  font-size: 16px;
`;
const Avatar = styled.Image`
  margin-right: 15px;
  border-radius: 50px;
  width: 40px;
  height: 40px;
`;

const GroupItem = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color:#f3f3f3;
`;


export default Group;


