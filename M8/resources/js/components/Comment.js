import React from 'react'

export default function Comment(props){

    const [showToggle, setShowToggle] = React.useState(false);

    const [isReplying, setIsReplying] = React.useState(false);

    return(
    <div>
        <div className="row w-100">
            <div className="comment--profile bg--white mr-3 ml-4"></div>
            <div>
                <div className={`comment ${props.darkMode ? 'bg--darkgray' : 'bg--white'}`} style={{maxWidth: "500px", overflowWrap: "break-word"}}>{props.text}</div> 
                <input hidden type="checkbox" name="likes" id="like" value="like" />
                <label className="like--i ml-3" htmlFor="like"><i className="fal fa-grin-hearts mr-4 fa-lg"></i></label>
                
                <button className="icon-btn" onClick={() => setIsReplying(a => !a)}><i className="fal fa-reply mr-4 ml-3 fa-lg"></i></button>

                {props.test && 
                <button className="icon-btn" onClick={() => setShowToggle((prevShowToggle) => !prevShowToggle)}><i style={{transition: "0.2s", transform: `rotate3d(0, 0, 1, ${showToggle ? "0deg" : "-180deg"})`}} className="fal fa-chevron-down fa-lg ml-3"></i></button>}
            </div>    
        </div> 
        {isReplying && 
            <div className={`ml-4 pl-4 border-left`}>
            <form className="row w-100">
                <div className="comment--profile bg--white mr-3 ml-4"></div>
                <div>
                    <textarea className={`comment ${props.darkMode ? 'bg--darkgray' : 'bg--white'}`} maxLength="256" cols="100" rows="3" style={{width: "100%", overflowWrap: "break-word"}}>{props.text}</textarea> 

                    <button className="icon-btn"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                </div>    
            </form>
            </div>
        }

        {props.test && showToggle && <div className={`ml-4 pl-4 border-left`}>
            {props.test}
        </div>  } 

        {/* {props.test && showToggle && props.test} */}
    </div>
    )
}