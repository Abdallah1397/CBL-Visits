import axios from 'axios';

// LOGIN API 
export const postLogin=(formData)=>{
    return axios.post('http://10.0.30.166:8080/private/users/login/',formData.payload,);
};

// STUDENT API
export const signupStudents=(formData)=>{
    return axios.post('http://10.0.30.166:8080/private/users/students/',formData.payload);
}