import React from 'react';

export default function SearchThread(props){

    function toThread(id){
        window.location.href = `/thread/${id}`;
    }

    return(

        // <div onClick={toThread(props.id)}>
            <div onClick={() => toThread(props.id)} className="row search--row" style={{height: '50px'}}>
                <div className="col-lg-8 pl-4">
                    {props.title}
                </div>
                <div className="col-lg-4"></div>
                <br />
                <hr style={{zIndex: '10000', width: '95%', borderColor: 'gray', margin: ' 0 auto'}} />
            </div>
        // </div>

    )
}