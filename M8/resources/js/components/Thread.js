import React from 'react'
import Comment from './Comment'
export default function Thread(){

    const [img, setImg] = React.useState(false)

    return(
        <div className="container">
            {img && <div>
                <h1>IMG</h1>
                <img src="" alt="" />
            </div>}
            <div className="bg--light-bright">
                <p className="post--p p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum omnis nostrum labore optio. Nulla unde aliquid sit nobis quas qui.</p>
            </div>
            <div className="bg--light comments-sm p-3 post--end">
                <input hidden type="radio" name="likes" id="like" value="like" />
                <input hidden type="radio" name="likes" id="dislike" value="dislike" />
                <label className="like--i" htmlFor="like"><i className="fal fa-grin-hearts mr-4 fa-xl"></i></label>
                <label className="like--i" htmlFor="dislike"><i className="fal fa-sad-cry fa-xl"></i></label>  

                <p className="comments--comment">Comments</p> 

                <Comment test={<Comment test={<Comment />} />} />
                <Comment />
                {/* <Comment /> */}
                

            </div>
        </div>
    )
}