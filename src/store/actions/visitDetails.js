import Types from '../types/visitDetails';

export const getVisitDetailsRequest=(visitID)=>({
    type:Types.GET_VISIT_DETAILS_REQUEST,
    payload:visitID,
});

export const getVisitDetailsSuccess=(data)=>({
    type:Types.GET_VISIT_DETAILS_SUCCESS,
    payload:data,
});

export const getVisitDetailsFail=()=>({
    type:Types.GET_VISIT_DETAILS_FAIL,
});

export const addLoadingSuccess=()=>({
    type:Types.SET_LOADING,
});