import React from "react"
import {includesError} from "../lib/utils"
import PersonalDetails from "./PersonalDetails.jsx"
import AddressSection from "./AddressSection.jsx"
import HCardPreview from "./HCardPreview.jsx"
import ButtonFooter from "./ButtonFooter.jsx"
import ResultModal from "./ResultModal.jsx"
import placeholderImage from "assets/placeholder.jpg"

import "styles/hcard-builder.scss"

export default React.createClass({

    getInitialState() {
        // return {
        //     givenName: "",
        //     surname: "",
        //     email: "",
        //     phone: "",
        //     house: "",
        //     street: "",
        //     suburb: "",
        //     state: "",
        //     postCode: "",
        //     country: ""
        // }
        return {
            givenName: "Sam",
            surname: "Fairfax",
            email: "sam@gmail.com",
            phone: "0433320275",
            house: "",
            street: "Rose Hedge Drive",
            suburb: "Sydenham",
            state: "VIC",
            postCode: "3037",
            country: "Australia",
            avatarImage: placeholderImage,
            errors: {
                errorList: [],
                showErrors: false
            },
            showResultModal: false
        }
    },

    addError(fieldName, message) {
        const {errors: {errorList, showErrors}} = this.state

        if (!includesError(errorList, fieldName)) {
            this.setState({
                errors: {
                    showErrors,
                    errorList: errorList.concat({
                        name: fieldName,
                        message
                    })
                }
            })
        }
    },

    removeError(fieldName) {
        const {errors: {errorList, showErrors}} = this.state

        if(includesError(errorList, fieldName)) {
            this.setState({
                errors: {
                    showErrors,
                    errorList: errorList.filter(({name}) => name != fieldName)
                }
            })
        }
    },

    createHCard() {
        const {errors: {errorList}} = this.state

        if (errorList.length > 0) {
            this.setState({
                errors: {
                    errorList,
                    showErrors: true
                }
            })
        } else {
            this.setState({showResultModal: true})
        }
    },

    getResultModal() {
        const {showResultModal} = this.state

        const hide = () => {
            this.setState({showResultModal: false})
        }

        if(showResultModal) {
            return (
                <ResultModal hide={hide}/>
            )
        } else {
            return null
        }
    },

    updateAvatar(imageFile) {
        const fileReader = new FileReader()

        fileReader.onload = ({target}) => {
            this.setState({avatarImage: target.result})
        }

        fileReader.readAsDataURL(imageFile)
    },

    updateValue(fieldName) {
        return ({target}) => {
            this.setState({[fieldName]: target.value})
        }
    },

    render() {
        const values = this.state

        const errorHandler = {
            addError: this.addError,
            removeError: this.removeError,
        }

        return (
            <div className="hcard-builder">
                <div className="column edit-section">
                    <div className="hcard-builder-title">
                        hCard Builder
                    </div>
                    <PersonalDetails errorHandler={errorHandler} onUpdateValue={this.updateValue} values={values}/>
                    <AddressSection errorHandler={errorHandler} onUpdateValue={this.updateValue} values={values}/>
                    <ButtonFooter onUploadAvatar={this.updateAvatar} onCreateHCard={this.createHCard}/>
                </div>
                <div className="column preview-section">
                    <HCardPreview values={values}/>
                </div>
                { this.getResultModal() }
            </div>
        )
    }
})