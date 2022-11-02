import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import Chat from './pages/Chat/Chat';
import Home from './pages/Home/Home';


function App() {
  const [userId, setUserId] = useState(uuidv4())
  const [startChat, setStartChat] = useState(false)


  if (startChat) return <Chat/>

  return <Home setStartChat={setStartChat} userId={userId} />
}

export default App
