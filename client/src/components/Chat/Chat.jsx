import { useState } from "react";
import styles from "./Chat.module.css";
import { useSendMessage } from "../../messages/custom-hooks";
import Messages from "../Messages/Messages.jsx"
import sentImg from "../../assets/sent.png";
import closeChatImg from "../../assets/close_window.png";
import { useApolloClient } from "@apollo/client";

function Chat({username, userId, setStartChat}) {
  const [state, setState] = useState({
    userId: userId,
    username: username,
    content: "",
  });
  const client = useApolloClient()

  const { sendMessage, error } = useSendMessage();

  const sendMessageHandler = () => {
    if (state.content.length > 0) {
      sendMessage({
        variables: state,
      });
      setState({ ...state, content: "" });
    }
  };


  const leaveChatHandler = () => {
    client.clearStore()
    sessionStorage.clear()
    setStartChat(prevState => !prevState)
  }

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <img onClick={leaveChatHandler} src={closeChatImg} alt="Leave chat" />
        <div className={styles.title}>
          <h1>Chat App</h1>
          <p>The temporary chat to connect with your community</p>
        </div>
        <button className={styles.hidden}>Hidden Button</button>
      </div>
      <div >
        <Messages userId={userId} username={username}  />
        <div className={styles.chatInput}>
          <input
            type="text"
            onChange={({ target }) =>
              setState((prevState) => ({
                ...prevState,
                content: target.value,
              }))
            }
            value={state.content}
            onKeyUp={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                sendMessageHandler();
              }
            }}
          />
         <img onClick={sendMessageHandler} src={sentImg} alt="Send message button"/>
        </div>
      </div>
    </div>
  );
}

export default Chat;
