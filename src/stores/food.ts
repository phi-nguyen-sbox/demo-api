import { FoodItem } from "../models/food-item";
import { makeAutoObservable } from "mobx";
import { getFoodItemsApi } from "../api/food-api";

export class FoodStore {
  constructor() {
    makeAutoObservable(this);
  }

  foodItems: FoodItem[] = [];

  private setFoodItems = (value: FoodItem[]) => {
    this.foodItems = value;
  };

  getFoodItemsAction() {
    getFoodItemsApi()
      .then((data) => this.setFoodItems(data))
      .catch((err) => {
        this.setFoodItems([]);
        console.log(err);
      });
  }

  async getFoodItemsAction1() {
    console.log("aaaaaaaaaaaaaa");
    const data = await getFoodItemsApi();
    this.setFoodItems(data);
  }
}
