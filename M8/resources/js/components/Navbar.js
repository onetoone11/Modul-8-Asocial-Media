import Button from './Button'
import Logo from './logoBlack.png'


export default function Navbar(){
    return(
        <nav className="d-flex justify-content-between align-items-center p-0">
            <div className="nav--logo"><img className="logo--image" src={Logo}></img></div>
            
            <form className="d-flex justify-content-center align-items-center position-relative">
                <input type="search"/>
                <button className="search-icon"><i className="fa fa-search fa-lg"></i></button>
            </form>
            

            <div className="nav--account">
                <button className="mr-3 btn-login bg--light">Log In</button>
                <button className="btn-register">Register</button>
            </div>
        </nav>
    )
}
