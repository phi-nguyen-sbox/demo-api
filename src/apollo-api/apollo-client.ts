import { ApolloClient, InMemoryCache } from '@apollo/client';


const uri = 'http://localhost:3000/foods'


export const client = new ApolloClient({
    uri,
    cache: new InMemoryCache()
})