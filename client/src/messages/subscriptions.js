import { gql } from "@apollo/client";

export const MESSAGES = gql`
subscription Messages {
    messages {
      id
      userId
      username
      content
    }
  }
`