import { createContext } from "react";

const initialState = {
  username: "",
  startChat: false,
  onJoinChat: () => {},
  onLeaveChat: () => {},
  onSendMessage: () => {},
};
const UserContext = createContext(initialState);

export default UserContext


