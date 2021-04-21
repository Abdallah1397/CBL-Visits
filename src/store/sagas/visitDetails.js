import {call,put,takeLatest} from 'redux-saga/effects';
import * as actions from '../actions/visitDetails';
import * as api from '../api/visitDetails';
import Types from '../types/visitDetails';

function* visitDetailss({payload}) {
    yield put(actions.addLoadingSuccess(true));
    console.log(payload);
    try{
        const result =yield call(api.getVisitDetail,payload);
        console.log(result,"result");
        yield put(actions.getVisitDetailsSuccess(result.data));
    }catch(error){
        const {response}=error;
        yield put(actions.getVisitDetailsFail());
    }
    
}

export default function* visitDetailsSaga() {
    yield takeLatest(Types.GET_VISIT_DETAILS_REQUEST,visitDetailss);
    
}