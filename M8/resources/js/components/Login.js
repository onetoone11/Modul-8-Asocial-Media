import React from 'react'

export default function Login(props){

    return(
        <div className="container login-body">
            
                <div className={`card-body ${props.darkMode ? 'bg--dark' : 'bg--light'}`}>
                    <h2 className="card-title">Log in</h2>
                    <hr className={`${props.darkMode ? 'bg--light' : 'bg--dark'}`}/>

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
                            <input type="submit" value="Log in" className={`login-btn ${props.darkMode ? 'border-b' : ''}`}/>
                        </div>

                    </form>
                </div>

        </div>
    )
}
