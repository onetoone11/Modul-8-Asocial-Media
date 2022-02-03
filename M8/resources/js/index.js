import Example from './components/Example'
import Navbar from './components/Navbar'
import Start from './components/Start'
import Login from './components/Login'
import PostForm from './components/PostForm'
import Register from './components/Register'
import Thread from './components/Thread'

import App from './app'
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

// const test = document.getElementById('test')

// if(test) {
    
// ReactDOM.render(
//     <Navbar />
//     , 
//     test)
// }

const test = document.getElementById('test')

if(test) {
    
ReactDOM.render(
    <App />, 

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

const registerroot = document.getElementById('registerroot')

if(registerroot) {
    
ReactDOM.render(
    <> 
        <Navbar />
        <Register />
    </>
    , 
    registerroot)
}

const create = document.getElementById('create')

if(create) {
    
ReactDOM.render(
    <> 
        <Navbar />
        <PostForm mode="create" />
    </>
    , 
    create)
}
const edit = document.getElementById('edit')

if(edit) {
    
ReactDOM.render(
    <> 
        <Navbar />
        <PostForm mode="edit" />
    </>
    , 
    edit)
}

const postroot = document.getElementById('postroot');

if(postroot) {
    ReactDOM.render(
        <>
            <Navbar />
            <Thread />
        </>
    , postroot)    
}

