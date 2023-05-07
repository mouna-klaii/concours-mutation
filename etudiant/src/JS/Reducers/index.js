import {combineReducers} from "redux"
import etudReducer from "./etudiant"
import contactReducers from "./contact";

const rootReducer = combineReducers({ contactReducers, etudReducer}) 

export default rootReducer;