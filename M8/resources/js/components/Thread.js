import React from 'react'
import Comment from './Comment'
export default function Thread(props) {

    const [img, setImg] = React.useState(false)

    console.log(comments);
    console.log(post);

    const toRecursiveTree = list => {

    }

    return (
        <div className="container">
            {img && <div>
                <h1>IMG</h1>
                <img src="" alt="" />
            </div>}
            <div className={props.darkMode ? 'bg--dark-bright' : "bg--light-bright"}>
                <p className="post--p p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum omnis nostrum labore optio. Nulla unde aliquid sit nobis quas qui.</p>
            </div>
            <div className={`${props.darkMode ? 'bg--dark' : 'bg--light'} comments-sm p-3 post--end`}>
                <input hidden type="radio" name="likes" id="like" value="like" />
                <input hidden type="radio" name="likes" id="dislike" value="dislike" />
                <label className="like--i" htmlFor="like"><i className="fal fa-grin-hearts mr-4 fa-xl"></i></label>
                <label className="like--i" htmlFor="dislike"><i className="fal fa-sad-cry fa-xl"></i></label>

                <p className="comments--comment">Comments</p>

                {/* Need to convert a list of nodes of comments with parent pointers
                to a recursive tree
                */}
                {comments.map((element,i) => {
                    return <Comment key={i} darkMode={props.darkMode} id={element.id} text={element.text} />
                })}
                <Comment darkMode={props.darkMode} id={1} />

            </div>
        </div>
    )
}