import React, { useState } from 'react'

const Register = (props) => {

    const [registerInput, setRegister] = useState({
        email: '',
        name: '',
        password: '',
    });
    console.log(registerInput);

    // const handleInput = (e) => {
    //     setRegister({...registerInput, [e.target.name]: e.target.value});
    // }
    function handleInput(e){
        setRegister((registerInput) => {
            return{
                ...registerInput,
                [e.target.name]: e.target.value
            }
        })
    }

    // const regiesterSubmit = (e) => {
    //     e.prevernDefault();

    //     const data = {
    //         email: registerInput.email,
    //         name: registerInput.name,
    //         password: registerInput.password,
    //     }
    // }

    return(
        <div className="container login-body register-body">
            
                <div className={`card-body ${props.darkMode ? 'bg--dark' : 'bg--light'}`}>
                    <h2 className="card-title">Register</h2>
                    <hr className={`${props.darkMode ? 'bg--light' : 'bg--dark'}`}/>

                    <form action='./registerUser' method="get">
                        <input type="hidden" name="_token" value="{{ csrf_token() }}" />
                        <div className="login-inputs">
                            <div className="form-group">
                                <input type="email" placeholder="Email" name="email" onChange={handleInput} value={registerInput.email} className={`${props.darkMode && 'bg--darkgray'} form-control`} />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Username" name="name" onChange={handleInput} value={registerInput.name} className={`${props.darkMode && 'bg--darkgray'} form-control`} />
                            </div>

                            <div className="form-group">
                                <input type="password" placeholder="Password" name="password" onChange={handleInput} value={registerInput.password} className={`${props.darkMode && 'bg--darkgray'} form-control`} />
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

export default Register