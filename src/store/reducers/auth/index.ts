import {AuthAction, AuthActionEnum, AuthState, SetAuthAction} from "./types";
import {IUser} from "../../../models/IUser";

const initState: AuthState = {
    isAuth: false,
    error: '',
    user: {} as IUser,
    isLoading: false
}

export default function authReducer (state = initState, action: AuthAction): AuthState {
    switch (action.type) {
        case AuthActionEnum.SET_AUTH:
            return {...state, isAuth: action.payload, isLoading: false}
        case AuthActionEnum.SET_USER:
            // @ts-ignore
            return {...state, user: action.payload}
        case AuthActionEnum.SET_ERROR:
            return {...state, error: action.payload, isLoading: false}
        case AuthActionEnum.SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        default:
            return state
    }
}