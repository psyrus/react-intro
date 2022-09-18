import { Fragment as div, useEffect } from "react";
import { useState } from "react";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./category-item-modifier.styles.scss"

const CategoryItemModifier = (params) => {
    const fieldDefaults = {
        id: '',
        name: '',
        price: '',
        imageUrl: '',
    }
    const { category, item, updateCallback, closeCallback } = params;
    const [formFields, setFormFields] = useState(fieldDefaults);
    const [changeMade, setChangeMade] = useState(false);

    useEffect(() => {
        if (item) {
            setFormFields(item);
        } else {
            setFormFields(fieldDefaults);
        }
    }, [category, item])

    // Need to include an onchange handler for form fields or else they won't register the input
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!parseInt(formFields.price)) {
            alert(`Please fill out all fields. Price must be >0`);
            return
        }
        updateCallback(category, formFields);
        setChangeMade(false);
    }

    const handleFormFieldChange = (event) => {
        const { name, value } = event.target;

        setFormFields({
            ...formFields,
            [name]: value
        });

        setChangeMade(true);
    }

    if (!category) {
        return;
    }

    const idField = '' === formFields.id ? (
        <div>Add New Item</div>
    ) : (
        <FormInput
            label='ID Number'
            type='text'
            required
            onChange={handleFormFieldChange}
            name='id'
            value={formFields.id}
            readOnly
        />
    )

    const content = (
        <div className="product-update-form">
            <div className="product-update-close-container"><span onClick={() => closeCallback()}>&#10005;</span></div>

            {category && `${category.toUpperCase()}`}

            {formFields && `: ${formFields.name}`}

            {formFields && <form onSubmit={handleSubmit}>
                {idField}

                <FormInput
                    label='Display Name'
                    type='text'
                    required
                    onChange={handleFormFieldChange}
                    name='name'
                    value={formFields.name}
                />

                <FormInput
                    label='Price'
                    type='text'
                    required
                    onChange={handleFormFieldChange}
                    name='price'
                    value={formFields.price}
                />

                <FormInput
                    label='Image Url'
                    type='text'
                    required
                    onChange={handleFormFieldChange}
                    name='imageUrl'
                    value={formFields.imageUrl}
                />
                {
                    formFields.imageUrl &&
                    <div className="image-preview-container">
                        <span className="image-preview-label">Image Preview</span>
                        <img className="image-preview" src={formFields.imageUrl} />
                    </div>
                }



                <Button type='submit' disabled={!changeMade}>Update category</Button>
            </form>}
        </div>)

    return (
        <div>{content}</div>

    )
}

export default CategoryItemModifier;