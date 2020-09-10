export const Types = {
  LOGIN_ASYNC: "login/LOGIN_ASYNC",
  LOGIN_SUCCESS: "login/LOGIN_SUCCESS",
  LOGIN_ERROR: "login/LOGIN_ERROR",

  LOGOUT: "login/LOGOUT",
};

const initialState = {
  isLogged: false,
  loading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.LOGIN_ASYNC:
      return {
        ...state,
        loading: true,
      };

    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isLogged: true,
      };

    case Types.LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        isLogged: false,
      };

    case Types.LOGOUT:
      return { ...state, isLogged: false };

    default:
      return state;
  }
}

export function login(loginData) {
  return {
    type: Types.LOGIN_ASYNC,
    payload: {
      ...loginData,
    },
  };
}

export function logout() {
  return {
    type: Types.LOGOUT,
  };
}
