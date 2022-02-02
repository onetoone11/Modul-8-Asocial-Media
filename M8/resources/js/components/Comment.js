

export default function Comment(props){
    return(
    <div>
        <div className="row">
            <div className="comment--profile mx-3"></div>
            <div>
                <div className="comment">Lorem ipsum dolor sit amet.</div> 
                <input hidden type="radio" name="likes" id="like" value="like" />
                <label className="like--i ml-3" htmlFor="like"><i className="fal fa-grin-hearts mr-4 fa-lg"></i></label>
                <i className="fal fa-reply mr-4 ml-3 fa-lg"></i>
                <i className="fal fa-chevron-down fa-lg ml-3"></i>
            </div>    
        </div> 
        {props && <div className="ml-5">
            {props.test}    
        </div>  } 
    </div>
    )
}