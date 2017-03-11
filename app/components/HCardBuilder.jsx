import React from "react"
import PersonalDetails from "./PersonalDetails.jsx"
import AddressSection from "./AddressSection.jsx"
import HCardPreview from "./HCardPreview.jsx"
import ButtonFooter from "./ButtonFooter.jsx"

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
            house: "17",
            street: "Rose Hedge Drive",
            suburb: "Sydenham",
            state: "VIC",
            postCode: "3037",
            country: "Australia",
            avatarImage: "http://www.vistagardentampa.org/assets/empty_avatar.jpg"
        }
    },

    createHCard() {
        console.log("create hCard")
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

        return (
            <div className="hcard-builder">
                <div className="column edit-section">
                    <div className="hcard-builder-title">
                        hCard Builder
                    </div>
                    <PersonalDetails onUpdateValue={this.updateValue} values={values}/>
                    <AddressSection onUpdateValue={this.updateValue} values={values}/>
                    <ButtonFooter onUploadAvatar={this.updateAvatar} onCreateHCard={this.createHCard}/>
                </div>
                <div className="column preview-section">
                    <HCardPreview values={values}/>
                </div>
            </div>
        )
    }
})