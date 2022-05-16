import { ApolloClient, InMemoryCache } from '@apollo/client';


const uri = 'https://sbox-food-order.com/graphql'


export const client = new ApolloClient({
    uri,
    cache: new InMemoryCache()
})