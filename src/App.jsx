import { useEffect, useState } from 'react'
import './App.css'
import Login from './components/Login'
import Chat from './components/Chat'


function App() {

  const [username, setUsername] = useState('')

  useEffect(()=>{
    setUsername(JSON.parse(sessionStorage.getItem('username')))
  },[username])

  return (
    <>
      {
      username ?
        <Chat/>
          :
        <Login setUsername={setUsername}/>
      }
    </>
  )
}

export default App
