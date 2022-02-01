import Example from './components/Example'
import Navbar from './components/Navbar'
import React from 'react'
import ReactDOM from 'react-dom'

const root = document.getElementById('root')
if(root) {
    ReactDOM.render(
    <>
        <Navbar />
        <Example />
    </>, 
    
    root)
}

const test = document.getElementById('test')

if(test) {
    
ReactDOM.render(
    <div>
        <p>dasdadsa</p>
    </div>, 
    
    test)
}
