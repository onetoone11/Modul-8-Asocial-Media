import React from 'react'

const Button = ({ class1, text, onclick }) => {
    return (
        <div>
            <button className={class1} onClick={onclick}>{text}</button>
        </div>
    )
}

export default Button
