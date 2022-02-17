import React from 'react'
import LikeCommentForm from './LikeCommentForm'

export default function Comment(props){

    const [showToggle, setShowToggle] = React.useState(false);

    const [isReplying, setIsReplying] = React.useState(false);

    const onNotLogged = () => {
        window.location.href = `/login`;
    }

    const onInactive = () => {
        window.location.href = `/inactive`;
    }

    let inactive = false;
    if(!globalData.user) {
    } else {
        if(globalData.user.type === 'inactive') {
            inactive = true;
        }
    }

    let temp;
    for(let i = 0; i < commentUser.length; i++){
        if(commentUser[i].id == props.user_id){
            temp = i;
        }
    }

    const [userId, setUserId] = React.useState(props.user_id);

    const deleteComment = async () => {
        setUserId(() => null);
        if(globalData.user === null) {
            return;
        }
        let formData = new FormData();

        formData.append('comment_id', props.id);

        const fetchResponse = await fetch('/deleteComment', {
            method: "post",
            body: formData
        });

        const data = await fetchResponse.json();
        
    }



    return(
    <div>
        <div className="row w-100">
            <div className="  mr-3 ml-4">{userId != null && <img className="comment--profile bg--white" src={commentUser[temp] != null ? commentUser[temp].img : null} alt="" />}</div>
            <div> 
                <div className={`comment ${props.darkMode ? 'bg--darkgray' : 'bg--white'}`} style={{ minWidth:"200px", maxWidth: "500px", overflowWrap: "break-word", position: 'relative'}}>
                   {userId != null && <p style={{position: 'absolute', fontSize: '8px', top: '2px'}}>{commentUser[temp] != null && commentUser[temp].name}</p>}
                {userId == null ? "Removed" : props.text}
                {/* {userId != null && globalData.user.type == 'admin' ? <button onClick={deleteComment} style={{float: 'right'}} className={`bg--transparent c-red border-none`}><i className="fa-solid fa-xmark x-mark pl-3 pt-1" style={{}}></i></button> :  */}
                {userId != null && globalData.user != null && globalData.user.type == 'admin' ? <button onClick={deleteComment} style={{float: 'right'}} className={`bg--transparent c-red border-none`}><i className="fa-solid fa-xmark x-mark pl-3 pt-1" style={{}}></i></button> : 
                (userId != null) && (globalData.user != null && globalData.user.id == props.user_id && <button onClick={deleteComment} style={{float: 'right'}} className={`bg--transparent c-red border-none`}><i className="fa-solid fa-xmark x-mark pl-3 pt-1" style={{}}></i></button>)}
                </div> 
                {/* <input hidden type="checkbox" name="likes" id="like" value="like" />
                <label className="like--i ml-3" htmlFor="like"><i className="fal fa-grin-hearts mr-4 fa-lg"></i></label> */}
                
                {userId != null ? <LikeCommentForm darkMode={props.darkMode} user_id={props.user_id} comment_id={props.id}/> : <div style={{padding: '10px 0 10px 0'}}></div>}

                {/* <button className="icon-btn" onClick={() => setIsReplying(a => !a)}><i className="fal fa-reply mr-4 ml-3 fa-lg"></i></button> */}
                
                
                {/* <div className={`comment ${props.darkMode ? 'bg--darkgray' : 'bg--white'}`} style={{ minWidth:"200px", maxWidth: "500px", overflowWrap: "break-word", position: 'relative'}}>
                    <p style={{position: 'absolute', fontSize: '8px', top: '2px'}}>Replace with the name of the owner</p>
                    {props.text}
                </div> 
                <input hidden type="checkbox" name="likes" id="like" value="like" />
                <label className="like--i ml-3" htmlFor="like"><i className="fal fa-grin-hearts mr-4 fa-lg"></i></label>
                
                <button className="icon-btn" onClick={() => setIsReplying(a => !a)}><i className={`${props.darkMode && 'c-white'} fal fa-reply mr-4 ml-3 fa-lg`}></i></button> */}

                {/* ------------------------------ */}
                {inactive ? '' : <div style={{display: 'inline'}}>
                {globalData.user !== null && userId != null &&
                <button className="icon-btn" onClick={() => setIsReplying(a => !a)}><i className={`${props.darkMode && 'c-white'} fal fa-reply mr-4 ml-3 fa-lg`}></i></button>}
                </div>}
                {/* ------------------------------ */}

                {props.test && 
                <button  style={{padding: '0 0 10px 0'}} className="icon-btn" onClick={() => setShowToggle((prevShowToggle) => !prevShowToggle)}><i style={{transition: "0.2s", transform: `rotate3d(0, 0, 1, ${showToggle ? "-180deg" : "0deg"})`}} className={`${props.darkMode && 'c-white'} fal fa-chevron-down fa-lg ml-3`}></i></button>}
            </div>    
        </div> 
        {isReplying && 
            <div className={`ml-4 pl-4 border`}>
            <form className="row w-100" action={`/comment/${post_id}`} method="get">
                <div className="comment--profile bg--white mr-3 ml-4"></div>
                <div>
                    <input type="hidden" id="parent_id" name="parent_id" value={props.id} />
                    <textarea id="text" name="text" className={`comment ${props.darkMode ? 'bg--darkgray' : 'bg--white'}`} maxLength="256" cols="100" rows="3" style={{width: "100%", overflowWrap: "break-word"}} />

                    <button className="icon-btn"><i className="fa fa-paper-plane" aria-hidden="true"></i></button>
                </div>    
            </form>
            </div>
        }

        {props.test && showToggle && <div className={`ml-4 pl-4`}>
            {props.test}
        </div>  } 

        {/* {props.test && showToggle && props.test} */}
    </div>
    )
}