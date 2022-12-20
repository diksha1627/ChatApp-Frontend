import { combineReducers } from "redux";
import { userSignUpReducer , userLoginReducer  } from "./userReducer";


const rootReducer = combineReducers({
    userSignUp: userSignUpReducer,
    userLogin : userLoginReducer
});

export default rootReducer;