import React from 'react'

const CreatePost = (darkMode) => {

    return (
        <div className={`container post-create-body ${darkMode ? "c-white" : "c-gray"}`}>
                <div className={`card-body ${darkMode ? "bg--dark" : "bg--light"}`} style={{borderRadius: "20px"}}>
                    <h2 className="card-title">Create Post</h2>
                    
                    <hr></hr>
                    <form action='./createPost' method="get" encType='multipart/form-data'>
                        <div className="form-group">
                            <input name="post_header" type="text" placeholder="Header" className={`form-control ${darkMode && 'bg--darkgray'}`} />
                        </div>
                        
                        <div className="form-group">
                            <textarea name="post_body" style={{height: '100%'}} maxLength="512" placeholder="Body text" rows="5" className={`form-control ${darkMode && 'bg--darkgray'}`} />
                        </div>
                        
                        {/* <div className="form-group">
                            <input type="file" name="post_img" id="image-input" className="form-control"/>
                        </div> */}

                        <div className="form-group">
                            <input type="url" placeholder="https://ImageExample.com" name="post_img" id="image-input" className={`form-control ${darkMode && 'bg--darkgray'}`}/>
                        </div>
                        
                        <input hidden type="text" name="user_id" value={globalData.user.id} />

                        <div className="form-group w-100 d-flex justify-content-center">
                            <input type="submit" value="Post" className="btn btn-outline-dark login-btn bg--white" />
                        </div>

                    </form>
                </div>
        </div>
    )
}

export default CreatePost
