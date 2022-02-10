import React from 'react'

const LikePostForm = (props) => {
    const [rating, setRating] = React.useState(undefined);

    return (
        <form action={props.url} method="POST">
            <input type="hidden" name="user_id" value={props.user_id} />
            <input type="hidden" name="post_id" value={props.post_id} />
            
            <input hidden type="radio" name="likes" id="like" value="1" />
            <input hidden type="radio" name="likes" id="dislike" value="0" />
            
            <label className="like--i" htmlFor="like"><i className="fal fa-grin-hearts mr-4 fa-xl"></i></label>
            <label className="like--i" htmlFor="dislike"><i className="fal fa-sad-cry fa-xl"></i></label>

            <button>Submit</button>
        </form>
    )
}

LikePostForm.defaultProps = {
    user_id: 1,
    post_id: 1,
    url: ''
}

export default LikePostForm
