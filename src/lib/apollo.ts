import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4r18rfn0gp501z3bn294jdq/master',
  cache: new InMemoryCache()
})