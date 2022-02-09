// import findus from './findus.png'
import React, { useReducer } from 'react'
import Timeline from './Timeline'


export default function Profile(props){

    const user_id = 11;

    const [toggleDropDown, setToggleDropDown] = React.useState(true);
    const [toggleImage, setToggleImage] = React.useState(true);
    const [toggleChangeImage, setToggleChangeImage] = React.useState(true);

    console.log(comments)
    console.log(posts)

    function linkCreatePost(){
        window.location = 'http://127.0.0.1:8000/create';
    }

    const dropdown = document.getElementById('dropdown');

    function toggleDropdown(){
        setToggleDropDown(prevToggle => !prevToggle);
    }

    function toggleProfileImage(){
        setToggleImage(prevToggle => !prevToggle);
    }

    function changeProfileImage(){
        setToggleChangeImage(prevToggle => !prevToggle);
    }


    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3"></div>

                    <div className="col-lg-6">
                        <div className="profile--img"  onMouseEnter={toggleProfileImage} onMouseLeave={toggleProfileImage}></div>
                        <div onClick={changeProfileImage} className={`${toggleImage && 'none'} profile--img-cover`} style={{cursor: 'pointer'}} >
                            <div className='profile--image-upload'>
                                <h3 className="text-center c-white"><i className="fal fa-image pr-3"></i>Change profile picture </h3>
                            </div>  
                        </div>

                        <h1 className="pt-3 text-center">{user.name}</h1>

                        <div className="row p-5" style={{position: 'relative'}}>
                            <div onClick={linkCreatePost} className={`col-lg-10 profile--create-post btn--create-post ${props.darkMode ? 'bg--dark-bright' : 'bg--light'}`}> <h3 className={`${props.darkMode ? 'c-white' : 'c-gray'} profile--create-post-text`}>Create Post</h3> </div>
                            <div onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown} className={`col-lg-2 profile--settings btn--profile-settings ${props.darkMode && 'bg--darkgray'}`}><i className="fal fa-ellipsis-h fa-3x settings--i"></i>
                                <div style={{height: '20px', backgroundColor: 'transparent'}}></div>
                                <div id="dropdown" className={`profile--settings-dropdown ${props.darkMode && 'bg--darkgray'} ${toggleDropDown && 'none'}`} >
                                    <div>
                                        <h3 className="text-left">Menu</h3>
                                        <ul style={{listStyleType: 'none', padding: '0px', margin: '0px'}} className="pl-3 pt-3">
                                            <li className="link"><i className="fal fa-tint pr-3"></i> {props.darkMode ? 'Lightmode' : 'Darkmode'}</li>
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

            <div className={`${props.darkMode ? 'bg--dark-bright-op' : 'bg--light-bright'} ${toggleChangeImage && 'none'} profile--change-image`}>
                <form action={`/changeImage/${user_id}`}>
                    <div className="text-center" style={{opacity: '1', marginTop: '250px', position: 'relative'}}>
                        <i className="fa-solid fa-xmark fa-3x x-mark" onClick={changeProfileImage} style={{position: 'absolute', top: '-100px', right: '400px'}}></i>
                        <input type="text" placeholder='https://example.com' /><br /><br />
                        <button className="profile--change-image-btn">Submit</button>
                    </div>
                    
                </form>
            </div>

            <Timeline darkMode={props.darkMode} />
        </> 
    )
}