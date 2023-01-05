import React from 'react'
import UserContext from "./user-context"


const UserProvider = (props) => {
    const [userId, setUserId] = useState(uuidv4());
    const [username, setUsername] = useState("");
    const [startChat, setStartChat] = useState(false);
  
    const handleStartChat = () => {
      if (!username) {
        return alert("Please enter your username");
      }
  
      const data = { username, id: userId };
  
      sessionStorage.setItem("user", JSON.stringify(data));
      setStartChat(true);
    };
  
    const handleLeaveChat = () => {
      client.clearStore();
      sessionStorage.clear();
      setStartChat((prevState) => !prevState);
    };
  
    return (
      <UserContext.Provider 
        value={{
          username,
          startChat,
          onJoinChat: handleStartChat,
          onLeaveChat: handleLeaveChat,
        }}
        
      >
        {props.children}
      </UserContext.Provider>
    );
  };
  

export default UserProvider