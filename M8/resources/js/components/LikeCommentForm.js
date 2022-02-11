import React from 'react'

const LikeCommentForm = (props) => {
    const handleSubmit = async (e) => {
        e.preventDefault();

        let formData = new FormData();

        formData.append('user_id', props.user_id);
        formData.append('comment_id', props.comment_id);

        const fetchResponse = await fetch(`/rateComment`, {
            method: "post",
            body: formData
        });
        const data = await fetchResponse.json();

        console.log(data);

    }

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit" className="like--i" style={{background: 'none', border: 'none', outline: 'none'}}><i className="fal fa-grin-hearts mr-4 fa-lg"></i></button>
        </form>
    )
}

LikeCommentForm.defaultProps = {
    user_id: 15,
    comment_id: 1
}

export default LikeCommentForm
