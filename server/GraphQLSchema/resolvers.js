import { PubSub } from "graphql-subscriptions";

const messages = [];
// const subscribers = [];
const channel = "channel"
export const pubsub = new PubSub();

const resolvers = {
  Query: {
    getAllMessages: () => messages,
  },
  Mutation: {
    sendMessage: (parent, args) => {
      const { userId, username, content } = args;
      const id = messages.length;
      const newMessage = {
        userId,
        id,
        username,
        content,
      };

      messages.push(newMessage);
      // subscribers.forEach((fn) => fn());
      pubsub.publish(channel, { messages });
      return id;
    },
  },
  Subscription: {
    messages: {
      subscribe: async (parent, args, context) => {
        // subscribers.push(() => pubsub.publish(channel, { messages }));
        setTimeout(() => {
          pubsub.publish(channel, { messages });
        }, 0);

        return pubsub.asyncIterator(channel);
      },
    },
  },
};

export default resolvers;
