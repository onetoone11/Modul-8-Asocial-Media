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
import EditPost from './components/EditPost'
import CreatePost from './components/CreatePost'
import Timeline from './components/Timeline'


// import test from process.env.REACT_DARK;

export default function App(props){

    const [darkMode, setDarkMode] = React.useState(true)
    

    function handleClick(){
        setDarkMode((prevDarkMode) => !prevDarkMode)
    }

    if(props.page === 'test'){
        return(
            <>
                <Navbar darkMode={darkMode} /> 
                {/* <Register darkMode={darkMode} /> */}
                {/* <Login darkMode={darkMode} /> */}
                {/* <Start darkMode={darkMode} /> */}
                {/* <Thread darkMode={darkMode} /> */}
                {/* <Profile darkMode={darkMode} /> */}
                <Thread darkMode={darkMode} />
                {/* <Start darkMode={darkMode} /> */}
                {/* <button onClick={handleClick}>Change Mode</button> */}
            </>
        )
    }

    if(props.page === 'index'){
        return(
            <>
                <Navbar darkMode={darkMode} /> 
                <Timeline darkMode={darkMode} />
                
                 {/* <Start /> */}
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
                {/* <Login darkMode={darkMode} /> */}
            </>
        )
    }

    if(props.page === 'register'){
        return(
            <>
                <Navbar darkMode={darkMode} /> 
                {/* <Register darkMode={darkMode} /> */}
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
                <CreatePost />
            </>
        )
    }

    if(props.page === 'edit'){
        return(
            <>
                <Navbar darkMode={darkMode} /> 
                <EditPost  />
            </>
        )
    }


    

    

    
}

