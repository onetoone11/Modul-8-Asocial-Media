import Button from './Button'
import Logo from './logoBlack.png'
import React from 'react'


export default function Navbar(){

    const [loggedIn, setLoggedIn] = React.useState(true);

    const [darkMode, setDarkMode] = React.useState(true)

    return(
        <nav className={`d-flex justify-content-between align-items-center p-0 ${darkMode ? 'bg--darkgray' : 'bg--white'}`}>
            <div className="d-flex w-50 ">
                <div className="nav--logo mr-5"><img className="logo--image" src={Logo}></img></div>

                <form className="d-flex justify-content-center align-items-center position-relative w-100">
                    <input type="search"/>
                    <button className="search-icon"><i className="fa fa-search fa-lg"></i></button>
                </form>
            </div>
            

            {loggedIn ? 
            
            <div className="nav--account">
                <button className={`mr-3 btn-login ${darkMode ? 'bg--white' : 'bg--light'}`}>Log In</button>
                <button className={`btn-register ${darkMode ? 'bg--darkgray border-w' : 'bg--white border-b'}`} >Register</button>
            </div> 
            : 
            <div className="nav--account mr-3">
                <h3 className="nav--account-name">Name</h3>
                <div className="nav--account-img"></div>
            </div>}
        </nav>
    )
}
