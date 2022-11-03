import { PubSub } from "graphql-subscriptions";

const messages = [];
const subscribers = [];

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
      subscribers.forEach((fn) => fn());
      return id;
    },
  },
  Subscription: {
    messages: {
      subscribe: async (parent, args, context) => {
        const channel = Math.random().toString(36).slice(2, 15);
        subscribers.push(() => pubsub.publish(channel, { messages }));

        setTimeout(() => {
          pubsub.publish(channel, { messages });
        }, 0);

        return pubsub.asyncIterator(channel);
      },
    },
  },
};

export default resolvers;
