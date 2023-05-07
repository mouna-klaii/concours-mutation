import axios from "axios";
import { toast } from "react-toastify";
import {
  LOAD_ETUDIANT,
  LOGIN_ETUDIANT,
  FAIL_ETUDIANT,
  CURRENT_ETUDIANT,
  REGISTER_ETUDIANT,
  LOGOUT_ETUDIANT,
} from "../ActionTypes/etudiant";

export const register = (newEtudiant, navigate) => async (dispatch) => {
  dispatch({ type: LOAD_ETUDIANT });
  try {
    let result = await axios.post("/api/etudiant/register", newEtudiant);
    dispatch({ type: REGISTER_ETUDIANT, payload: result.data });
    toast.success(result.data.success.msg);
    navigate("/");
  } catch (error) {
    toast.error(error.response.data.msg)
    const err = error.response.data.msg 
    err.map((msg ) => toast.error(msg.msg))
    dispatch({ type: FAIL_ETUDIANT, payload: error.response.data.msg });
  }
};

export const login = (etudiant, navigate) => async (dispatch) => {
  dispatch({ type: LOAD_ETUDIANT });
  try {
    let result = await axios.post("/api/etudiant/login", etudiant);
    dispatch({ type: LOGIN_ETUDIANT, payload: result.data });
    toast.success(result.data.success.msg);
    navigate("/Formulaire");
  } catch (error) {
    toast.error(error.response.data.msg)
    const err = error.response.data.msg 
    err.map((msg ) => toast.error(msg.msg))
    dispatch({ type: FAIL_ETUDIANT, payload: error.response.data.msg });
  }
};


export const current = () => async (dispatch) => {
  dispatch({ type: LOAD_ETUDIANT });
  try {
    const config = {
      headers: { authorization: localStorage.getItem("token") },
    };
    let result = await axios.get("/api/etudiant/current", config);
    dispatch({ type: CURRENT_ETUDIANT, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_ETUDIANT, payload: error.response.data.error });
  }
};




export const logout = () => async (dispatch) => {
  dispatch({ LOGOUT_ETUDIANT });
};
