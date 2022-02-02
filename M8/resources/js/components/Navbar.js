import Button from './Button'
import Logo from './logoBlack.png'
import React from 'react'


export default function Navbar(){

    const [loggedIn, setLoggedIn] = React.useState(true);

    return(
        <nav className="d-flex justify-content-between align-items-center p-0">
            <div className="nav--logo"><img className="logo--image" src={Logo}></img></div>
            
            <form className="d-flex justify-content-center align-items-center position-relative">
                <input type="search"/>
                <button className="search-icon"><i className="fa fa-search fa-lg"></i></button>
            </form>
            

            {loggedIn ? <div className="nav--account">
                <button className="mr-3 btn-login bg--light">Log In</button>
                <button className="btn-register">Register</button>
            </div> : <h1>Hello</h1>}
        </nav>
    )
}
