import React from 'react'

const EditPost = (darkMode) => {

        console.log(post);

        const [post_data, setPostData] = React.useState({
            post_header: post.title,
            post_body: post.text,
            post_img: "hej"
        })

        console.log(post_data)

        function handleInput(event){
            setPostData((prevPostData) => {
                return{
                    ...prevPostData,
                    [event.target.name]: event.target.value
                }
            })
        }

    

    return (
        <div className={`container post-create-body ${darkMode ? "c-white" : "c-gray"}`}>
                <div className={`card-body ${darkMode ? "bg--dark" : "bg--light"}`} style={{borderRadius: "20px"}}>
                    <h2 className="card-title">Edit Post</h2>
                    
                    <hr></hr>

                    {/* <form className="d-flex flex-column h-100"> */}
                    <form action={`/editPost/${post.id}`} method="get">

                        <div className="form-group">
                            <input value={post_data.post_header} name="post_header" onChange={handleInput} type="text" placeholder="Header" className="form-control" />
                        </div>
                        
                        <div className="form-group">
                            <textarea value={post_data.post_body} name="post_body" onChange={handleInput} style={{height: '100%'}} maxLength="512" placeholder="Body text" rows="5" className="form-control" />
                        </div>
                        
                        <div className="form-group">
                            <input type="file" name="post_img" id="image-input" className="form-control"/>
                        </div>
                        
                        <div className="form-group w-100 d-flex justify-content-center">
                            <input type="submit" value="Save" className="btn btn-outline-dark login-btn bg--white" />
                        </div>

                    </form>
                </div>
        </div>
    )
}

export default EditPost
