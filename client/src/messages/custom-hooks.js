import { useMutation, useQuery, useSubscription } from "@apollo/client";
import { SEND_MESSAGE } from "./mutations";
import { ALL_MESSAGES } from "./queries";
import { MESSAGES } from "./subscriptions";

export const useMessages = () => {
  const result = useQuery(ALL_MESSAGES);
  return result;
};

export const useSendMessage = () => {
  const [sendMessage, { error }] = useMutation(SEND_MESSAGE, {
    refetchQueries: [{ query: ALL_MESSAGES }],
    onError: (error) => error.graphQLErrors[0].message,
  });
  return { sendMessage, error };
};

export const useGetRealtimeMessages = () => {
  const result = useSubscription(MESSAGES, {
    onError: (error) => error.graphQLErrors[0].message,
  });
  return result
};
