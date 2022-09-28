import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
    currentUser: null
}

export const userReducer = (state = INITIAL_STATE, action) => {
    console.log("User Reducer Dispatched");
    console.log(action);
    const { type, payload } = action;

    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER: 
            return {
                currentUser: payload
            };
        // In redux, every reducer receives every action, and thus if no actions match, they should ALL just return state
        default:
            return state;
    }
}