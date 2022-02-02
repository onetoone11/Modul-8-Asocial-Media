export default function Register(){
    return(
        <div className="container login-body register-body">
            
                <div className={`card-body bg--light`}>
                    <h2 className="card-title">Register</h2>
                    <hr/>

                    <form action="">

                        <div className="login-inputs">
                            <div className="form-group">
                                <input type="email" placeholder="Email" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Username" className="form-control"/>
                            </div>

                            <div className="form-group">
                                <input type="password" placeholder="Password" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <input type="password" placeholder="Confirm Password" className="form-control"/>
                            </div>
                        </div>

                        <div className="form-group">
                            <input type="submit" value="Register" className="btn btn-outline-dark login-btn bg--white"/>
                        </div>

                    </form>
                </div>

        </div>
    )
}
