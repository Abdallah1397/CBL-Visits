import Types from '../types/authTypes';
import Cookies from 'js-cookie';
import {getLocalStorage,setLocalStorage} from '../../utils';
import setAuthToken from '../../utils/apiHelpers';
const INITIAL_STATE={
    data:{},
    loginData:getLocalStorage('login',{},true),
    loading:false,
    token:null
}

export default function users (state=INITIAL_STATE,action){
    const {type,payload}=action;
    switch(type){
        case Types.LOGIN_SUCCESS:{
            Cookies.set('token',payload.data.token,{expires:7});
            setLocalStorage('user',JSON.stringify(payload.data.user));
            setAuthToken(payload.data.token);
            return{
                ...state,
                loginData:payload.data.user,
                loading:false,
                token:payload.data.token,
            };
        }
        case Types.AUTH_ERROR:{
            Cookies.remove('token');
            window.localStorage.removeItem('user');
            return{
                ...state,
                data:{},
                loginData:{},
                loading:false,
            };
        }
        case Types.SET_LOADING:{
            return{
                ...state,
                loading:true,
            };
        }
        default:{
            return state;
        }
    }
}