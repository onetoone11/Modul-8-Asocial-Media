import findus from './findus.png'

export default function Profile(){
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3"></div>

                    <div className="col-lg-6">
                        <div className="profile--img"></div>

                        <div className="row p-5">
                            <div className="col-lg-10 profile--create-post bg--light"> <h3 className="c-gray profile--create-post-text">Create Post</h3> </div>
                            <div className="col-lg-2 profile--settings"><i className="fal fa-ellipsis-h fa-3x settings--i"></i></div>
                        </div>

                    </div>

                    <div className="col-lg-3"></div>
                </div>   
            </div>
        </> 
    )
}