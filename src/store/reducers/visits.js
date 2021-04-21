import Types from '../types/visits';

const INITIAL_STATE={
    visits:[],
    loading:false,
};
export default function gitAllVisits(state=INITIAL_STATE,action) {
    const {type,payload}=action;
    switch(type){
        case Types.GET_ALL_VISITS_SUCCESS:{
            return{
                ...state,
                visits:payload.data,
                loading:true,
            };
        }
        default:{
            return{
                 ...state,
            };
        }
    }
}