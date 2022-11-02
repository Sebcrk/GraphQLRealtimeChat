 const typeDefs = `
type Message {
    id: ID!
    userId: String!
    user: String!
    content: String!
}

type Query {
    messages: [Message!]
}

type Mutation {
    sendMessage (userId: String!, user: String!, content: String!): ID
}

type Subscription {
    messages: [Message!]
}
`;

export default typeDefs