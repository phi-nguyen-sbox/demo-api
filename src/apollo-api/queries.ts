import { gql } from '@apollo/client'

export const GET_FOOD_ITEMS = gql`
    query getFoodItems {
      food {
        id 
        foodName 
      }
    }
  `;