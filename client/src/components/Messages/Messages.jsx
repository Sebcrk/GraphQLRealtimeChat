import React from "react";
import { useGetRealtimeMessages } from "../../messages/custom-hooks";

function Messages() {
  const { data, loading } = useGetRealtimeMessages();

  
  console.log(loading, data);

  if (loading) return <h3>Loading messages...</h3>;

  return (
    <div>
      {data.messages.map((message) => (
        <h4 key={message.id}>{`${message.username}: ${message.content}`}</h4>
      ))}
    </div>
  );
}

export default Messages;
