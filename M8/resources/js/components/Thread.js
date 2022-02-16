import React from 'react'
import Comment from './Comment'
import Logo from './logoBlack.png'
import LikePostForm from './LikePostForm'
export default function Thread(props) {

    const [img, setImg] = React.useState(false)

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
                return <Comment darkMode={props.darkMode} key={element.id} text={element.text} user_id={element.user_id} id={element.id} test={
                // return <Comment user_id={globalData.user && globalData.user.id} key={element.id} text={element.text} id={element.id} test={
                // return <Comment darkMode={props.darkMode} user_id={globalData.user && globalData.user.id} key={element.id} text={element.text} id={element.id} test={
                    toTree(findChildren(list1)(element.id))(list1)
                } />
            })}
        </div>
        )
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

    // Algorithms

    function doubleConsonant(text){
        // Splits whole post into an array
        const myArray = text.split("");
        // For each item in the myarray
        for(let i = 0; i < myArray.length; i++){
            // We dont need to check the last letter
            if(i != (myArray.length - 1)){
                // if letter 1 = letter 2, it means there is 2 letters
                if(myArray[i] == myArray[i + 1]){
                    // Deletes one of the double letters
                    for(let j = i; j < myArray.length; j++){
                        myArray[j] = myArray[j + 1];
                    }
                }
            }
        }
        return myArray;
    }

    function specialChars(text){
        const temp = text.split("");
        const specialChars1 = ['.', '!', '%', '<', '/', ':', '(', "'"];
        const specialChars2 = ['?', ',', '°', '>', '*', ';', ')', "`"];
        // for each character
        for(let i = 0; i < temp.length; i++){
            // Check if the character matches one of the special characters
            for(let j = 0; j < specialChars1.length; j++){
                // If true, change special character
                if(temp[i] == specialChars1[j]){
                    temp[i] = specialChars2[j];
                } 
                else if(temp[i] == specialChars2[j]){
                    temp[i] = specialChars1[j];
                }
            } 
        }
        return temp;
    }

    function convSmileys(text){
        const smileys1 = [':)', ':(', ':|', '>:(', ';)', '<3'];
        const smileys2 = [':(', ':)', ';)', '<3', ':|', '>:('];
        let temp;
        for(let i = 0; i < smileys1.length; i++){
            // if text holds a smiley, replace it with another smiley
            temp = text.replace(`${smileys1[i]}`, `${smileys2[i]}`);
        }
        return temp;
    }

    function lowerUpper(str) {
        console.log('hej')
        console.log(str);
        let newString = '';
        for (let i = 0; i < str.length; i++) {
          newString += str[i] === str[i].toUpperCase() ? str[i].toLowerCase() : str[i].toUpperCase()
        }
        return newString;
    }

    function scrambleMid(str){
        // create array of words
        let arr = str.split(' ');
        let x = arr.length;
        for(let i=0; i<x; i++){
            // for each word take away first and last letter
            let word = arr[i].split('');
            let f = word.shift();
            let e = word.pop();
            while(word.length) {
                // moves middle letters randomly
                f+= word.splice(Math.floor(Math.random()*word.length), 1);
            }
            arr[i]= f+e;
        }
        str = arr.join(' ');
        return str;
    }

    function scambleWords(str) {
        // create array of words
        let arr = str.split('');
        let x = arr.length;
        for(let i=0; i<x-1; i++) {
            let j = Math.floor(Math.random() * x);
            // moves all letters randomly
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        str = arr.join("");
        return str;
    }

    let temp = 0;
    for(let i = 0; i < postUser.length; i++){
        if(postUser[i]['id'] == post.user_id){
            temp = i;
        }
    }

    let sort;
    React.useEffect(() => { 
        if(postUser[temp]['algorithm'] == 'doubleConsonant' || postUser[temp]['algorithm'] == 'specialChars' || 
            postUser[temp]['algorithm'] == 'convSmileys' || postUser[temp]['algorithm'] == 'lowerUpper' ||
            postUser[temp]['algorithm'] == 'scrambleMid' || postUser[temp]['algorithm'] == 'scambleWords'){
            sort = 'text';
        }
        else{
            sort = 'image';
        }
        setSortOfAl(() => sort);
    },[]);

function setText(functionName, param){
    if(functionName != 0){
        return text_algorithms[functionName](param);
    }
}

const [zoomImage, setZoomImage] = React.useState(true);

    let text_algorithms = {
        'doubleConsonant': doubleConsonant, 
        'specialChars': specialChars, 
        'convSmileys': convSmileys, 
        'lowerUpper': lowerUpper, 
        'scrambleMid': scrambleMid, 
        'scambleWords': scambleWords
    };

    const [sortOfAl, setSortOfAl] = React.useState('none');

    return (
        <div className="container">
            {img && <div className={`text-center ${props.darkMode ? 'bg--dark-img' : 'bg--light'}`}>
                {globalData.user != null ? <img style={{maxWidth: '1100px', maxHeight: '500px'}} className={(sortOfAl == 'image' && postUser[temp]['id'] != globalData.user.id) ? `${postUser[temp]['algorithm']}` : ''} src={post.image} alt="" /> : 
                <img style={{maxWidth: '1100px', maxHeight: '500px'}} className={sortOfAl == 'image' ? `${postUser[temp]['algorithm']}` : ''} src={post.image} alt="" />}
            </div>}
            
            <div className={props.darkMode ? 'bg--dark-bright post--top' : "bg--light-bright post--top"}>
                {globalData.user != null ? <h1 className={img ? "pl-3 img-text text-border c-white" : "pl-3"}>{(sortOfAl == 'text' && postUser[temp]['id'] != globalData.user.id) ? setText(postUser[temp]['algorithm'], (post.title)) : post.title}</h1> :
                <h1 className={img ? "pl-3 img-text text-border c-white" : "pl-3"}>{sortOfAl == 'text' ? setText(postUser[temp]['algorithm'], (post.title)) : post.title}</h1>}
                {globalData.user != null ? <p className="post--p p-3" style={{wordBreak: 'break-all'}}>{(sortOfAl == 'text' && postUser[temp]['id'] != globalData.user.id) ? setText(postUser[temp]['algorithm'], (post.text)) : post.text}</p> :
                <p className="post--p p-3" style={{wordBreak: 'break-all'}}>{sortOfAl == 'text' ? setText(postUser[temp]['algorithm'], (post.text)) : post.text}</p>}
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

                <p className="comments--comment">Comments</p>

                {toTree(comments)(comments)}

            </div>
        </div>
    )
}