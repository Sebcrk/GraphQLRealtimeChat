import { useState, useEffect } from "react";
import styles from "./Chat.module.css";
import { useSendMessage } from "../../messages/custom-hooks";
import Messages from "../Messages/Messages.jsx"
import sentImg from "../../assets/sent.png";

function Chat({username, userId}) {
  const [state, setState] = useState({
    userId: userId,
    username: username,
    content: "",
  });

  const { sendMessage, error } = useSendMessage();


  const sendMessageHandler = () => {
    if (state.content.length > 0) {
      sendMessage({
        variables: state,
      });
      setState({ ...state, content: "" });
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <button>Leave chat</button>
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
