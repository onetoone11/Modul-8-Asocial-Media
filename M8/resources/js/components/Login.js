export default function Login(){
    return(
        <div className="container login-body">
            
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">Log in</h2>
                    <hr/>

                    <form action="">

                        <div className="login-inputs">
                        <div className="form-group">
                            <input type="text" placeholder="Username" className="form-control"/>
                        </div>

                        <div className="form-group">
                            <input type="password" placeholder="Password" className="form-control"/>
                        </div>
                        </div>

                        <div className="form-group">
                            <input type="submit" value="Log in" className="btn btn-outline-dark login-btn"/>
                        </div>

                    </form>
                </div>
            </div>

            
            

        </div>
    )
}
