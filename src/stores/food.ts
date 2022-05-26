import { FoodItem } from "../models/food-item"
import { makeAutoObservable} from "mobx"
import { getFoodItemsApi} from "../api/food-api"

export class FoodStore {
    
    constructor() {
        makeAutoObservable(this)
    }
    
    foodItems: FoodItem[] = []

    private setFoodItems = (value: FoodItem[]) => {
        this.foodItems = value
    }

    getFoodItemsAction() {
        getFoodItemsApi()
            .then(data => this.setFoodItems(data))
            .catch(err => {
                this.setFoodItems([
                    {id: 1, foodName: 'Ga chien nuoc mam'},
                    {id: 2, foodName: 'Ga kho gung'}
                ])
                console.log(err)
            })
    }
}