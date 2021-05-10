import axios from 'axios';

// Get all visits EndPoint
export const getAllVisits=()=>{
    return axios.get('http://10.0.30.166:8080/private/visits/main/');
};

                    




//////////////////////////////////////////////

// const AuthStr = 'Token ' + USER_TOKEN;
// axios.get(URL, { headers: { 'Authorization': AuthStr } })