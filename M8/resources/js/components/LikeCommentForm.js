import React, { useEffect } from 'react'

const LikeCommentForm = (props) => {
    let inactive = false;
    if(!globalData.user) {
    } else {
        if(globalData.user.type === 'inactive') {
            inactive = true;
        }
    }

    const onInactive = () => {
        window.location.href = `/inactive`;
    }

    const [rating, setRating] = React.useState(false);

    const [likes, setLikes] = React.useState(0);

    useEffect(() => setLiked(), []);
    useEffect(() => getLikes(), []);

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

        // console.log(data);
        getLikes()
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

    const getLikes = async () => {
        let formData = new FormData();

        formData.append('comment_id', props.comment_id);

        const fetchResponse = await fetch('/getCommentLikes', {
            method: "post",
            body: formData,
        });

        const data = await fetchResponse.json();

        setLikes(() => data.value);

        // console.log(props.comment_id, data);
    }

    return (
        <>
        {inactive == true ?
            <button onClick={onInactive} className={`like--i ${props.darkMode && "c-white"}`} style={{background: 'none', border: 'none', outline: 'none'}}><i className={`${props.darkMode && "c-white"} ${rating && "btn-active"} fal fa-grin-hearts mr-4 fa-lg`}></i>{likes}</button>
            :
            <button onClick={handleSubmit} className={`like--i ${props.darkMode && "c-white"}`} style={{background: 'none', border: 'none', outline: 'none'}}><i className={`${props.darkMode && "c-white"} ${rating && "btn-active"} fal fa-grin-hearts mr-4 fa-lg`}></i>{likes}</button>
        }
        </>
    
    )
}

LikeCommentForm.defaultProps = {
    user_id: 15,
    comment_id: 1
}

export default LikeCommentForm
