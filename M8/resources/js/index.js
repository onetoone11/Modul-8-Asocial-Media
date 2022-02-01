import Example from './components/Example'
import Navbar from './components/Navbar'
import React from 'react'
import ReactDOM from 'react-dom'
import '../css/bootstrap.css'
import './app.css'

const root = document.getElementById('root')
if(root) {
    ReactDOM.render(
    <Example />, 
    
    root)
}

const test = document.getElementById('test')

if(test) {
    
ReactDOM.render(
    <Navbar />, 
    
    test)
}
