import { auth, signInWithGooglePopup, createUserDocumentfromAuth, signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

const SignIn = () => {

    useEffect(() => {
        async function fetchData() {
            const response = await getRedirectResult(auth);
            if (response) {
                const userDocReferece = await createUserDocumentfromAuth(response.user)
            }
            console.log(response);
        }
        fetchData();
    }, [])

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        const userDocReferece = await createUserDocumentfromAuth(response.user);
    }

    return (
        <div>
            <h1>Sign in Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button>
        </div>
    )
};

export default SignIn;