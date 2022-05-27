import React from 'react';
import { useQuery } from "@apollo/client"
import { GET_FOOD_ITEMS } from "../apollo-api/queries"
import { FoodItem } from "../models/food-item"

export const DemoGraphqlComponent: React.FC<any> = (props) => {

    const { data, error } = useQuery(GET_FOOD_ITEMS)
    console.log(data)
    console.log(error)

    return (
        <div>
            {(data as FoodItem[]).map((item) => (
                <div key={item.id}>
                    <span >{item.foodName}</span>
                    <br />
                </div>
            ))}
        </div>
    )
}