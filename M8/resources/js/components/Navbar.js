import Button from './Button'
import Logo from './logoBlack.png'


export default function Navbar(){
    return(
        <nav>
            <div className="nav--logo"><img src={Logo}></img></div>
            
            {/* <div>
                <input type="search" />
            </div> */}

            <div className="nav--account">
                <button className="mr-3 btn-login bg--light">Log In</button>
                <button className="btn-register">Register</button>
            </div>
        </nav>
    )
}
