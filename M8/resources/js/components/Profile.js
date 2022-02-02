import findus from './findus.png'

export default function Profile(){
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3"></div>

                    <div className="col-lg-6">
                        <div className="profile--img"></div>

                        <div className="row">
                            <div className="col-lg-10 profile--create-post"></div>
                            <div className="col-lg-2 profile--settings"></div>
                        </div>

                    </div>

                    <div className="col-lg-3"></div>
                </div>   
            </div>
        </>
    )
}