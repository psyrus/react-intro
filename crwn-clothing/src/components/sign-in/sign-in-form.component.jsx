import FormInput from "../form-input/form-input.component"
import Button from "../button/button.component";
import { signInWithGooglePopup, createUserDocumentfromAuth, signInLegacy } from "../../utils/firebase/firebase.utils";
import { useState } from "react";

const SignInForm = () => {

    const defaultFormFields = {
        email: '',
        password: '',
    }

    const [formFields, setFormFields] = useState(defaultFormFields);

    const handleChange = (event) => {
        // I still don't like that the ...formFields part is required.
        // When it was using the setState class based approach, you didn't need to send the whole object
        setFormFields({ ...formFields, [event.target.name]: event.target.value });
    }

    const logPasswordUser = async (event) => {
        event.preventDefault();

        try {
            const userDoc = await signInLegacy(formFields.email, formFields.password);
            console.log(userDoc);
            alert(`Successfully signed in as user ${userDoc.uid}`);
            resetFormFields();
        } catch (error) {
            if (error.code === 'auth/wrong-password') {
                const message = 'Invalid username/password combination'
                alert(message)
            }
        }
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        const userDocReferece = await createUserDocumentfromAuth(response.user);
    }

    return (
        <div>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form>
                <FormInput
                    label='Email'
                    type='email'
                    required
                    onChange={handleChange}
                    name='email'
                    value={formFields.email} />
                <FormInput
                    label='Password'
                    type='password'
                    required
                    onChange={handleChange}
                    name='password'
                    value={formFields.password} />
                <Button buttonType={'default'} type='submit' onClick={logPasswordUser}>Sign In</Button>
                <Button buttonType={'default'} type='submit' onClick={logGoogleUser}>Sign in with Google Popup</Button>
            </form>
        </div>
    )
}

export default SignInForm;