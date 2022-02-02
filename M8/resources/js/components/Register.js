import React from 'react'

export default function Register(props){

    return(
        <div className="container login-body register-body">
            
                <div className={`card-body ${props.darkMode ? 'bg--dark' : 'bg--light'}`}>
                    <h2 className="card-title">Register</h2>
                    <hr/>

                    <form action="">

                        <div className="login-inputs">
                            <div className="form-group">
                                <input type="email" placeholder="Email" className={`${props.darkMode && 'bg--darkgray'} form-control`} />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Username" className={`${props.darkMode && 'bg--darkgray'} form-control`} />
                            </div>

                            <div className="form-group">
                                <input type="password" placeholder="Password" className={`${props.darkMode && 'bg--darkgray'} form-control`} />
                            </div>
                            <div className="form-group">
                                <input type="password" placeholder="Confirm Password" className={`${props.darkMode && 'bg--darkgray'} form-control`} />
                            </div>
                        </div>

                        <div className="form-group">
                            <input type="submit" value="Register" className={`login-btn ${props.darkMode ? 'border-b' : ''}`}/>
                        </div>

                    </form>
                </div>

        </div>
    )
}
