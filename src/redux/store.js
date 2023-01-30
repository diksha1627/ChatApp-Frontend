import { applyMiddleware , createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from './reducers/index';

const initialState = {
    userSignUp: {
        userInfo:
            JSON.parse(localStorage.getItem('userInfo'))
    },
    userLogin: {
        userInfo:
            JSON.parse(localStorage.getItem('userInfo'))
    }
}

const middleware = [thunk]

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store