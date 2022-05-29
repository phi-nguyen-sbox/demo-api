import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { FoodItem } from "../models/food-item";
import { FoodStore } from "../stores/food";

type Props = {
  foodStore: FoodStore;
};

export const DemoAxiosComponent: React.FC<Props> = observer((props) => {
  const { foodStore } = props;

  const [reload, setReload] = useState(false);

  useEffect(() => {
    foodStore.getFoodItemsAction1();
  }, [foodStore]);

  const onClick = () => {
    setReload(!reload);
  };

  return (
    <div>
      {foodStore.foodItems.map((item) => (
        <div key={item.id}>
          <span>{item.foodName}</span>
          <br />
        </div>
      ))}
      <button type="button" name="Reload" onClick={onClick}>
        Reload
      </button>
    </div>
  );
});
