import { useState, useEffect } from "react";
import styles from "./Chat.module.css";
import { useSendMessage } from "../../messages/custom-hooks";
import Messages from "../Messages/Messages.jsx"

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
        <button>Hidden Button</button>
      </div>
      <div className={styles.chatContainer}>
        <Messages />
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
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                sendMessageHandler();
              }
            }}
          />
          <button onClick={sendMessageHandler}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
