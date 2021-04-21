import Types from '../types/visitDetails';

const INITIAL_STATE={
    visitDetail:{},
    loading:false,
};

export default function visitDetails(state=INITIAL_STATE,action) {
    const {type,payload}=action;
    switch(type){
        case Types.GET_VISIT_DETAILS_SUCCESS:
            console.log(payload,"dataInReducersFile");
            return{
                ...state,
                visitDetail:payload,
                loading:false,
            };
        case Types.GET_VISIT_DETAILS_FAIL:
            return{
                ...state,
                visitDetail:{},
                loading:true,
            };
        default:
            return{
                ...state,
            };
    }
    
}