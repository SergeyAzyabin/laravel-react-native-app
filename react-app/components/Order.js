import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import qs from 'query-string';

const token ='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImJlNDhjNGY4YTRhZjY1OGU4M2U5NjZiY2YwZTYyYmE5M2UyYTllZTBkNTRiYjRiYmQ3Mjc3ZjUzNDViOWQyOGM0MTZmZGRlNWFlYjEyMjc4In0.eyJhdWQiOiIyIiwianRpIjoiYmU0OGM0ZjhhNGFmNjU4ZTgzZTk2NmJjZjBlNjJiYTkzZTJhOWVlMGQ1NGJiNGJiZDcyNzdmNTM0NWI5ZDI4YzQxNmZkZGU1YWViMTIyNzgiLCJpYXQiOjE1ODQ5NzczNDcsIm5iZiI6MTU4NDk3NzM0NywiZXhwIjoxNjE2NTEzMzQ3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.pFhJoOu9_bk41obIT-K-uj40b1PTOHOrKoMN7MmojvTYBmBCxBl2YXtfOxwXUD09BmfJfaJj_F_7UZ9XjUkcGQdWJ1X0azv87cp0zIBF32hH_lZoQafD2QXBHDC0YVy6KqD5_2_4DKJNT6HWKRz2u1i2U9EEHAMsXjy24uVvu9Xn1HythIjeEakeE0sGLDYm7IeiZlK4k1ut30mlXDB0HyVkI5Pam2pqZmUcPPDA3VMI_8K4HobJhOVQWZHCfcJQX4zWmt_AaSn6IJnzLeIQPlQewzmQOVmWyO5BIEBHNH_YaKbLPyRpxp3HqyeUN0vL_if4Z74j3UmHGeq6POODqVPMyP5n1f0jgEXoYdbDRAAl_13MxBTtlY7nVdp09e-ya6mLFiLZkyCEV5DG6veWLp1TwENfsrSGdyRbyX4nMhlZxTeCG8vNCztfLpM7HE0okSXVsLxiQGVMmAaPgOIvP_DyoUuyKV5SYBqbYhQI6q23S_6c-xHIwPVMi9dQQaT3nZyArhxesw57R9QsB5wT8fjViy5silXHb-TF-DHpImfLZq3IhIm_6x61N5A3vGr8Tt8orVzxLSc7lqw6hsD_u6SPHNBMlMNTKW3uhFX2sAkr5ZWM_0LXrPoLJOy_DUMrPrS5nS7g27YeXPFP2HFL-wI59PJQz-zD4x3n62dHBeM';
const registerUrl = 'http://192.168.31.142/api/register';
let renderCount = 0;

const GroupOrder = ({navigate}) => {
    const { addOrder, handleSubmit, setValue } = useForm();
    useEffect(()=>{
        
        addOrder('comments')

      },[register]);
return (
    <View>
        <InputType placeholder='comments' onChangeText={(text)=>{
setValue('password_confirmation' ,text )}}></InputType>
        <InputComments>{comments}</InputComments>
    </View>
  
    
);
};

Group.defaultProps = {
    groupTitle: 'Untitled',
    items: []
};


const InputType = styled.TextInput`
  margin-right: 15px;
  border-radius: 20px;
  width: 200px;
  height: 15px;
`;

const InputComments = styled.TextInput`
  margin-right: 15px;
  border-radius: 20px;
  width: 200px;
  height: 60px;
`;

const GroupItem = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color:#f3f3f3;
`;


export default GroupOrder;


