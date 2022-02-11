import React from 'react'
import Start from './Start'

const Timeline = (props) => {
    return (
        <div>
            {/* {posts.map((element, index) => <Start comment1={comments[index][0] && comments[index][0].text} comment2={comments[index][1] && comments[index][1].text} title={element.title} id={element.id} user_id={globalData.user.id} key={element.id} text={element.text} darkMode={props.darkMode}/>)} */}
            
            {posts.map((element, index) => <Start comment1={comments[index][0] && comments[index][0].text} comment2={comments[index][1] && comments[index][1].text} image={element.image} title={element.title} id={element.id} user_id={globalData.user ? globalData.user.id : null} key={element.id} text={element.text} darkMode={props.darkMode}/>)}
        </div>
    )
}

export default Timeline
