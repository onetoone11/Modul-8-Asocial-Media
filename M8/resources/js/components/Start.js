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

    function skånska(str) {

        const replace = (str) => {

        }

        const skånskDictionary = {
            "skottkärra": "rullebör",
            "ja": "jao",
            "mat": "mad",
            "potatis": "päror",
            "är": "e",
            "huvud": "hue",
            "lite": "litta",
            "konstigt": "konstid",
            "på": "po",
            "hemma": "himma",
            "viset": "vised",
            "lat": "slashas",
            "avundsjuk": "förtröden",
            "nyfiken": "förveden",
            "farfar": "faffa",
            "fattas": "fallerar",
            "saknas": "felar",
            "apparat": "mackapär",
            "hjälm": "störtkruka",
            "morfar": "måffar",
            "mycket": "mö",
            "skit": "mög",
            "smutsig": "mögig",
            "väderkvarn": "mölla",
            "ohygienisk": "mögtocke",
            "päron": "pära",
            "pojke": "påg",
            "flicka": "tös",
            "sömnig": "pömsig",
            "retas": "tetas",
            "kivas": "tetas",
            "flera år": "åravis",
            "kaka": "kaga",
            "tand": "bissing",
            "tänder": "bissingar",
            "stirra": "bliga",
            "titta": "bliga",
            "blöda": "bloa",
            "blöt": "blydded",
            "våt": "blydded",
            

        }
        
        let a = Object.entries(skånskDictionary);
        

        for(let i = 0; i < a.length; i++) {
            str = str.replace(new RegExp(a[i][0], "g"), " " + a[i][1]);
        }
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

    let index = '/profile';
    let path = window.location.pathname;

    let temp;
    for(let i = 0; i < postUser.length; i++){
        if(postUser[i]['id'] == props.post_user_id){
            temp = i;
        }
    }

    if(path != index){   

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
    
    }

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
        'scambleWords': scambleWords,
        'skanska': skånska
    };

    const [sortOfAl, setSortOfAl] = React.useState('none');

    const [zoomImage, setZoomImage] = React.useState(true);

    return(

        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    {img && <div>
                        {globalData.user != null ? <img style={{maxWidth: '540px', maxHeight: '540px'}} className={path != index ? ((sortOfAl == 'image' && postUser[temp]['id'] != globalData.user.id) ? `${postUser[temp]['algorithm']}` : '') : ''} src={props.image} alt="" /> :
                        <img style={{maxWidth: '540px', maxHeight: '540px'}} className={path != index ? (sortOfAl == 'image' ? `${postUser[temp]['algorithm']}` : '') : ''} src={props.image} alt="" />}
                    </div>}
                    <div className={props.darkMode ? "bg--dark-bright" : "bg--light-bright"}> 
                        {globalData.user != null ? <h1 className={img ? "pl-3 img-text text-border c-white" : "pl-3"}>{path != index ? ((sortOfAl == 'text' && postUser[temp]['id'] != globalData.user.id) ? setText(postUser[temp]['algorithm'], (props.title)) : props.title) : props.title}</h1> :
                        <h1 className={img ? "pl-3 img-text text-border c-white" : "pl-3"}>{path != index ? (sortOfAl == 'text' ? setText(postUser[temp]['algorithm'], (props.title)) : props.title) : props.title}</h1>}

                        {globalData.user != null ? <p className="post--p p-3" style={{wordBreak: 'break-all'}}>{path != index ? ((sortOfAl == 'text' && postUser[temp]['id'] != globalData.user.id) ? setText(postUser[temp]['algorithm'], (props.text)) : props.text) : props.text}</p> : 
                        <p className="post--p p-3" style={{wordBreak: 'break-all'}}>{path != index ? (sortOfAl == 'text' ? setText(postUser[temp]['algorithm'], (props.text)) : props.text) : props.text}</p>}
                    </div>
                    <div className={props.darkMode ? "bg--dark comments-sm p-3 post--end" : "c-gray bg--light comments-sm p-3 post--end"}>

                        <LikePostForm user_id={props.user_id} post_id={props.id} darkMode={props.darkMode} />

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