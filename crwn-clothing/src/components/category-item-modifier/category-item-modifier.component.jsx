import { Fragment, useEffect } from "react";
import { useState } from "react";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

const CategoryItemModifier = (params) => {
    const fieldDefaults = {
        id: '',
        name: '',
        price: '',
    }
    const { category, item } = params;
    const [formFields, setFormFields] = useState(fieldDefaults);

    useEffect(() => {
        console.log("UseEffect running!");
        if (item) {
            setFormFields(item);
        } else {
            setFormFields(fieldDefaults);
        }
        console.log(formFields);
    }, [category, item])

    // Need to include an onchange handler for form fields or else they won't register the input
    const handleUpdate = () => {
        console.log("Handling update!")
    }

    const handleFormFieldChange = (event) => {
        const { name, value } = event.target;

        setFormFields({
            ...formFields,
            [name]: value
        })

        console.log(formFields)
    }

    if (!category) {
        return;
    }

    if (!formFields) {
        console.log("formFields is falsy")
    }

    const content = (<Fragment>
        {category && `This is the creator form for category: ${category}`}

        {formFields && ` - with selected item: ${formFields.name}`}
        {formFields && <form>
            <FormInput
                label='ID Number'
                type='text'
                required
                onChange={handleFormFieldChange}
                name='id'
                value={formFields.id}
            />

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

            <Button onClick={() => {handleUpdate()}} type='button'>Update category</Button>
        </form>}
    </Fragment>)

    return (
        <div>{content}</div>
        
    )
}

export default CategoryItemModifier;