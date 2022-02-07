import React from 'react'
import Start from './Start'

const Timeline = (props) => {
    console.log("blabla")
    return (
        <div>
            {posts.map(element => <Start title={element.title} id={element.id} key={element.id} text={element.text} darkMode={props.darkMode}/>)}
        </div>
    )
}

export default Timeline
