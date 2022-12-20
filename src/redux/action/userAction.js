import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILED,
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAILED,
    USER_LOGOUT
} from '../constants/userConstants.js';
import axios from 'axios';


const localStorage = window.localStorage
const API = process.env.REACT_APP_NODE_API;


export const userSignUp = (userData) => async (dispatch) => {

    try {
        dispatch({
            type: USER_SIGNUP_REQUEST
        });


        const config = {
            'Content-Type' : 'application/json'
        }
        const { data } = axios({
            method : "post",
            url: `${API}/public/signup`,
            data: userData,
            config
        });

        localStorage.setItem("userInfo", JSON.stringify(data));

        dispatch({
            type: USER_SIGNUP_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: USER_SIGNUP_FAILED,
            payload:
            error.response && error.response.data.message ?
            error.response.data.message
            : error.message
        });
    }
}


export const userLogin = (userData) => async(dispatch) => {

    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        });

        const config = {
            'Content-Type': 'application/json'
        };

        const { data } = axios({
            method: "post",
            url:`${API}/public/login`,
            data: userData,
            config
        });

        localStorage.setItem("userInfo",JSON.stringify(data));

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
    } catch (error) {

        dispatch({
            type: USER_LOGIN_FAILED,
            payload:
            error.response && error.response.data.message ?
            error.response.data.message
            : error.message
        });
        
    }

}