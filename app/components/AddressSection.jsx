import React from "react"
import InputSection from "./InputSection.jsx"
import InputField from "./InputField.jsx"

export default ({onUpdateValue, values, errorHandler}) => (
    <InputSection
        title="Address"
        onUpdateValue={onUpdateValue}
        values={values}
        className="address"
        errorHandler={errorHandler}
    >
        <InputField name="house" label="House name or #"/>
        <InputField name="street" label="Street"/>
        <InputField name="suburb" label="Suburb"/>
        <InputField name="state" label="State"/>
        <InputField name="postCode" label="Postcode"/>
        <InputField name="country" label="Country"/>
    </InputSection>
)