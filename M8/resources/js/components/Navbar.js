import Button from './Button'
import LogoDark from './logoBlack.png'
import LogoLight from './logoWhite.png'
import React from 'react'
import SearchThread from './searchThread'

export default function Navbar(props){

    if(props.darkMode){
        document.body.style.backgroundColor = '#474747';
    }

    const onLogin = () => {
        window.location.href = `/login`;
    }

    const onRegister = () => {
        window.location.href = `/register`;
    }

    const onProfile = () => {
        window.location.href = `/profile`;
    }

    const onLogo = () => {
        window.location.href = `/`;
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

    function showThreads(){

        return(
            <>
            {posts.map(post => <SearchThread darkMode={props.darkMode} id={post.id} key={post.id} title={post.title} />).filter((element, index) => index < 7)}
       
            </>
        )
    }

    function showSearch(){
        if(searchValue.search_input.length < 1){
            return showThreads();
        }
        return(
            <>
                {posts.filter(post => tempPost.includes(post.title)).map(post => <SearchThread darkMode={props.darkMode} id={post.id} key={post.id} title={post.title} />).filter((element, index) => index < 7)}
            </>
        )
    }

    const [tempPost, setTempPost] = React.useState([])

    // console.log(tempPost);

    let temp = [];

    React.useEffect(() => {

        temp = [];

        if(searchValue.search_input.length < 1){
            showThreads();
        }
        else{
            setTempPost(() => []);

            for(let i = 0; i < posts.length; i++){
                for(let j = 0; j < searchValue.search_input.length; j++){
                    if(posts[i].title[j] == searchValue.search_input[j]){
                        temp.push(i);
                    }
                }

                if(temp.length == searchValue.search_input.length){
                    setTempPost((prevPost) => [...prevPost, posts[i].title]);
                }
                temp = [];
            }
        }
        
    }, [searchValue])

    let name = ""
    if(!globalData.user) {
    } else {
        name = globalData.user.name;
    }


    return(
        <nav className={`d-flex justify-content-between align-items-center p-0 ${props.darkMode ? 'bg--darkmode' : 'bg--white'}`}>
            <div className="d-flex w-50 ">
                <div className="nav--logo mr-5" onClick={onLogo}><img className="logo--image" src={props.darkMode ? LogoLight : LogoDark}></img></div>

                <div className="d-flex justify-content-center align-items-center position-relative w-100">
                    <input type="search" name='search_input' onChange={handleSearch} className={props.darkMode ? 'border-none' : 'border-b'} />
                    <button className="icon-btn search-icon"><i className="fa fa-search fa-lg"></i></button>

                    {searchValue.search_input != '' && <div className={props.darkMode ? 'bg--darkgray' : 'bg--light'} style={{width: '95%', position: 'absolute', top: '62px', paddingTop: '15px'}}>

                    {searchValue.search_input != '' && tempPost < 1  && <h1 className={`${props.darkMode && 'c-white'} text-center`}>Your search gave no results</h1>}

                    {showSearch()}

                    </div>}
                </div>
            </div>
            

            {!globalData.user ? 
            
            <div className="nav--account">
                <button onClick={onLogin} className={`mr-3 btn-login ${props.darkMode ? 'bg--white border-none' : 'bg--light border-b'}`}>Log In</button>
                <button onClick={onRegister} className={`btn-register ${props.darkMode ? 'bg--darkgray border-w' : 'bg--white border-b'} mr-3`} >Register</button>
            </div> 
            : 
            <div className="nav--account mr-3">
                <h3 className="nav--account-name" id="username" onClick={onProfile}>{name}</h3>
                <div className="nav--account-img" style={{}} onClick={onProfile}><img className="nav--account-img" src={globalData.user.img} alt="" /></div>
            </div>}
        </nav>
    )
}
