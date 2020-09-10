import { takeEvery, takeLatest, all } from "redux-saga/effects";

import { Types as loginTypes } from "./login/reducer";

import * as login from "./login/saga";

function* watchAsyncLogin() {
  yield takeLatest(loginTypes.LOGIN_ASYNC, login.loginAsync);
}

export default function* rootSaga() {
  yield all([watchAsyncLogin()]);
}
