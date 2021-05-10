import axios from 'axios';
// Visit Deatail End Point             
export const getVisitDetail=(visitId)=>{
    return axios.get(`http://10.0.30.166:8080/private/visits/main/${visitId}`);
};