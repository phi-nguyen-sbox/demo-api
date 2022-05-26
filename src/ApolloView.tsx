import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_FOOD_ITEMS } from './apollo-api/queries'

export const ApolloView: React.FC<any> = (props) => {
    
    const { data, error } = useQuery(GET_FOOD_ITEMS)
    console.log(data)
    console.log(error)


    return (
        <div>
            
        </div>
    )
}