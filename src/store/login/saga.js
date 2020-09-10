import { put } from "redux-saga/effects";
import { showMessage } from "react-native-flash-message";

import { Types as loginTypes } from "../login/reducer";

export function* loginAsync({ payload }) {
  try {
    yield put({
      type: loginTypes.LOGIN_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: loginTypes.LOGIN_ERROR,
    });
    showMessage({
      message:
        "Erro ao processar o login, tente novamente em alguns segundos ou contate o suporte",
      type: "danger",
      icon: "danger",
    });
  }
}
