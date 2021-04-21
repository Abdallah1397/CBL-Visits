import Types from '../types/visits';

export const getAllVisitsRequest =()=>({
    type:Types.GET_ALL_VISITS_REQUEST,
});

export const getAllVistisSuccess=({data})=>({
    type:Types.GET_ALL_VISITS_SUCCESS,
    payload:{
        data,
    },
});
