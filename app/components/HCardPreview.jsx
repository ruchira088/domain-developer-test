import React from "react"

import "styles/hcard-preview.scss"

const PreviewHeader = ({fullName, avatarImage}) => (
    <div className="preview-header">
        <div className="full-name">
            { fullName }
        </div>
        <div className="avatar-image-container">
            <img src={avatarImage} alt="Avatar image" className="avatar-image"/>
        </div>
    </div>
)

const PreviewField = ({label, value}) => (
    <div className="preview-field">
        <div className="preview-field-label">
            { label }
        </div>
        <div className="preview-field-value">
            { value }
        </div>
    </div>
)

const AddressField = ({value}) => {
    const {line_1, line_2} = value

    return (
        <div className="address-preview-field">
            <PreviewField label="Address" value={line_1}/>
            <PreviewField value={line_2}/>
        </div>
    )
}

const PreviewBody = ({email, phone, address, postCode, country}) => (
    <div className="preview-body">
        <PreviewField label="Email" value={email}/>
        <PreviewField label="Phone" value={phone}/>
        <AddressField value={address}/>
        <div className="preview-body-row">
            <PreviewField label="Postcode" value={postCode}/>
            <PreviewField label="Country" value={country}/>
        </div>
    </div>
)

export default ({values}) => {
    const {
        givenName, surname, email, phone, house, street,
        suburb, state, postCode, country, avatarImage
    } = values

    const fullName = `${givenName} ${surname}`

    const showComma = suburb != "" && state != ""

    const address = {
        line_1: `${house} ${street}`,
        line_2: `${suburb}${showComma ? "," : ""} ${state}`
    }

    return (
        <div className="hcard-preview">
            <PreviewHeader fullName={fullName} avatarImage={avatarImage}/>
            <PreviewBody
                email={email}
                phone={phone}
                address={address}
                postCode={postCode}
                country={country}
            />
        </div>
    )
}