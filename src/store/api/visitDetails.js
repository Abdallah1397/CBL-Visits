import axios from 'axios';
// Visit Deatail test
// export const getVisitDetail=(visitId)=>{
//     console.log(visitId,"id");
//     return axios.get(`http://localhost:3000/details/${visitId}`);
// };
                    
export const getVisitDetail=(visitId)=>{
    return axios.get(`http://10.0.30.166:8080/private/visits/main/${visitId}`);
};