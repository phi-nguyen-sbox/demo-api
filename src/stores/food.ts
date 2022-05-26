import { FoodItem } from "../models/food-item"
import { makeAutoObservable} from "mobx"
import { addFoodItemsApi, getFoodItemsApi, removeFoodItemApi } from "../api/food-api"

export class FoodStore {
    
    constructor() {
        makeAutoObservable(this)
    }
    
    foodItems: FoodItem[] = []

    private setFoodItems = (value: FoodItem[]) => {
        this.foodItems = value
    }

    public getFoodItems = () => this.foodItems

    getFoodItemsAction = () => {
        getFoodItemsApi()
            .then(data => this.setFoodItems(data))
            .catch(err => {
                this.setFoodItems([])
                console.log(err)
            })
    }
}