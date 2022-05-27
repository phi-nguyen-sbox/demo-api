import { gql } from '@apollo/client'

export const GET_FOOD_ITEMS = gql`
     {
      Food(id:1) {
        id 
        foodName 
      }
    }
  `;