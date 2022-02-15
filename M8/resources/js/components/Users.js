import React from 'react';
import User from './User';

export default function Users(props){

    document.body.style.overflowY = 'scroll';

    function showUsers(){

        return(
            <>
            {usersTable.map(user => <User darkMode={props.darkMode} id={user.id} key={user.id} userName={user.name} role={user.type} created={user.created_at} />)}
       
            </>
        )
    }

    function showSearch(){
        if(searchValue.search_input.length < 1){
            return showUsers();
        }
        return(
            <>
                {usersTable.filter(user => tempUserName.includes(user.name)).map(user => <User darkMode={props.darkMode} id={user.id} key={user.id} userName={user.name} role={user.type} created={user.created_at} />)}
            </>
        )
    }

    const [searchValue, setSearchValue] = React.useState({
        search_input: ''
    })

    function handleSearch(event){
        setSearchValue((prevSearch) => {
            return{
                ...prevSearch,
                [event.target.name]: event.target.value
            }
        })
    }

    const [tempUserName, setTempUserName] = React.useState([])

    console.log(tempUserName);

    let temp = [];

    React.useEffect(() => {

        temp = [];

        if(searchValue.search_input.length < 1){
            showUsers();
        }
        else{
            setTempUserName(() => []);

            for(let i = 0; i < usersTable.length; i++){
                for(let j = 0; j < searchValue.search_input.length; j++){
                    if(usersTable[i].name[j] == searchValue.search_input[j]){
                        temp.push(i);
                    }
                }

                if(temp.length == searchValue.search_input.length){
                    setTempUserName((prevUser) => [...prevUser, usersTable[i].name]);
                }
                temp = [];
            }
        }
        
    }, [searchValue])

    return(
        <>

            <div className="container">
                <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-10 pt-5 mt-5 users--section">
                        <h3 className={`${props.darkMode && 'c-white'} text-center pb-3`}>Manage Users</h3>
                        <div className="text-center pb-5">
                            <input className={props.darkMode && 'border-none'} style={{width: '300px', height: '40px'}} name='search_input' type="search" onChange={handleSearch} placeholder="Search..." />
                        </div>

                        {tempUserName.length > 0 || searchValue.search_input == '' ? <div className="">
                            <div className={`${props.darkMode && 'c-white'} row p-2`}>
                                <div className="col-lg-3">Username</div>
                                <div className="col-lg-3">Role</div>
                                <div className="col-lg-2">Created</div>
                                <div className="col-lg-4">
                                    
                                </div>
                            </div>
                        </div> : <h1 className={`${props.darkMode && 'c-white'} text-center`}>Your search gave no results</h1>}

                        {showSearch()} 

                    </div>
                    <div className="col-lg-1"></div>
                </div>
            </div>

        </>
    )
}