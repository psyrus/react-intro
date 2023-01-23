import { useState } from "react";

import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { SignUpContainer, SignUpHeader } from "./sign-up-form.styles";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}
const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const dispatch = useDispatch();
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!(formFields.displayName && formFields.email && formFields.password && formFields.confirmPassword)) {
            let message = 'All form fields must be filled out';
            alert(message);
            throw new Error(message);
        }

        if (!(formFields.password === formFields.confirmPassword)) {
            let message = 'Password and confirmation must match'
            alert(message);
            throw new Error(message);
        }
        try {
            // Need to create an instance in the database
            // const response = await createAuthUserWithEmailAndPassword(formFields.email, formFields.password);

            // await createUserDocumentfromAuth(response.user, { displayName: formFields.displayName });
            dispatch(signUpStart(formFields.displayName, formFields.email, formFields.password));
            resetFormFields();
            // alert(`User created successfully with UID: ${response.user.uid}`);
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, this email is already in use');
            } else {
                console.log('User creation encountered an error', error);
            }
        }

    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({
            // This is quite difficult to understand, but basically Es6 allows the ... syntax to explode an array/object to subcomponents
            ...formFields,
            // then with the subsequent line it is forcing the overwrite of the one name:value pair that is coming from the event handler
            [name]: value
        })
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    return (
        <SignUpContainer>
            <SignUpHeader>Don't have an account?</SignUpHeader>
            <span>Sign up with email + password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Display Name'
                    type='text'
                    required
                    onChange={handleChange}
                    name='displayName'
                    value={formFields.displayName}
                />

                <FormInput
                    label='Email'
                    type='email'
                    required
                    onChange={handleChange}
                    name='email'
                    value={formFields.email}
                />

                <FormInput
                    label='Password'
                    type='password'
                    required
                    onChange={handleChange}
                    name='password'
                    value={formFields.password}
                />

                <FormInput
                    label='Confirm Password'
                    type='password'
                    required
                    onChange={handleChange}
                    name='confirmPassword'
                    value={formFields.confirmPassword}
                />
                <Button buttonType={'default'} type="submit">Sign Up</Button>

            </form>
        </SignUpContainer>
    );
}

export default SignUpForm;