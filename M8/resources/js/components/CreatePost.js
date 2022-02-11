import React from 'react'

const CreatePost = (props) => {

    console.log(props.darkMode)

    function test(){
        console.log(darkMode);
    }

    return (
        <div className={`container post-create-body ${props.darkMode ? "c-white" : "c-gray"}`}>
                <div className={`card-body ${props.darkMode ? "bg--dark" : "bg--light"}`} style={{borderRadius: "20px"}}>
                    <h2 className="card-title">Create Post</h2>
                    
                    <hr></hr>
                    <form action='./createPost' method="get" encType='multipart/form-data'>
                        <div className="form-group">
                            <input name="post_header" type="text" placeholder="Header" className={`form-control ${props.darkMode ? 'bg--darkgray placeholder--hover-w' : ''}`} />
                        </div>
                        
                        <div className="form-group">
                            <textarea name="post_body" style={{height: '100%'}} maxLength="512" placeholder="Body text" rows="5" className={`form-control ${props.darkMode && 'bg--darkgray placeholder--hover-w'}`} />
                        </div>
                        
                        {/* <div className="form-group">
                            <input type="file" name="post_img" id="image-input" className="form-control"/>
                        </div> */}

                        <div className="form-group">
                            <input type="url" placeholder="https://ImageExample.com" name="post_img" id="image-input" className={`form-control ${props.darkMode && 'bg--darkgray placeholder--hover-w'}`}/>
                        </div>
                        
                        <input hidden type="text" name="user_id" value={globalData.user.id} onChange={test} />

                        <div className="form-group w-100 d-flex justify-content-center">
                            <input type="submit" value="Post" className="btn login-btn bg--white" />
                        </div>

                    </form>
                </div>
        </div>
    )
}

export default CreatePost
