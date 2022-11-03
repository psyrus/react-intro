import { USER_ACTION_TYPES } from "./user.types";

export const setCurrentUser = (user) => {
    return {
        type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user
    };
}

export const checkUserSession = () => {
    return {
        type: USER_ACTION_TYPES.CHECK_USER_SESSION, payload: null
    }
}
export const googleSignInStart = () => {
    return {
        type: USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, payload: null
    }
}
export const emailSignInStart = (email, password) => {
    return {
        type: USER_ACTION_TYPES.EMAIL_SIGN_IN_START, payload: {email, password}
    }
}
export const signInSuccess = (user) => {
    return {
        type: USER_ACTION_TYPES.SIGN_IN_SUCCESS, payload: user
    }
}
export const signInFailed = (error) => {
    return {
        type: USER_ACTION_TYPES.SIGN_IN_FAILED, payload: error
    }
}

export const signOutStart = () => {
    return {
        type: USER_ACTION_TYPES.SIGN_OUT_START, payload: null
    }
}

export const signOutSuccess = () => {
    return {
        type: USER_ACTION_TYPES.SIGN_OUT_SUCCESS, payload: null
    }
}

export const signOutFailed = (error) => {
    return {
        type: USER_ACTION_TYPES.SIGN_OUT_FAILED, payload: error
    }
}