import { createContext, useState } from "react";

const initialState = {
  username: "",
  startChat: false,
  onJoinChat: () => {},
  onLeaveChat: () => {},
  onSendMessage: () => {}
};
const UserContext = createContext(initialState);

export const UserContextProvider = (props) => {
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
    client.clearStore()
    sessionStorage.clear()
    setStartChat(prevState => !prevState)
  }

  
  return (
    <AuthContext.Provider
      value={{ username, startChat, onJoinChat: handleStartChat, onLeaveChat: handleLeaveChat,  }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default UserContext;
