import { call, put, takeLatest } from "redux-saga/effects";
import * as api from "../api/user";
import * as actions from "../actions/user";
import Types from "../types/user";

function* getUser() {
  try {
    const result = yield call(api.userEndPoint);
    console.log(result.data, "userResult");
    yield put(actions.getUserSuccess(result));
  } catch (error) {
    const { response } = error;
    console.log(response);
    yield put(actions.getUserFail());
  }
}
export default function* userSaga() {
  yield takeLatest(Types.GET_USER_REQUEST, getUser);
}
