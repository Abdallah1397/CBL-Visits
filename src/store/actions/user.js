import Types from '../types/user';

export const getUserRequest=()=>({
    type:Types.GET_USER_REQUEST,
});
export const getUserSuccess=({data})=>({
    type:Types.GET_USER_SUCCESS,
    payload:{
        data,
    },
});
export const getUserFail=()=>({
    type:Types.GET_USER_FAIL,
});
export const setLoading=()=>({
    type:Types.SET_LOADING,
});

// Actions File 
// 1- GetRequest => fuction Return Action (to get the request)