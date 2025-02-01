import React, { useState } from 'react'
import { setUsernameForServerList } from '../socketServer/socketServer'


const Login = ({setUsername}) => {
    const [userName, setLocalUserName] = useState('')

    const setMainUsername = () => {
        setUsername(userName)
        setUsernameForServerList(userName)
        sessionStorage.setItem('username',JSON.stringify(userName))
    }

    return (
        <div className='m-5 text-center'>
            <h1>Welcome!</h1>
            <p>Enter a Username to use in chat room</p>
            <div className='input-group d-flex justify-content-center'>
                <input onChange={(e)=>{setLocalUserName(e.target.value)}} className='rounded-start p-2' type="text" />
                <button onClick={setMainUsername} className='btn btn-dark'>Enter</button>
            </div>
        </div>
    )
}

export default Login