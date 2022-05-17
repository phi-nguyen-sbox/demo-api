import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { FoodItem } from "../models/food-item";

const DemoAxiosComponent:React.FC<any> = (props) => {

    const {foodStore} = props.foodStore

    useEffect(() => {
        foodStore.getFoodItemsAction()
    
        console.log(foodStore.foodItems)
      }, [])
      
    return (
        <div>
            {foodStore.foodItems.map((item:FoodItem) => (
                <span>{item.foodName}</span>
            ))}
        </div>
    )
}

export default observer(DemoAxiosComponent)