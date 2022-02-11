import Button from './Button'
import LogoDark from './logoBlack.png'
import LogoLight from './logoWhite.png'
import React from 'react'

export default function Navbar(props){
    // if(!globalData.user) {
    //     console.log("test")
    // } else {
        console.log(globalData.user)
    // }

    if(props.darkMode){
        document.body.style.backgroundColor = '#474747';
    }

    const onLogin = () => {
        window.location.href = `/login`;
    }

    const onRegister = () => {
        window.location.href = `/register`;
    }

    const onProfile = () => {
        window.location.href = `/profile`;
    }

    const onLogo = () => {
        window.location.href = `/`;
    }

    let name = ""
    if(!globalData.user) {
    } else {
        name = globalData.user.name;
    }

    return(
        <nav className={`d-flex justify-content-between align-items-center p-0 ${props.darkMode ? 'bg--darkmode' : 'bg--white'}`}>
            <div className="d-flex w-50 ">
                <div className="nav--logo mr-5" onClick={onLogo}><img className="logo--image" src={props.darkMode ? LogoLight : LogoDark}></img></div>

                <form className="d-flex justify-content-center align-items-center position-relative w-100">
                    <input type="search" className={props.darkMode ? 'border-none' : 'border-b'} />
                    <button className="icon-btn search-icon"><i className="fa fa-search fa-lg"></i></button>
                </form>
            </div>
            

            {!globalData.user ? 
            
            <div className="nav--account">
                <button onClick={onLogin} className={`mr-3 btn-login ${props.darkMode ? 'bg--white border-none' : 'bg--light border-b'}`}>Log In</button>
                <button onClick={onRegister} className={`btn-register ${props.darkMode ? 'bg--darkgray border-w' : 'bg--white border-b'} mr-3`} >Register</button>
            </div> 
            : 
            <div className="nav--account mr-3">
                <h3 className="nav--account-name" id="username" onClick={onProfile}>{name}</h3>
                <div className="nav--account-img" onClick={onProfile}></div>
            </div>}
        </nav>
    )
}
