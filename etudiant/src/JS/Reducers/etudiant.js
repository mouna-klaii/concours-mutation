import { LOAD_ETUDIANT, LOGIN_ETUDIANT , FAIL_ETUDIANT, REGISTER_ETUDIANT ,LOGOUT_ETUDIANT, CURRENT_ETUDIANT } from '../ActionTypes/etudiant';
const initialeState = {
    etudiant : null,
    load : false,
    isAuth : false,
    error : null,
    newEtudiant : null
}

const etudReducer = (state = initialeState, {type, payload} ) => {
switch (type){
    case LOAD_ETUDIANT :
        return {...state , load : true}
    case REGISTER_ETUDIANT : 
    localStorage.setItem("token", payload.token)
    return {...state , load : false , newEtudiant : payload.newEtudiant, isAuth : true}
  case LOGIN_ETUDIANT :
    localStorage.setItem("token", payload.token)
    return {...state, load:false , etudiant : payload.etudiant , isAuth: true}
    case CURRENT_ETUDIANT :
    return {...state, etudiant : payload , isAuth : true}
    case LOGOUT_ETUDIANT :
        localStorage.removeItem("token")
        return {
            findEtudiant : null,
            load : false,
            isAuth : false,
            error: null,
            etudiant : null
        }
  case FAIL_ETUDIANT : 
  return {...state, load:false, error: payload}
  default:
    return state
}

}
export default etudReducer