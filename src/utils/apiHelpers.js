import axios from 'axios';
import {toast} from 'react-toastify';

// export const extractErrorMsgFromResponse=(response)=>{
//     const errorMsg =response.data.message ? response.data.message:'Auth Error';
//     toast.error(errorMsg);
// };
const setAuthToken =(token)=>{
    if (token){
        axios.defaults.headers.common['Authorization']=`Token ${token}`;
        
    }else{
        delete axios.defaults.common['Authorization'];
    }
};
export default setAuthToken;