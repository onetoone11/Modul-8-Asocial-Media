import React from 'react'
export default function Start(props){

    const [img, setImg] = React.useState(false)


    console.log(props.darkMode)

    const onNotLogged = () => {
        window.location.href = `/login`;
    }

    return(
        // {!globalData.user ? 
        //     <div style={{display: 'inline'}} onClick={onNotLogged} className={props.darkMode ? "bg--dark comments-sm p-3 post--end" : "c-gray bg--light comments-sm p-3 post--end"}>
        //         <input hidden type="radio" name="likes" id="like" className="likeInput" value="like" />
        //         <input hidden type="radio" name="likes" id="dislike" className="likeInput" value="dislike" />
        //         <label className="like--i" htmlFor="like"><i className="fal fa-grin-hearts mr-4 fa-xl"></i></label>
        //         <label className="like--i" htmlFor="dislike"><i className="fal fa-sad-cry fa-xl"></i></label> 
        //     </div> :
        //     <div style={{display: 'inline'}} className={props.darkMode ? "bg--dark comments-sm p-3 post--end" : "c-gray bg--light comments-sm p-3 post--end"}>
        //         <input hidden type="radio" name="likes" id="like" className="likeInput" value="like" />
        //         <input hidden type="radio" name="likes" id="dislike" className="likeInput" value="dislike" />
        //         <label className="like--i" htmlFor="like"><i className="fal fa-grin-hearts mr-4 fa-xl"></i></label>
        //         <label className="like--i" htmlFor="dislike"><i className="fal fa-sad-cry fa-xl"></i></label> 
        //     </div>}
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    {img && <div>
                        <h1>IMG</h1>
                        <img src="" alt="" />
                    </div>}
                    <div className={props.darkMode ? "bg--dark-bright" : "bg--light-bright"}> 
                        <h1 className={img ? "pl-3 img-text text-border" : "pl-3"}>{props.title}</h1>
                        <p className="post--p p-3">{props.text}</p>
                    </div>
                    <div className={props.darkMode ? "bg--dark comments-sm p-3 post--end" : "c-gray bg--light comments-sm p-3 post--end"}>
                        <input hidden type="radio" name="likes" id="like" className="likeInput" value="like" />
                        <input hidden type="radio" name="likes" id="dislike" className="likeInput" value="dislike" />
                        {!globalData.user ? 
                            <label onClick={onNotLogged} className="like--i" htmlFor="like"><i className="fal fa-grin-hearts mr-4 fa-xl"></i></label> :
                            <label className="like--i" htmlFor="like"><i className="fal fa-grin-hearts mr-4 fa-xl"></i></label>
                        }
                        {!globalData.user ? 
                            <label onClick={onNotLogged} className="like--i" htmlFor="dislike"><i className="fal fa-sad-cry fa-xl"></i></label> :
                            <label className="like--i" htmlFor="dislike"><i className="fal fa-sad-cry fa-xl"></i></label>
                        }

                        <p className={`comments--comment`}><a href={`./thread/${props.id}`} className={props.darkMode ? 'c-white' : 'c-gray'} style={{ textDecoration: "none"}}>Comments</a></p>

                        <div>
                            {props.comment1 && <div className={props.darkMode ? "comment bg--darkgray" : "comment bg--white"}>{props.comment1}</div>}
                            {props.comment2 && <div className={props.darkMode ? "comment bg--darkgray" : "comment bg--white"}>{props.comment2}</div>}
                        </div>
                    </div>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </div>
    )
}