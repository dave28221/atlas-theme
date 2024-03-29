import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const link = createHttpLink({
    uri: 'http://crash-course-site.local/graphql',      //make sure to end with graphql
    credentials: 'same-origin'
  });
  
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
  });
  

export default client;