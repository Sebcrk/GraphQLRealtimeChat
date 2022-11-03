import { gql } from "@apollo/client";

export const ALL_MESSAGES = gql`
query GetAllMessages {
    getAllMessages {
      id
      userId
      username
      content
    }
  }
`