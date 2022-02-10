import React from 'react'

const LikeCommentForm = (props) => {
    const handleSubmit = async (e) => {
        // e.preventDefault();

        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${props.comment_id}`);

        const data = await res.json();

        console.log(data);

        // const data = await fetch
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="hidden" name="user_id" value={props.user_id} />
            <input type="hidden" name="comment_id" value={props.comment_id} />

            <button type="submit" className="w-100 h-100 like--i ml-3"><i className="fal fa-grin-hearts mr-4 fa-lg"></i></button>
        </form>
    )
}

LikeCommentForm.defaultProps = {
    user_id: 1,
    comment_id: 1
}

export default LikeCommentForm
