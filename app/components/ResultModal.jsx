import React from "react"

import "styles/result-modal.scss"

export default ({hide}) => (
    <div className="result-modal-container">
        <div className="result-modal">
            <div className="result-modal-body">
                <div className="modal-body-text">
                    The submit functionality has NOT been implemented.
                </div>
                <button className="modal-ok-button button" onClick={hide}>
                    OK
                </button>
            </div>
        </div>
    </div>
)