import React from 'react'

const PostForm = ({ mode, darkMode }) => {

    return (
        <div className={`container post-create-body ${darkMode ? "c-white" : "c-gray"}`}>
                <div className={`card-body ${darkMode ? "bg--dark" : "bg--light"}`} style={{borderRadius: "20px"}}>
                    {mode === "edit" ? <h2 className="card-title">Edit Post</h2> : <h2 className="card-title">Create Post</h2>}
                    
                    <hr></hr>

                    {/* <form className="d-flex flex-column h-100"> */}
                    <form>

                        <div className="form-group">
                            <input type="text" placeholder="Header" className="form-control" />
                        </div>
                        
                        <div className="form-group">
                            <textarea style={{height: '100%'}} maxLength="512" placeholder="Body text" rows="5" className="form-control" />
                        </div>
                        
                        <div className="form-group">
                        <input type="file" id="image-input" className="form-control"/>
                        </div>
                        

                        <div className="form-group w-100 d-flex justify-content-center">
                            <input type="submit" value={mode === "edit" ? "Save" : "Post"} className="btn btn-outline-dark login-btn bg--white" />
                        </div>

                    </form>
                </div>
        </div>
    )
}

export default PostForm
