import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { FoodItem } from "../models/food-item";
import { FoodStore } from "../stores/food";

type Props = {
  foodStore: FoodStore
}

const DemoAxiosComponent:React.FC<Props> = (props) => {

    const { foodStore } = props

    const [reload, setReload] = useState(false)

    useEffect(() => {
        foodStore.getFoodItemsAction()
    
        console.log(foodStore.foodItems)
      }, [])
      

    const onClick = () => {
        setReload(!reload)
    }
      
    return (
        <div>
            {foodStore.foodItems.map((item) => (
            <div key={item.id}>
                <span >{item.foodName}</span>
            <br />
        </div>
      ))}
      <button type='button' name='Reload' onClick={onClick}>Reload</button>
        </div>
    )
}

export default observer(DemoAxiosComponent)