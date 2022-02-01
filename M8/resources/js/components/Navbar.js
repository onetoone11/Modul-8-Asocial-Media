
export default function Navbar(){
    return(
        <nav>
            <div className="nav--logo">Logo</div>

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
