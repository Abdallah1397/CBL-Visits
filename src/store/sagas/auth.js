import {toast} from 'react-toastify';
import {call,put,takeLatest} from 'redux-saga/effects';
import * as actions from '../actions/auth';
import * as api from '../api/auth';
import Types from '../types/authTypes';
// import {extractErrorMsgFromResponse} from '../../utils/apiHelpers';

// LOGIN USER
function* loginUser(formData){
    yield put(actions.addLoadingSuccess(true));
    try{
        const result =yield call (api.postLogin,formData);
        toast.success('Successfully Login');

        yield call([localStorage,'setItem'],'token',result.data.token);
        yield put(
            actions.getLoginSuccess({
                data:result.data
            })
        );
    }catch(error){
        const {response}=error;
        toast.error("Failed To Sign In");
        // extractErrorMsgFromResponse(response);
        yield put(actions.authError());
    }finally{
        yield put(actions.addLoadingSuccess(false));
    }
}

function* signupStudent(formData) {
    yield put(actions.signupStudentsSuccess(true));
    try{
        const result=yield call (api.signupStudents,formData);
        toast.success('Successfuly Sign Up');
        yield put(
            actions.signupStudentsSuccess({
                data:result.data,
            })
        );
    }catch(error){
        const {response}=error;
        toast.error('Failed To Sign Up');
        // extractErrorMsgFromResponse(response);
        yield put(actions.authError());
    }finally{
        yield put(actions.addLoadingSuccess(false));
    }
    
}

export default function * authSaga() {
    yield takeLatest(Types.LOGIN_REQUEST,loginUser);   
    yield takeLatest(Types.STUDENT_SIGNUP_REQUEST,signupStudent);
}