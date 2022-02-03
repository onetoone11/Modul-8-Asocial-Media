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

export default function App(){

    const [darkMode, setDarkMode] = React.useState(true)

    function handleClick(){
        setDarkMode((prevDarkMode) => !prevDarkMode)
    }

    return(
        <>
            <Navbar darkMode={darkMode} /> 
            {/* <Register darkMode={darkMode} /> */}
            {/* <Login darkMode={darkMode} /> */}
            {/* <Start darkMode={darkMode} /> */}
            <Thread darkMode={darkMode} />
            {/* <Profile darkMode={darkMode} /> */}
            {/* <Thread darkMode={darkMode} /> */}
            {/* <Start darkMode={darkMode} /> */}
            {/* <PostForm darkMode={darkMode}/> */}
            <button onClick={handleClick}>Change Mode</button>
        </>
    )
}

