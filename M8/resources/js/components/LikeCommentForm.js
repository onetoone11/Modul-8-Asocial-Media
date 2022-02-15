import React, { useEffect } from 'react'

const LikeCommentForm = (props) => {
    const [rating, setRating] = React.useState(false);

    useEffect(() => setLiked(), []);

    const handleSubmit = async () => {
        if(globalData.user === null) {
            window.location.href = `/login`;
            return;
        }
        setRating(oldRating => !oldRating);

        let formData = new FormData();

        formData.append('user_id', globalData.user.id);
        formData.append('comment_id', props.comment_id);

        const fetchResponse = await fetch(`/rateComment`, {
            method: "post",
            body: formData
        });
        const data = await fetchResponse.json();

        console.log(data);
    }

    const setLiked = async () => {
        if(globalData.user === null) {
            return;
        }
        let formData = new FormData();

        formData.append('user_id', globalData.user.id);
        formData.append('comment_id', props.comment_id);

        const fetchResponse = await fetch('/setLikedComment', {
            method: "post",
            body: formData
        });

        const data = await fetchResponse.json();

        setRating(() => data.exists);
    }

    return (
    <button onClick={handleSubmit} className={`like--i`} style={{background: 'none', border: 'none', outline: 'none'}}><i className={`${props.darkMode && "c-white"} ${rating && "btn-active"} fal fa-grin-hearts mr-4 fa-lg`}></i></button>
    )
}

LikeCommentForm.defaultProps = {
    user_id: 15,
    comment_id: 1
}

export default LikeCommentForm
