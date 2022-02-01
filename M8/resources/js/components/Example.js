import React from 'react'
import ReactDOM from 'react-dom'

export default function Example(){
    return <h1>Hello again</h1>
}

const root = document.getElementById('root')

ReactDOM.render(<Example />, root)