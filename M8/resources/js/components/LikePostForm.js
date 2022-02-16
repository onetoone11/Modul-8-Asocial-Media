import React, { useEffect } from 'react'

const LikePostForm = (props) => {
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

    const [rating, setRating] = React.useState(props.rating);
    const [likes, setLikes] = React.useState(0);
    const [dislikes, setDislikes] = React.useState(0);

    // const [likes, setLikes] = React.useState(props.likes);
    useEffect(() => setLiked(), []);
    useEffect(() => getLikes(), []);

    const setLiked = async () => {
        if(globalData.user === null) {
            return;
        }
        let formData = new FormData();

        formData.append('user_id', props.user_id);
        formData.append('post_id', props.post_id);

        const fetchResponse = await fetch('/isLikedPost', {
            method: "post",
            body: formData
        });

        const data = await fetchResponse.json();

        // console.log(data.value);

        setRating(() => data.value);
    }
    
    const handleSubmit = val => async () => {
        if(props.user_id === null) {
            window.location.href = `/login`;
            return;
        }
        setRating(prevVal => (prevVal === val) ? null : val);

        let formData = new FormData();

        formData.append('user_id', props.user_id);
        formData.append('post_id', props.post_id);
        formData.append('likes', val);

        const fetchResponse = await fetch(`/ratePost`, {
            method: "post",
            body: formData
        });
        const data = await fetchResponse.json();

        console.log(data, val);
        getLikes();
    }

    const getLikes = async () => {
        let formData = new FormData();

        formData.append('post_id', props.post_id);

        const fetchResponse = await fetch('/postLikes', {
            method: "post",
            body: formData
        });
        const data = await fetchResponse.json();

        setLikes(() => data.likes);
        setDislikes(() => data.dislikes);
    }

    return (
        <>
            {inactive == true ?
                <button onClick={onInactive} style={{background: 'none', border: 'none', outline: 'none'}} className={`like--i ${props.darkMode && "c-white"}`}><i className={`fal fa-grin-hearts mr-4 fa-xl ${(rating === 1) && "btn-active"} ${props.darkMode && "c-white"}`}>{" " + likes}</i></button> 
            :
                <button onClick={handleSubmit(1)} style={{background: 'none', border: 'none', outline: 'none'}} className={`like--i ${props.darkMode && "c-white"}`}><i className={`fal fa-grin-hearts mr-4 fa-xl ${(rating === 1) && "btn-active"} ${props.darkMode && "c-white"}`}>{" " + likes}</i></button>
            }
            {inactive == true ?
                <button onClick={onInactive} style={{background: 'none', border: 'none', outline: 'none'}} className={`like--i ${props.darkMode && "c-white"}`}><i className={`fal fa-sad-cry mr-4 fa-xl ${(rating === 0) && "btn-active"} ${props.darkMode && "c-white"}`}>{" " + dislikes}</i></button>
            :
                <button onClick={handleSubmit(0)} style={{background: 'none', border: 'none', outline: 'none'}} className={`like--i ${props.darkMode && "c-white"}`}><i className={`fal fa-sad-cry mr-4 fa-xl ${(rating === 0) && "btn-active"} ${props.darkMode && "c-white"}`}>{" " + dislikes}</i></button>
            }
        </>
    )
}

LikePostForm.defaultProps = {
    user_id: 1,
    post_id: 1,
    rating: null,
    likes: 0
}

export default LikePostForm
