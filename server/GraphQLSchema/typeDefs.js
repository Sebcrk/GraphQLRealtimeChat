 const typeDefs = `
type Message {
    id: ID!
    userId: String!
    username: String!
    content: String!
}

type Query {
    getAllMessages: [Message!]
}

type Mutation {
    sendMessage (userId: String!, username: String!, content: String!): ID
}

type Subscription {
    messages: [Message!]
}
`;

export default typeDefs