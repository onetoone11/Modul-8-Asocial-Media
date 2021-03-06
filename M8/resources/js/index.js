import App from './app'
import React from 'react'
import ReactDOM from 'react-dom'
import '../css/bootstrap.css'
import './app.css'

const index = document.getElementById('index');
const thread = document.getElementById('thread');
const login = document.getElementById('login');
const register = document.getElementById('register');
const profile = document.getElementById('profile');
const create = document.getElementById('create');
const edit = document.getElementById('edit');
const users = document.getElementById('users');

const test = document.getElementById('test')


if(test) {
    
ReactDOM.render(
    <App page='test' />
    , 
    test)
}

if(index) {
    ReactDOM.render(
        <App page='index' />
        , 
        index)
}

if(thread) {

    ReactDOM.render(
        <App page='thread' />
        , 
        thread)
}

if(login) {
    ReactDOM.render(
        <App page='login' />
        , 
        login)
}

if(register) {

    ReactDOM.render(
        <App page='register' />
        , 
        register)
}

if(profile) {
    ReactDOM.render(
        <App page='profile' />
        , 
        profile)
}

if(create) {

    ReactDOM.render(
        <App page='create' />
        , 
        create)
}

if(edit) {
    ReactDOM.render(
        <App page='edit' />
        , 
        edit)
}

if(users) {
    ReactDOM.render(
        <App page='users' />
        , 
        users)
}