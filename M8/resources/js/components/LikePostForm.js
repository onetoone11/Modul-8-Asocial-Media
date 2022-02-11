import React from 'react'

const LikePostForm = (props) => {
    const [rating, setRating] = React.useState(props.rating);

    const handleSubmit = val => async () => {
        // if(rating === val) {
        //     setRating(() => null);
        // } else {
        //     setRating(() => val);
        // }
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
        //fetchData
    }

    // const getDataBack = async () => {
    //     const response = await fetch()

    // }

    return (
        <>
            
            {/* <input hidden type="radio" name="likes" id="like" value="1" />
            <input hidden type="radio" name="likes" id="dislike" value="0" /> */}
            
            {/* <label className="like--i" htmlFor="like"><i className="fal fa-grin-hearts mr-4 fa-xl"></i></label>
            <label className="like--i" htmlFor="dislike"><i className="fal fa-sad-cry fa-xl"></i></label> */}

            <button onClick={handleSubmit(1)} style={{background: 'none', border: 'none', outline: 'none'}} className={`like--i`}><i className={`fal fa-grin-hearts mr-4 fa-xl ${(rating === 1) && "btn-active"} ${props.darkMode && "c-white"}`}></i></button>
            <button onClick={handleSubmit(0)} style={{background: 'none', border: 'none', outline: 'none'}} className={`like--i`}><i className={`fal fa-sad-cry mr-4 fa-xl ${(rating === 0) && "btn-active"} ${props.darkMode && "c-white"}`}></i></button>
        </>
    )
}

LikePostForm.defaultProps = {
    user_id: 1,
    post_id: 1,
    rating: null
}

export default LikePostForm
