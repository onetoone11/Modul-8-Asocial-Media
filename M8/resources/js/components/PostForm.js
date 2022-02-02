import React from 'react'

const PostForm = ({ mode }) => {
    return (
        <div className="container post-create-body c-gray">
            <div className="card bg--light">
                <div className="card-body bg--light">
                    <h2 className="card-title">Create Post</h2>
                    <hr></hr>

                    {/* <form className="d-flex flex-column h-100"> */}
                    <form>

                        <div className="form-group">
                            <input type="text" placeholder="Header" className="form-control" />
                        </div>
                        
                        <div className="form-group">
                            <input type="textarea" style={{height: '100%'}} placeholder="Body text" rows="3" className="form-control" />
                        </div>
                        
                        <div className="form-group">
                        <input type="file" id="image-input" className="form-control"/>
                        </div>
                        

                        <div className="form-group w-100 d-flex justify-content-center">
                            <input type="submit" value="Create Post" className="btn btn-outline-dark login-btn" />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default PostForm
