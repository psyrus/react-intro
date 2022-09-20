import { useReducer } from "react";
import { createContext, useEffect, useState } from "react";
import { onAuthStateChangedListener, createUserDocumentfromAuth } from "../utils/firebase/firebase.utils";
// This is what will be globally accessible
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const userReducer = (state, action) => {
    console.log("User Reducer Dispatched");
    console.log(action);
    const { type, payload } = action;

    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER: 
            return {
                currentUser: payload
            };
        default:
            throw new Error(`Unhandled type ${type} in userReducer`);
    }
}

const INITIAL_STATE = {
    currentUser: null
}

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, INITIAL_STATE)

    const { currentUser } = state;
    console.log(currentUser)

    const setCurrentUser = (user) => {
        dispatch({
            type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user
        });
    }

    // const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener(async (user) => {
            let dbProperties = {};
            if (user) {
                dbProperties = await createUserDocumentfromAuth(user);
                user = {...user, ...dbProperties}
            }
            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};
