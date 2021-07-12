import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";


const link = new HttpLink({ 
    uri: 'https://harura-fliper-test.herokuapp.com/v1/graphql',
    headers: {
      'content-type': 'application/json',
      'x-hasura-admin-secret': 'fliperdevtest2020'
    }
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})

export default client;