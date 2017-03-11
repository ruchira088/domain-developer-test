import React from "react"
import UploadAvatarButton from "./UploadAvatarButton.jsx"

import "styles/button-footer.scss"

export default ({onUploadAvatar, onCreateHCard}) => (
    <div className="button-footer">
        <UploadAvatarButton onUpload={onUploadAvatar}/>
        <button type="button" onClick={onCreateHCard} className="button">
            Create hCard
        </button>
    </div>
)