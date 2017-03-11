import React from "react"
import InputSection from "./InputSection.jsx"
import InputField from "./InputField.jsx"

export default ({onUpdateValue, values}) => (
    <InputSection
        title="Personal details"
        onUpdateValue={onUpdateValue}
        values={values}
        className="personal-details"
    >
        <InputField name="givenName" label="Given name"/>
        <InputField name="surname" label="Surname"/>
        <InputField name="email" label="Email"/>
        <InputField name="phone" label="Phone"/>
    </InputSection>
)