// import findus from './findus.png'
import React from 'react'



export default function Profile(props){

    const [toggleDropDown, setToggleDropDown] = React.useState(true);

    function linkCreatePost(){
        window.location = 'http://127.0.0.1:8000/create';
    }

    const dropdown = document.getElementById('dropdown');

    function toggleDropdown(){
        setToggleDropDown(prevToggle => !prevToggle);
    }

    function test(){
        alert('hello')
    }

    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3"></div>

                    <div className="col-lg-6">
                        <div className="profile--img"></div>

                        <h1 className="pt-3 text-center">Name</h1>

                        <div className="row p-5" style={{position: 'relative'}}>
                            <div onClick={linkCreatePost} className={`col-lg-10 profile--create-post btn--create-post ${props.darkMode ? 'bg--dark-bright' : 'bg--light'}`}> <h3 className={`${props.darkMode ? 'c-white' : 'c-gray'} profile--create-post-text`}>Create Post</h3> </div>
                            <div onClick={toggleDropdown}  className={`col-lg-2 profile--settings btn--profile-settings ${props.darkMode && 'bg--darkgray'}`}><i className="fal fa-ellipsis-h fa-3x settings--i"></i>
                                <div id="dropdown" className={`profile--settings-dropdown ${props.darkMode && 'bg--darkgray'} ${toggleDropDown && 'none'}`} >
                                    <div>
                                        <h3 className="text-left">Menu</h3>
                                        <ul style={{listStyleType: 'none', padding: '0px', margin: '0px'}} className="pl-3 pt-3">
                                            <li onClick={test} className="link"><i className="fal fa-tint pr-3"></i> {props.darkMode ? 'Lightmode' : 'Darkmode'}</li>
                                            <hr />
                                            <li className="link"> <i className="fal fa-sign-out pr-3"></i> Log out</li>
                                        </ul>
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>

                    </div>

                    <div className="col-lg-3"></div>
                </div>   
            </div>
        </> 
    )
}