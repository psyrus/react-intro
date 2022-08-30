import { createContext, useEffect, useState } from "react";
import { onAuthStateChangedListener, createUserDocumentfromAuth } from "../utils/firebase/firebase.utils";
// This is what will be globally accessible
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentfromAuth(user);
            }

            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};
