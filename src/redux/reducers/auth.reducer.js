import { LOGIN_SUCCESS } from ".././actionTypes";
import { LOGIN_FAIL } from ".././actionTypes";
import { LOGIN_REQUEST } from ".././actionTypes";
import { LOG_OUT } from ".././actionTypes";
import { LOAD_PROFILE } from ".././actionTypes";

const initialState = {
  accessToken: sessionStorage.getItem("stored-token")
    ? sessionStorage.getItem("stored-token")
    : null,
  user: sessionStorage.getItem("stored-profile")
    ? JSON.parse(sessionStorage.getItem("stored-profile"))
    : null,
  loading: false,
};

export const authReducer = (prevState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...prevState,

        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...prevState,
        accessToken: payload,
        loading: false,
      };
    case LOGIN_FAIL:
      return {
        ...prevState,
        accessToken: null,
        loading: false,
        error: payload,
      };
    case LOAD_PROFILE:
      return {
        ...prevState,
        user: payload,
      };
    default:
      return prevState;
  }
};
