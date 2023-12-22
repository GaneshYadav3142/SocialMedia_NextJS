import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Cookies from 'js-cookie';

const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql',
  });

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
     const token = Cookies.get('token');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
         authorization: token ? `${token}` : "",
        // authorization :`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTgwMzgyMmIxZTA0YTFhYjk1OTVhMjIiLCJ1c2VybmFtZSI6IkdhbmVzaCBZYWRhdiIsImlhdCI6MTcwMzIyNTM4MSwiZXhwIjoxNzAzMjY4NTgxfQ.psM7MmSo3tVlSmJtISBBDQjlDAXOe4XIUmvZ580HI6w`
      }
    }
  });

const client = new ApolloClient({
    link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


export default client;
