import React from 'react'
import LikeCommentForm from './LikeCommentForm'

export default function Comment(props){

    const [showToggle, setShowToggle] = React.useState(false);

    const [isReplying, setIsReplying] = React.useState(false);

    

    return(
    <div>
        <div className="row w-100">
            <div className="comment--profile bg--white mr-3 ml-4"></div>
            <div> 
                <div className={`comment ${props.darkMode ? 'bg--darkgray' : 'bg--white'}`} style={{minWidth:"200px", maxWidth: "500px", overflowWrap: "break-word"}}>{props.text}</div> 
                {/* <input hidden type="checkbox" name="likes" id="like" value="like" />
                <label className="like--i ml-3" htmlFor="like"><i className="fal fa-grin-hearts mr-4 fa-lg"></i></label> */}
                
                <LikeCommentForm user_id={props.user_id} comment_id={props.id}/>

                <button className="icon-btn" onClick={() => setIsReplying(a => !a)}><i className="fal fa-reply mr-4 ml-3 fa-lg"></i></button>
                
                
                {/* <div className={`comment ${props.darkMode ? 'bg--darkgray' : 'bg--white'}`} style={{ minWidth:"200px", maxWidth: "500px", overflowWrap: "break-word", position: 'relative'}}>
                    <p style={{position: 'absolute', fontSize: '8px', top: '2px'}}>Replace with the name of the owner</p>
                    {props.text}
                </div> 
                <input hidden type="checkbox" name="likes" id="like" value="like" />
                <label className="like--i ml-3" htmlFor="like"><i className="fal fa-grin-hearts mr-4 fa-lg"></i></label>
                
                <button className="icon-btn" onClick={() => setIsReplying(a => !a)}><i className={`${props.darkMode && 'c-white'} fal fa-reply mr-4 ml-3 fa-lg`}></i></button> */}

                {props.test && 
                <button className="icon-btn" onClick={() => setShowToggle((prevShowToggle) => !prevShowToggle)}><i style={{transition: "0.2s", transform: `rotate3d(0, 0, 1, ${showToggle ? "-180deg" : "0deg"})`}} className={`${props.darkMode && 'c-white'} fal fa-chevron-down fa-lg ml-3`}></i></button>}
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