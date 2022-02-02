import React from 'react'
export default function Start(){

    const [img, setImg] = React.useState(false)

    const [darkMode, setDarkMode] = React.useState(true)


    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    {img && <div>
                        <h1>IMG</h1>
                        <img src="" alt="" />
                    </div>}
                    <div className={darkMode ? "bg--dark-bright" : "bg--light-bright"}> 
                        <p className="post--p p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum omnis nostrum labore optio. Nulla unde aliquid sit nobis quas qui.</p>
                    </div>
                    <div className={darkMode ? "bg--dark comments-sm p-3 post--end" : "bg--light comments-sm p-3 post--end"}>
                        <input hidden type="radio" name="likes" id="like" value="like" />
                        <input hidden type="radio" name="likes" id="dislike" value="dislike" />
                        <label className="like--i" htmlFor="like"><i class="fal fa-grin-hearts mr-4 fa-xl"></i></label>
                        <label className="like--i" htmlFor="dislike"><i class="fal fa-sad-cry fa-xl"></i></label>  

                        <p className="comments--comment">Comments</p> 

                        <div>
                            <div className={darkMode ? "comment bg--darkgray" : "comment bg--white"}>Lorem ipsum dolor sit amet.</div>
                            <div className={darkMode ? "comment bg--darkgray" : "comment bg--white"}>Lorem ipsum dolor sit.</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </div>
    )
}