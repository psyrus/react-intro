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
