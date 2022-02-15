import React from 'react';

export default function User(props){

    function deleteUser(){
        window.location.href = `/deleteUser/${props.id}`
        // alert(props.userName)
    }

    function adminUser(){
        window.location.href = `/adminUser/${props.id}`
        // alert(props.userName)
    }

    function activeUser(){
        window.location.href = `/activeUser/${props.id}`
    }

    return(

        <div>
            <div className={`${props.darkMode ? props.role == 'inactive' ? 'border-r bg--darkgray' : 'bg--darkgray' : props.role == 'inactive' ? 'border-r' : ''} row users--row bg--light p-2 mt-2`}>
                <div onClick={activeUser} className="col-lg-3">{props.userName}</div>
                <div onClick={activeUser} className="col-lg-3">{props.role}</div>
                <div onClick={activeUser} className="col-lg-2">{props.created}</div>
                <div className="col-lg-4">
                    {props.role === 'user' && <button onClick={deleteUser} className={` btn--deleteUser border-r c-red`} style={{float: 'right'}}>Delete</button>}
                    {props.role === 'user' && <button onClick={adminUser} className={`${props.darkMode ? 'border-w c-white' : 'border-b'} btn--admin c-black mr-3`} style={{float: 'right'}}>Admin</button>}
                </div>
            </div>
        </div>

    )
}