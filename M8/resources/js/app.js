require('./bootstrap');

// require('./components/Example');
require('./index')

import React from 'react'

import Navbar from './components/Navbar'
import Thread from './components/Thread'
import Profile from './components/Profile'
import Start from './components/Start'
import Login from './components/Login'
import Register from './components/Register'
import PostForm from './components/PostForm'


// import test from process.env.REACT_DARK;

export default function App(props){

    const [darkMode, setDarkMode] = React.useState(true)
    

    function handleClick(){
        setDarkMode((prevDarkMode) => !prevDarkMode)
    }

<<<<<<< HEAD
    if(props.page === 'test'){
        return(
            <>
                <Navbar darkMode={darkMode} /> 
                {/* <Register darkMode={darkMode} /> */}
                {/* <Login darkMode={darkMode} /> */}
                {/* <Start darkMode={darkMode} /> */}
                {/* <Thread darkMode={darkMode} /> */}
                <Profile darkMode={darkMode} />
                {/* <Thread darkMode={darkMode} /> */}
                <Start darkMode={darkMode} />
                {/* <button onClick={handleClick}>Change Mode</button> */}
            </>
        )
    }

    if(props.page === 'index'){
        return(
            <>
                <Navbar darkMode={darkMode} /> 
                <Start darkMode={darkMode} />
                <Start darkMode={darkMode} />
            </>
        )
    }

    if(props.page === 'thread'){
        return(
            <>
                <Navbar darkMode={darkMode} /> 
                <Thread darkMode={darkMode} />
            </>
        )
    }

    if(props.page === 'login'){
        return(
            <>
                <Navbar darkMode={darkMode} /> 
                <Login darkMode={darkMode} />
            </>
        )
    }

    if(props.page === 'register'){
        return(
            <>
                <Navbar darkMode={darkMode} /> 
                <Register darkMode={darkMode} />
            </>
        )
    }

    if(props.page === 'profile'){
        return(
            <>
                <Navbar darkMode={darkMode} /> 
                <Profile darkMode={darkMode} />
            </>
        )
    }

    if(props.page === 'create'){
        return(
            <>
                <Navbar darkMode={darkMode} /> 
                <PostForm mode="create" />
            </>
        )
    }

    if(props.page === 'edit'){
        return(
            <>
                <Navbar darkMode={darkMode} /> 
                <PostForm mode="edit" />
            </>
        )
    }


    

    

    
=======
    return(
        <>
            <Navbar darkMode={darkMode} /> 
            {/* <Register darkMode={darkMode} /> */}
            {/* <Login darkMode={darkMode} /> */}
            {/* <Start darkMode={darkMode} />
            <Start darkMode={darkMode} /> */}
            <Thread darkMode={darkMode} />
            {/* <Profile darkMode={darkMode} /> */}
            {/* <Thread darkMode={darkMode} /> */}
            {/* <Start darkMode={darkMode} /> */}
            {/* <button onClick={handleClick}>Change Mode</button> */}
        </>
    )
>>>>>>> 60f374bd04959402124e2a673478ff24d9a3dbf7
}

