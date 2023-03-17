import {
  InMemoryCache,
  ApolloClient,
  from,
  HttpLink,
  split,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import localStorageService from '../utils/localStorageService';

const errorLink = onError(({ graphqlErrors, networkError }: any) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message }: any) => {
      console.log(`graphqlErrors: ${message}`);
      return message;
    });
  }

  if (networkError) console.log(`[Network error]: ${networkError}`);
});
const link = from([
  errorLink,
  // eslint-disable-next-line no-undef
  new HttpLink({ uri: `${process.env.REACT_APP_BACKEND}` }),
  // new HttpLink({ uri: 'http://localhost:4000/' }),
]);

// const wsLink = new WebSocketLink({
//   uri: `${process.env.REACT_APP_SUBCRIPTIONS}`,
//   options: {
//     reconnect: true,
//     reconnectionAttempts: 50,
//     lazy: true,
//     timeout: 50000,
//   },
// });

const wsLink = new GraphQLWsLink(
  createClient({
    url: `${process.env.REACT_APP_SUBCRIPTIONS}`,
  }),
);
// const wsLink = new GraphQLWsLink(
//   createClient({
//     url: `${process.env.REACT_APP_BAIRU_GRAPHQL_SUBSCRIPTIONS}`,
//     options: {
//       reconnect: true,
//       reconnectionAttempts: 50,
//       lazy: true,
//       timeout: 50000,
//     },
//   }),
// );

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  link,
);

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorageService.getItem('jwt_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export const Client = new ApolloClient({
  link: authLink.concat(splitLink),
  cache: new InMemoryCache(),
});
