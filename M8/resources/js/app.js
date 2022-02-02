require('./bootstrap');

// require('./components/Example');
require('./index')

import Navbar from './components/Navbar'
import Thread from './components/Thread'
import Profile from './components/Profile'
import Start from './components/Start'

export default function App(){
    return(
        <>
            <Navbar /> 
            {/* <Start /> */}
            {/* <Thread /> */}
            <Profile />
            <Start />
        </>
    )
}

