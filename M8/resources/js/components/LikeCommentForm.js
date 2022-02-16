import React from 'react'

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

    const handleSubmit = async () => {
        if(props.user_id === null) {
            window.location.href = `/login`;
            return;
        }
        setRating(oldRating => !oldRating);

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

    // const getLikes = async () => {
    //     let formData = new FormData();

    //     formData.append()
    // }

    return (
        <>
        {inactive == true ?
            <button onClick={onInactive} className={`like--i ${rating && "btn-active"}`} style={{background: 'none', border: 'none', outline: 'none'}}><i className={`${props.darkMode && "c-white"} fal fa-grin-hearts mr-4 fa-lg`}></i></button>
            :
            <button onClick={handleSubmit} className={`like--i ${rating && "btn-active"}`} style={{background: 'none', border: 'none', outline: 'none'}}><i className={`${props.darkMode && "c-white"} fal fa-grin-hearts mr-4 fa-lg`}></i></button>
        }
        </>
        )
}

LikeCommentForm.defaultProps = {
    user_id: 15,
    comment_id: 1
}

export default LikeCommentForm
