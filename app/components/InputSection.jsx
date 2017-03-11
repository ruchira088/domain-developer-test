import React from "react"
import classNames from "classnames"

import "styles/input-section.scss"

export default ({title, children, onUpdateValue, values, className}) => {
    const fields = React.Children.map(children, child => React.cloneElement(child, {
        values,
        onChange: onUpdateValue
    }))

    return (
        <div className={classNames(className, "input-section")}>
            <div className="input-section-title">
                { title }
            </div>
            <div className="input-section-fields">
                { fields }
            </div>
        </div>
    )
}