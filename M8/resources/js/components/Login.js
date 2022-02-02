import React from 'react'

export default function Login(){

    const [darkMode, setDarkMode] = React.useState(true)

    return(
        <div className="container login-body">
            
                <div className={`card-body bg--light`}>
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
                            <input type="submit" value="Log in" className="btn btn-outline-dark login-btn bg--white"/>
                        </div>

                    </form>
                </div>

        </div>
    )
}
