import React from 'react'
import LikePostForm from './LikePostForm'
export default function Start(props){

    const [img, setImg] = React.useState(true)

    React.useEffect(() => {
        setImg(() => {
            if(props.image == null){
                return (false);
            }
            else{
                return (true);
            }
        })
    }, [img])

    const onNotLogged = () => {
        window.location.href = `/login`;
    }
    
    function doubleConsonant(text){
        const myArray = text.split("");
        for(let i = 0; i < myArray.length; i++){
            if(i != (myArray.length - 1)){
                if(myArray[i] == myArray[i + 1]){
                    for(let j = i; j < myArray.length; j++){
                        myArray[j] = myArray[j + 1];
                    }
                }
            }
        }
        return myArray;
    }

    const [zoomImage, setZoomImage] = React.useState(true);

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
                        {/* <img style={{maxWidth: '540px', maxHeight: '540px'}} src={props.image} alt="" /> */}
                        <div style={{maxWidth: '540px', maxHeight: '540px'}} id="zoomImage" className={zoomImage ? 'zoomImage' : ''} ></div>
                        <img style={{maxWidth: '540px', maxHeight: '540px'}} src={props.image} alt="" />
                    </div>}
                    <div className={props.darkMode ? "bg--dark-bright" : "bg--light-bright"}> 
                        <h1 className={img ? "pl-3 img-text text-border c-white" : "pl-3"}>{props.title}</h1>
                        {/* <p className="post--p p-3">{props.text}</p> */}
                        <p className="post--p p-3">{doubleConsonant(props.text)}</p>
                    </div>
                    <div className={props.darkMode ? "bg--dark comments-sm p-3 post--end" : "c-gray bg--light comments-sm p-3 post--end"}>
                        {/* <input hidden type="radio" name="likes" id="like" className="likeInput" value="like" />
                        <input hidden type="radio" name="likes" id="dislike" className="likeInput" value="dislike" />
                        <label className="like--i" htmlFor="like"><i className="fal fa-grin-hearts mr-4 fa-xl"></i></label>
                        <label className="like--i" htmlFor="dislike"><i className="fal fa-sad-cry fa-xl"></i></label>   */}
                        <LikePostForm user_id={props.user_id} post_id={props.id} darkMode={props.darkMode} />


                        {/* {!globalData.user ? 
                            <label onClick={onNotLogged} className="like--i" htmlFor="like"><i className="fal fa-grin-hearts mr-4 fa-xl"></i></label> :
                            <label className="like--i" htmlFor="like"><i className="fal fa-grin-hearts mr-4 fa-xl"></i></label>
                        }
                        {!globalData.user ? 
                            <label onClick={onNotLogged} className="like--i" htmlFor="dislike"><i className="fal fa-sad-cry fa-xl"></i></label> :
                            <label className="like--i" htmlFor="dislike"><i className="fal fa-sad-cry fa-xl"></i></label>
                        } */}

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