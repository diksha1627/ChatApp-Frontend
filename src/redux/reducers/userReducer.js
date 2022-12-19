import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILED,
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAILED,
    USER_LOGOUT
} from '../constants/userConstants.js';

export const userSignUpReducer = (
    state = {
        loading:false,
        userInfo: null,
        error: null
    }, action ) => {

        switch(action.type){

            case USER_SIGNUP_REQUEST:
                return {
                    ...state,
                    loading: true,
                    userInfo: null,
                    error: null
                }
            case USER_SIGNUP_SUCCESS:
                return {
                    ...state,
                    loading:false,
                    userInfo:action.payload,
                    error:null
                }
            case USER_SIGNUP_FAILED:
                return {
                    ...state,
                    loading:false,
                    userInfo:null,
                    error: action.payload
                }
            default: return state            
        }
}


export const userLoginReducer = (
    state = {
        loading: false,
        userInfo: null,
        error: null
    },action) =>{

        switch(action.type){

            case USER_LOGIN_REQUEST: 
                return {
                    loading:true,
                    userInfo:null,
                    error:null
                }
            case USER_LOGIN_SUCCESS:
                return {
                    loading: false,
                    userInfo: action.payload,
                    error: null
                }
            case USER_LOGIN_FAILED:
                return {
                    loading: false,
                    userInfo: null,
                    error: action.payload
                }
            default : return state            
        }
}