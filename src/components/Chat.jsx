import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { receiveMessage, sendMessage, setUserlist } from '../redux/actions'
import { listenForMessages, sendMessageToServer, setUsernameForServerList } from '../socketServer/socketServer'


const Chat = () => {

    const [username,setUsername] = useState('')
    const [input,setInput] = useState('')
    const dispatch = useDispatch()
    const messages = useSelector(state => state.messages)
    const users = useSelector(state => state.users)

    // console.log(users);
    useEffect(()=>{
       setUsername(JSON.parse(sessionStorage.getItem('username')))
       
    },[dispatch])

    useEffect(() => {
        listenForMessages((message) => {
          if (message.type === 'USER_LIST') {
            dispatch(setUserlist(message.users));
          } else {
            dispatch(receiveMessage(message));
          }
        });
      }, [dispatch]);

    const handleSendMessage = async (e) => {
        e.preventDefault()
        if(input){
            const message = {
                type: 'MESSAGE',
                text : input,
                username : username ? username : "Anonymous",
                timeStamp : new Date().now
            }
            try{ 
            // dispatch(sendMessage(message));
            sendMessageToServer(message);}
            catch(e){
                console.log(e);
            }
            setInput('')
        }else{
            alert('Enter Some message to send!')
        }
    }

  return (
    <div>
        <h1 className='text-center m-4'>Welcome to ChatRoom <span className='text-primary fw-semibold'>{username}</span></h1>
        <div className='row container-fluid'>
            
            {/* Chat */}
            <div style={{height:'80vh',overflow:'auto'}} className='border container rounded shadow p-4 my-3 col-lg-9'>
                <div style={{minHeight:'80%',maxHeight:'80%', overflowY:'auto'}} className="screen p-3">
                    {messages?.length > 0 ? 
                        messages?.map(msg => (
                        <h5 key={msg?.timeStamp} className='fw-bold text-success my-3'>{msg?.username}: <span className='fw-light text-dark'>{msg?.text}</span></h5>
                        ))
                        :
                        <div></div>
                    }
                </div>
                <div className="chatbar input-group form ">
                    <input value={input} onChange={(e)=>{setInput(e.target.value)}} type="text" className='form-control form-control-lg'/>
                    <button type='submit' onClick={handleSendMessage} className='btn btn-success px-5 py-2'><i className="fa-solid fa-paper-plane"></i></button>
                </div>
            </div>
            {/* users */}
            <div style={{fontFamily:'monospace', maxHeight:'30rem'}} className='col-sm-12 col-lg-2 my-3 container rounded border shadow-lg'>
                <h3 style={{fontFamily:'monospace'}} className='text-center m-3 text-uppercase'>Users</h3>
                <hr />
                <div style={{ maxHeight:'23rem',overflowY:'scroll'}}>
                    {
                        users?.length > 0 ? 
                         users?.map((user)=>(
                            <div style={{fontFamily:'monospace'}} className='shadow-sm my-2 p-3 border fs-5 fst-italic fw-semibold text-center overflow-hidden'><span className='text-success fst-normal float-start'>◉</span>{user}</div>
                         ))
                         :
                         <div></div>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Chat