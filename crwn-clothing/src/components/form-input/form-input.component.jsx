import "./form-input.styles.jsx"
import { FormInputLabel, Group, Input } from "./form-input.styles.jsx"

const FormInput = ({ label, ...otherProps }) => {
    return (
        <Group>
            <Input {...otherProps} className='form-input'></Input>
            {
                label && (
                    <FormInputLabel shrink={otherProps.value && otherProps.value.toString().length > 0}>
                        {label}
                    </FormInputLabel>)
            }
        </Group>
    );
}

export default FormInput;