import React from 'react';
import { useQuery } from "@apollo/client"
import { GET_FOOD_ITEMS } from "../apollo-api/queries"
import { FoodItem } from "../models/food-item"
import { useState } from 'react';
import { useEffect } from 'react';

export const DemoGraphqlComponent: React.FC<any> = (props) => {

    const { data, error, loading } = useQuery(GET_FOOD_ITEMS)

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const { Food } = data

    return (
        <div>
            <span>GraphQL</span>
                    <br />
                    <span >{Food.foodName}</span>
        </div>
    )
}