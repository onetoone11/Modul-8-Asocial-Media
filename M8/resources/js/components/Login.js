import React from 'react'

export default function Login(props){

    return(
        <div className="container login-body">
            
            <div className="card">
                <div className={`card-body ${props.darkMode ? 'bg--dark' : 'bg--light'}`}>
                    <h2 className="card-title">Log in</h2>
                    <hr/>

                    <form action="">

                        <div className={`login-inputs`}>
                        <div className="form-group">
                            <input type="text" placeholder="Username" className={`${props.darkMode && 'bg--darkgray'} form-control`} />
                        </div>

                        <div className="form-group">
                            <input type="password" placeholder="Password" className={`${props.darkMode && 'bg--darkgray'} form-control`} />
                        </div>
                        </div>

                        <div className="form-group">
                            <input type="submit" value="Log in" className="btn btn-outline-dark login-btn bg--white"/>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    )
}
