import AsyncStorage from "@react-native-community/async-storage";
import TrackerApi from "../api/Tracker.api";
import createDataContext from "./createData.context";

import { navigate } from "../navagationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "signup":
      return { errorMessage: "", token: action.payload };
    case "add_error":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const signup = (dispatch) => async ({ email, password }) => {
  try {
    const response = await TrackerApi.post("signup", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "signup", payload: response.data.token });
    navigate("TrackList");
  } catch (err) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong during sign up",
    });
  }
};

const signin = (dispatch) => ({ email, password }) => {};

const signout = (dispatch) => () => {};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signup, signout },
  { errorMessage: "", token: null }
);
