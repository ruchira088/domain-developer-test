import React from "react"

import "styles/input-field.scss"

export default ({onChange, values, label, name}) => (
    <div className="input-field">
        <div className="input-field-label"> {label} </div>
        <input onChange={onChange(name)} value={values[name]} className="input-field-value"/>
    </div>
)