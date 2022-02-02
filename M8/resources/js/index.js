import Example from './components/Example'
import Navbar from './components/Navbar'
import Start from './components/Start'
import Login from './components/Login'
import React from 'react'
import ReactDOM from 'react-dom'
import '../css/bootstrap.css'
import './app.css'

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
    <Navbar />
    , 
    test)
}

const loginroot = document.getElementById('loginroot')

if(loginroot) {
    
ReactDOM.render(
    <> 
        <Navbar />
        <Login />
    </>
    , 
    loginroot)
}
