import React from "react"

import "styles/upload-avatar-button.scss"

export default ({onUpload}) => {

    const onChange = onFilesUpload => ({target}) => {
        const file = target.files[0]

        if(file != undefined) {
            onFilesUpload(file)
        }
    }

    return (
        <div className="upload-avatar-button">
            <input type="file" id="upload-avatar" onChange={onChange(onUpload)}/>
            <label htmlFor="upload-avatar" className="upload-button button">Upload</label>
        </div>
    )
}

