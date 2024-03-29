import { useState } from "react";
import { useDispatch } from "react-redux";
import { emailSignInStart, googleSignInStart } from "../../store/user/user.action";
import { signInLegacy } from "../../utils/firebase/firebase.utils";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { ButtonsContainer, SignInContainer, SignInHeader } from "./sign-in-form.styles.jsx";


const SignInForm = () => {

    const dispatch = useDispatch();
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

    const credentialsSignInFlow = async (event) => {
        event.preventDefault();

        try {
            // const userDoc = await signInLegacy(formFields.email, formFields.password);
            dispatch(emailSignInStart(formFields.email, formFields.password));
            // alert(`Successfully signed in as user ${userDoc.uid}`);
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

    const googleSignInFlow = async () => {
        dispatch(googleSignInStart());
    }

    return (
        <SignInContainer>
            <SignInHeader>I already have an account</SignInHeader>
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
                <ButtonsContainer>
                    <Button buttonType={'default'} type='submit' onClick={credentialsSignInFlow}>Sign In</Button>
                    <Button buttonType={BUTTON_TYPE_CLASSES.google} type='button' onClick={googleSignInFlow}>Google Sign In</Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )
}

export default SignInForm;