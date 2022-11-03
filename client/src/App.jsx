import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import Chat from './components/Chat/Chat';
import Home from './components/Home/Home';


function App() {
  const [userId, setUserId] = useState(uuidv4())
  const [username, setUsername] = useState("");
  const [startChat, setStartChat] = useState(false)


  if (startChat) return <Chat username={username} userId={userId}/>

  return <Home setStartChat={setStartChat} userId={userId} username={username} setUsername={setUsername}/>
}

export default App
