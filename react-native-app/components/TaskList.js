import React , { Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';



const USER_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjJiYjA3NjU2NTlhZjY0Mzg5MzI0ZTljMGRiMWRmZjcyMjAxMjUxNjFlNzM2ODNmOTdhYzI5ZTVhYTc1MTY0ZjZjYTM5ZDgyMDI0Y2I3NjM3In0.eyJhdWQiOiIyIiwianRpIjoiMmJiMDc2NTY1OWFmNjQzODkzMjRlOWMwZGIxZGZmNzIyMDEyNTE2MWU3MzY4M2Y5N2FjMjllNWFhNzUxNjRmNmNhMzlkODIwMjRjYjc2MzciLCJpYXQiOjE1ODM2MjE3NDcsIm5iZiI6MTU4MzYyMTc0NywiZXhwIjoxNjE1MTU3NzQ3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.X3mPh-Y3E3l8ZnLNldjI_zPW-AFtGI29Asj2FB9wvj-ujEtCnY1dfPORC9fA6ml9Uxxl6lYE5c2tzHWb8wlBQhR9VuvQdTxmxDCSBWUuwqs404s6MZpbbUFWK9PWneiPzoIyBe3tTAQQ3Cc9LN8BV3iJI55XJLAWFCN3X0GP7zbvxPZVV2vw645SE3lndLa4M-9hQzenCm_yjwy_ZmGMJ7dCwu8IIrL3ZQVwFqDEMcIhul0umv3d5jKhZOwQAVUuAkuw3LgW1IemF-9A3NdZLk74LArOuYMkXBT2-wBFHGDXQLooteK1SCTj_BXsfI5BbD5pMiiaOJqYkD1FxHiXOMc3ux5Qh1PDzPlOIWP7dDjBwk9jsCHK7cXAWeSh4GyW6IewuLDsoXDd_szhl4NHJ5YMHOD2eyyXaHC-zznc8ajB7NXEgcjaIsaqjp35iFvE4GZ4RGTo5LBx0koE8y8XB27jHDay41zzSkveGbRATESjURWdG5t_m9mriClGap1ii8hLywgqBNzbwMbsJJDE_mZwWXe7spceO0OQ2LoH7kw1n1UQvZpq5LIHaUl0yarOD6KZ1ArTpj_zKX1_5nuCvnk56O1H9S8ACxADP0QU4IOl0MYBStGB6Zv74IFd8RdROf-NIoBBL66mySLyfIdh77MF8KU7vzaPp7RCSqJ0u3c';
    const url = 'http://192.168.31.142/api/tasks';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization':'Bearer '.concat(USER_TOKEN)
    }

export const TaskList = (props) => {


    const [tasks, setTasks] = useState([]);


    
    const data = [];

    const getTasks = ()  => {
        axios.get(url,{
            headers,
            validateStatus: function (status) {
                return status < 400; // Reject only if the status code is greater than or equal to 500
              }
        })
        .then(responce =>
            setTasks(responce.data)
            
        )
            .catch(err =>
                Alert.alert(JSON.stringify(err))
            )
        
    }
    const deleteTask = (id) =>{
        axios.delete(`http://192.168.31.142/api/tasks/${id}`,{
            headers,
        })
        .then(() => {

            // Issue GET request after item deleted to get updated list
            // that excludes user of id
            return getTasks()
        })
    }
    useEffect(()=>{
        getTasks();
        
        },[]
    )

    return (
        <View style={styles.tasklist}>
            <View>
                <Text style={styles.title}>Список задач:</Text>
            </View>
            <View>
            {
                tasks.map(item => {
                    return (
                        <View style={styles.taskitem} key={item.id.toString()}>
                            <Text>{ item.name }</Text>
                            <Button style={styles.delete} 
                                onPress={()=>{

                                    deleteTask(item.id)
                                }}
                                
                                 color="red" 
                                 title="Delete"></Button>
                            
                        </View>
                    )
                })
            }
            </View>
            <View style={styles.wrap}>
                
                <TextInput style={styles.input} ></TextInput>
                <Text>Добавить</Text>
            </View>
                    
        </View>
    )



}


const styles = StyleSheet.create({
    input: {
        borderBottomWidth:2,
        borderBottomColor:'blue',
        flex:1,
        marginRight:10
    },
    tasklist: {
        paddingLeft:20,
        width:'100%',
        paddingRight:20
    },
    
    wrap: {
        flexDirection:'row',
        alignItems:'center'
    },
    taskitem: {
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:14
    },
    title: {
        fontSize:26,
        fontWeight: 'bold',
        marginBottom:20
    }

})