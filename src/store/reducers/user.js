import Types from '../types/user';
const INITIAL_STATE={
    user:{},
    loading:false,
}

export default function getUser(state=INITIAL_STATE,action) {
    const {type,payload}=action;
    console.log(payload,"reducers");
    switch(type){
        case Types.GET_USER_SUCCESS:{
            console.log(payload.data[0],"dataInSwitch");
            return{
                ...state,
                user:payload.data[0],
                loading:false,
            };
        };
        case Types.GET_USER_FAIL:{
            return{
                ...state,
                user:{},
                loading:true,
            };
        };
        default:{
            return{
                ...state,
            };
        };
    };
    
}