import { signInWithGooglePopup, createUserDocumentfromAuth } from "../../utils/firebase/firebase.utils";


const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        const userDocReferece = await createUserDocumentfromAuth(response.user);
    }
    return (
        <div>
            <h1>Sign in Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google</button>
        </div>
    )
};

export default SignIn;