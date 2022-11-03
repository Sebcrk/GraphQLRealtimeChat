import { useState } from "react";
import styles from "./Home.module.css";
import chatImg from "../../assets/chat1.jpg";
import groupChatImg from "../../assets/group_chat.svg";

function Home({ setStartChat, userId, username, setUsername }) {

  const handleStartChat = () => {
    if (!username) {
      return alert ("Please enter your username")
    }

    const data = {username, id: userId}

    sessionStorage.setItem("user",JSON.stringify(data))
    setStartChat(true)
  }

  return (
    <div className={styles.container}>
      {/* <nav className={styles.navbar}>
        <h3>Chat</h3>
      </nav> */}
      <div className={styles.home}>
        <div className={styles.left}>
          <h1>Chat with your community</h1>
          <p>
            A chat application using GraphQL Subscriptions and Web Sockets to communicate in
            realtime. One click away from connecting with your community.
          </p>
          <div className={styles.inputContainer}>
            <input
              type="text"
              value={username}
              placeholder="Enter your username"
              onChange={({ target }) => setUsername(target.value)}
            />
            <button onClick={handleStartChat}>Join</button>
          </div>
        </div>
        <div className={styles.right}>
          <img alt="Chat image" src={chatImg} />
        </div>
      </div>
    </div>
  );
}

export default Home;
