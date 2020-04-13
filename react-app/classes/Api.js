import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import qs from 'query-string';


export default class Api {
    static registerUrl = 'http://95.215.208.117:3000/api/register';
    static loginUrl = 'http://95.215.208.117:3000/api/login';
    static ordersUrl = 'http://95.215.208.117:3000/api/orders';
    static categoriesUrl = 'http://95.215.208.117:3000/api/works';
    static setToken = (token) => {
        SecureStore.setItemAsync('token', token);
    }
    static getToken = function(){
        return new Promise((resolve, reject) => {
            SecureStore.getItemAsync('token').then(token =>{
                let bearer = 'Bearer '+ token;
                resolve(bearer);
            });
        })
        
    }
    static login =  function(data){
        // console.log(this.loginUrl);
        return new Promise((resolve, reject) => {
            axios.post(
                this.loginUrl, 
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
                this.setToken(response.data.access_token);
                resolve();
                
                
            });
        })
        
        
    }
    static checkAuth = function () {
        return new Promise((resolve, reject) => {
            this.getToken().then(token => {
                resolve();
            });
            
        })
       
        
    }
    static getOrders = function(){
        return new Promise((resolve, reject) => {
            this.getToken().then(token => {
                let headers = {
                    'Content-Type': 'application/json',
                    'Authorization': token
                }
                axios.get(this.ordersUrl, {
                    headers,
                    validateStatus: function (status) {
                        return status < 400; // Reject only if the status code is greater than or equal to 500
                    }
                })
                .then(responce => {
                        resolve(responce.data)
                    }
                )
                .catch(err =>
                    Alert.alert(JSON.stringify(err))
                )
            });
        })
        
    };
    static addOrder = function(data){
        return new Promise((resolve, reject) => {
            this.getToken().then(token => {
                headers = {
                    'Content-Type': 'application/json',
                    'Authorization': token
                }
                axios.post(
                    this.ordersUrl,
                    data,
                    {
                      headers,
                      validateStatus: (status) => {
                        return true; // I'm always returning true, you may want to do it depending on the status received
                      },
                    }
                  ).then((response) => {
                    
                    resolve();
                    
                  }).catch(error => {
                    setText(JSON.stringify(error))
                  });
            });
        })
        
    };
        
    static getCategories = function(){
        return new Promise((resolve, reject) => {
            this.getToken().then(token => {
                let headers = {
                    'Content-Type': 'application/json',
                    'Authorization': token
                }
                axios.get(this.categoriesUrl, {
                    headers,
                    validateStatus: function (status) {
                      return status < 400; // Reject only if the status code is greater than or equal to 500
                    }
                })
                .then(responce =>{
                        resolve(responce.data)
                      
                }
                )
                .catch(err =>
                    Alert.alert(JSON.stringify(err))
                )
            });
        })
        
    };  
    static getOrder = function(id){
        return new Promise((resolve, reject) => {
            this.getToken().then(token => {
                let headers = {
                    'Content-Type': 'application/json',
                    'Authorization': token
                }
                axios.get(this.ordersUrl+'/'+id, {
                    headers,
                    validateStatus: function (status) {
                        return status < 400; // Reject only if the status code is greater than or equal to 500
                    }
                })
                .then(responce => {
                        resolve(responce.data)
                    }
                )
                .catch(err =>
                    Alert.alert(JSON.stringify(err))
                )
            });
        })
        
    };    
    static deleteOrder = function(id){
        return new Promise((resolve, reject) => {
            this.getToken().then(token => {
                let headers = {
                    'Content-Type': 'application/json',
                    'Authorization': token
                }
                axios.delete(this.ordersUrl+'/'+id, {
                    headers,
                    validateStatus: function (status) {
                        return status < 400; // Reject only if the status code is greater than or equal to 500
                    }
                })
                .then(responce => {
                        resolve(responce.data)
                    }
                )
                .catch(err =>
                    Alert.alert(JSON.stringify(err))
                )
            });
        })
        
    }; 
}






