import { config } from '@/config';
import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: config.gqlBase,
    cache: new InMemoryCache(),
    headers: {
        authorization: config.stepzenAppKey
    }
  });