import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { FoodItem } from "../models/food-item";
import { FoodStore } from "../stores/food";

type Props = {
  foodStore: FoodStore;
};

export const DemoAxiosComponent: React.FC<Props> = observer((props) => {
  const { foodStore } = props;

  useEffect(() => {
    foodStore.getFoodItemsAction1();
  }, []);

  return (
    <div>
      {foodStore.foodItems.map((item) => (
        <div key={item.id}>
          <span>{item.foodName}</span>
          <br />
        </div>
      ))}
    </div>
  );
});
