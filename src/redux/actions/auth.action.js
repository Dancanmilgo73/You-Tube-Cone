import firebase from "firebase/compat/app";
import auth from "../../firebase";

import { LOGIN_REQUEST } from "../actionTypes";
import { LOGIN_SUCCESS } from "../actionTypes";
import { LOAD_PROFILE } from "../actionTypes";
import { LOGIN_FAIL } from "../actionTypes";
export const login = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");
    const res = await auth.signInWithPopup(provider);

    /* when the dispatch is successful */
    const accessToken = res.credential.accessToken;
    const profile = {
      name: res.additionalUserInfo.profile.name,
      photoURL: res.additionalUserInfo.profile.picture,
    };

    /* store accesstoken and profile in session storage   so that it is no lost on browser refresh */
    sessionStorage.setItem("stored-token", accessToken);
    sessionStorage.setItem("stored-profile", JSON.stringify(profile));
    dispatch({
      type: LOGIN_SUCCESS,
      payload: accessToken,
    });
    dispatch({
      type: LOAD_PROFILE,
      payload: profile,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: LOGIN_FAIL,
      payload: error.message,
    });
  }
};
