import React from 'react'
import Comment from './Comment'
import Logo from './logoBlack.png'
import LikePostForm from './LikePostForm'
export default function Thread(props) {

    const [img, setImg] = React.useState(false);

    const [isReplying, setIsReplying] = React.useState(false);

    React.useEffect(() => {
        setImg(() => {
            if(post.image == null){
                return (false);
            }
            else{
                return (true);
            }
        })
    }, [img])

    // console.log(comments);
    // console.log(post);

    // const toRecursiveTree = list => {
    //     if(list === []) {
    //         return <Comment />
    //     }
    // }

    const findChildren = list => id => {
        if(list.some(element => element.id == id)) {
            return list.filter(element => element.parent_comment_id == id);
        } else {
            console.log("Error");
        }
    }

    const findParents = list => {
        return list.filter(el1 => list.every(el2 => el1.parent_comment_id != el2.id))
    }

    //get parents children, get data from parents, continue with children

    //the tree structure: a tree contains a value and a list of trees, or a value and null
    //the algorithm:
    //if the list is empty, return 'null'
    //else, 


    //this is wrong, the algorithm deletes everything but direct children, leading to a loss of information
    //only the parents need to be remove

    const removeParents = list => {
        return list.filter(el1 => !list.every(el2 => el1.parent_comment_id != el2.id))
    }

    const toTree = list => list1 => {
        if(list.length === 0) {
            return undefined;
        }
        return (
        <div>
            {findParents(list).map(element => {
                return <Comment darkMode={props.darkMode} key={element.id} text={element.user_id == null ? "Removed" : element.text} user_id={element.user_id} id={element.id} test={
                    toTree(findChildren(list1)(element.id))(list1)
                } />
            })}
        </div>
        )
    }

    const replyCheck = () => {
        if(globalData.user == null) {
            window.location.href = `/login`;
            return;
        }
        setIsReplying(a => !a);
    }

    // console.log('hello')
    // console.log(comments[5].user_id);

    let admin = false;
    let isOP = false;
    if(!globalData.user) {
    } else {
        if(!(globalData.user.type === 'admin')) {
            admin = false;
        } else {
            admin = true;
        }
        if(post.user_id == globalData.user.id) {
            isOP = true;
        }
    }

    const onNotLogged = () => {
        window.location.href = `/login`;
    }

    return (
        <div className="container">
            {img && <div className={`text-center ${props.darkMode ? 'bg--dark-img' : 'bg--light'}`}>
                <img style={{maxWidth: '1100px', maxHeight: '500px'}} src={post.image} alt="" />
            </div>}
            
            <div className={props.darkMode ? 'bg--dark-bright post--top' : "bg--light-bright post--top"}>
                <h1 className={img ? "pl-3 img-text text-border c-white" : "pl-3"}>{post.title}</h1>
                <p className="post--p p-3" style={{wordBreak: 'break-all'}}>{post.text}</p>
                <form style={{display: 'contents'}} action={`/deletePost/${post.id}`} method="get">
                    {((globalData.user !== null && globalData.user.id == `${post.user_id}`) || (admin == true)) && <button className="btn--deletePost border-r c-red border-1_5">Delete</button>}
                </form>
                <form style={{display: 'contents'}} action={`/edit/${post.id}`}>
                    {((globalData.user !== null && globalData.user.id == `${post.user_id}`) || (admin == true)) && <button className={`btn--editPost ${props.darkMode ? 'border-w c-white' : 'border-b c-black'}  mr-3`}>Edit</button>}
                    {/* {admin == true || globalData.user !== null && globalData.user.id == `${post.user_id}` && <button className="btn--editPost border-w c-white mr-3">Edit</button>} */}
                </form>
            </div>
            <div className={`${props.darkMode ? 'bg--dark' : 'bg--light'} comments-sm p-3 post--end`}>
                <LikePostForm post_id={post.id} darkMode={props.darkMode} user_id={globalData.user ? globalData.user.id : null} />
                
                
                
                
                
                
                
                
                
                {/* {!globalData.user ? 
                <div style={{display: 'inline'}}  onClick={onNotLogged}>
                    <input hidden type="radio" name="likes" id="like" value="like" />
                    <input hidden type="radio" name="likes" id="dislike" value="dislike" />
                    <label className="like--i" htmlFor="like"><i className="fal fa-grin-hearts mr-4 fa-xl"></i></label>
                    <label className="like--i" htmlFor="dislike"><i className="fal fa-sad-cry fa-xl"></i></label> 
                    <LikePostForm post_id={post.id} user_id={globalData.user ? globalData.user.id : null} />
                </div> :
                <div style={{display: 'inline'}}>
                    <input hidden type="radio" name="likes" id="like" value="like" />
                    <input hidden type="radio" name="likes" id="dislike" value="dislike" />
                    <label className="like--i" htmlFor="like"><i className="fal fa-grin-hearts mr-4 fa-xl"></i></label>
                    <label className="like--i" htmlFor="dislike"><i className="fal fa-sad-cry fa-xl"></i></label> 
                    <LikePostForm post_id={post.id} user_id={globalData.user.id ? globalData.user.id : null} />
                </div>} */}

                <button onClick={() => replyCheck()} style={{background: 'none', border: 'none', outline: 'none'}} className="comments--comment"><p className="comments--comment">Comments</p></button>

                {/* Need to convert a list of nodes of comments with parent pointers
                to a recursive tree
                */}
                {/* {comments.map((element,i) => {
                    return <Comment key={i} darkMode={props.darkMode} id={element.id} text={element.text} />
                })} */}
                {isReplying &&
                <div className={`ml-4 pl-4`}>
                <form className="row w-100" action={`/comment/${post_id}`} method="get">
                    {/* <div className="comment--profile bg--white mr-3 ml-4"></div> */}
                    <div>
                        <input type="hidden" id="parent_id" name="parent_id" value={null} />
                        <textarea id="text" name="text" className={`comment ${props.darkMode ? 'bg--darkgray' : 'bg--white'}`} maxLength="256" cols="100" rows="3" style={{width: "100%", overflowWrap: "break-word"}} />

                        <button className="icon-btn"><i className="fa fa-paper-plane" aria-hidden="true"></i></button>
                    </div>    
                </form>
            </div>
        }

                {toTree(comments)(comments)}

            </div>
        </div>
    )
}