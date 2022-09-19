import SignUpForm from "../../components/sign-up/sign-up-form.component";
import SignInForm from "../../components/sign-in/sign-in-form.component";
import "./authentication.styles.jsx"
import { AuthenticationContainer } from "./authentication.styles.jsx";

const Authentication = () => {

    return (
        <AuthenticationContainer>
            <SignInForm></SignInForm>
            <SignUpForm></SignUpForm>
        </AuthenticationContainer>
    )
};

export default Authentication;