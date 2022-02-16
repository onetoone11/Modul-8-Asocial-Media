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
        const myArray = text.split("");
        for(let i = 0; i < myArray.length; i++){
            if(i != (myArray.length - 1)){
                if(myArray[i] == myArray[i + 1]){
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
        for(let i = 0; i < temp.length; i++){
            for(let j = 0; j < specialChars1.length; j++){
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

    const [zoomImage, setZoomImage] = React.useState(true);

    return(

        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    {img && <div>
                        <div style={{maxWidth: '540px', maxHeight: '540px'}} id="zoomImage" className={zoomImage ? 'zoomImage' : ''} ></div>
                        <img style={{maxWidth: '540px', maxHeight: '540px'}} src={props.image} alt="" />
                    </div>}
                    <div className={props.darkMode ? "bg--dark-bright" : "bg--light-bright"}> 
                        <h1 className={img ? "pl-3 img-text text-border c-white" : "pl-3"}>{props.title}</h1>
                        {/* <p className="post--p p-3">{props.text}</p> */}
                        {/* <p className="post--p p-3" style={{wordBreak: 'break-all'}}>{doubleConsonant(props.text)}</p> */}
                        {/* <p className="post--p p-3" style={{wordBreak: 'break-all'}}>{scrambleMid(props.text)}</p> */}
                        <p className="post--p p-3" style={{wordBreak: 'break-all'}}>{convSmileys(props.text)}</p>
                        {/* <p className="post--p p-3" style={{wordBreak: 'break-all'}}>{specialChars(props.text)}</p> */}
                        {/* <p className="post--p p-3" style={{wordBreak: 'break-all'}}>{props.text}</p> */}
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