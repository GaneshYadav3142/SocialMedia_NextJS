import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql',
  });

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    // const token = localStorage.getItem('token');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        // authorization: token ? `Bearer ${token}` : "",
        authorization :`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTgwMzgyMmIxZTA0YTFhYjk1OTVhMjIiLCJ1c2VybmFtZSI6IkdhbmVzaCBZYWRhdiIsImlhdCI6MTcwMzE2MjExNiwiZXhwIjoxNzAzMjA1MzE2fQ.J_Bf0MjmoQU1RUkQbZTaoo6OsvraHDtrZ8A__kJdzl8`
      }
    }
  });

const client = new ApolloClient({
    link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


export default client;
