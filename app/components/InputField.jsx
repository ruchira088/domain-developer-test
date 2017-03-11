import React from "react"
import classNames from "classnames"

import "styles/input-field.scss"

const defaultValidator = value => ({
    isValid: value.length > 0,
    message: label => `This field cannot be empty`
})

const ValidationErrorMessage = ({label, validationError}) => {

    if(validationError == undefined) {
        return null
    } else {
        return (
            <div className="validation-error">
                { validationError.message(label) }
            </div>
        )
    }
}

export default React.createClass({

    componentDidMount() {
        this.validateField()
    },

    componentDidUpdate() {
        this.validateField()
    },

    getValidationError() {
        const {name, values} = this.props
        const {errors: {errorList, showErrors}} = values

        if(!showErrors) {
            return undefined
        } else {
            return errorList.find(error => error.name == name)
        }
    },

    validateField() {
        const {name, values, errorHandler, validate = defaultValidator} = this.props

        const {isValid, message} = validate(values[name])

        if(isValid) {
            errorHandler.removeError(name)
        } else {
            errorHandler.addError(name, message)
        }
    },

    render() {
        const {onChange, values, label, name} = this.props

        const validationError = this.getValidationError()

        return (
            <div className="input-field">
                <div className="input-field-label"> {label} </div>
                <input
                    onChange={onChange(name)}
                    value={values[name]}
                    className={classNames("input-field-value", {
                        "has-validation-error": validationError != undefined
                    })}
                />

                <ValidationErrorMessage label={label} validationError={validationError}/>
            </div>
        )
    }
})