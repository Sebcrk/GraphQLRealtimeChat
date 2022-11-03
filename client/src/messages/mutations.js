import { gql } from "@apollo/client";


export const SEND_MESSAGE = gql`
mutation SendMessage($userId: String!, $username: String!, $content: String!) {
    sendMessage(userId: $userId, username: $username, content: $content)
  }
`