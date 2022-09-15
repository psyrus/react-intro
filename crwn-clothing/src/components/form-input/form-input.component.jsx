import "./form-input.styles.scss"

const FormInput = ({ label, ...otherProps }) => {
    console.log("rendered forminput")
    return (
        <div className="group">
            <input {...otherProps} className='form-input'></input>
            {label && (<label className={`${otherProps.value && otherProps.value.toString().length > 0 ? 'shrink ' : ''}form-input-label`}>{label}</label>)}
        </div>
    );
}

export default FormInput;