import { useRef, useEffect } from "react";
import { useGetRealtimeMessages } from "../../messages/custom-hooks";
import styles from "./Messages.module.css";

function Messages(props) {
  const { data, loading } = useGetRealtimeMessages();

  const bottomRef = useRef();

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "auto" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [data]);

  if (loading) return <h3>Loading messages...</h3>;

  return (
    <>
        {data.messages.map((message) => {
          const isCurrentUser = message.userId === props.userId;
          return (
            <div
              key={message.id}
              style={{
                display: "flex",
                justifyContent: isCurrentUser ? "flex-end" : "flex-start",
              }}
            >
              {!isCurrentUser && (
                <div className={styles.userAvatar}>
                  {message.username.slice(0, 1).toUpperCase()}
                </div>
              )}
              <div>
                <h5 style={{ display: "flex", justifyContent: "flex-start" }}>
                  {message.username}
                </h5>
                <p
                  style={{
                    background: isCurrentUser ? "#2C454F" : "#6FE1C0",
                    color: isCurrentUser ? "#74EAD5" : "white",
                  }}
                  className={styles.message}
                >
                  {message.content}
                </p>
              </div>
            </div>
          );
        })}
      <div ref={bottomRef} />
    </>
  );
}

export default Messages;
