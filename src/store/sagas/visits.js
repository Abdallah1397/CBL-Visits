import {call,put,takeLatest} from 'redux-saga/effects';
import * as actions from '../actions/visits';
import * as api from '../api/visits';
import Types from '../types/visits';
// import {extractErrorMsgFromResponse} from '../../utils/apiHelpers';


function* allVisits() {
try{
    const result =yield call(api.getAllVisits);
    yield put(actions.getAllVistisSuccess(result));
}catch(error){
        const {response}=error;
        // extractErrorMsgFromResponse(response);
}   
}

export default function* visitsSaga() {
    yield takeLatest(Types.GET_ALL_VISITS_REQUEST,allVisits);
}