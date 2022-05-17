import { FoodItem } from "../models/food-item"
import { makeAutoObservable} from "mobx"
import { addFoodItemsApi, getFoodItemsApi, removeFoodItemApi } from "../api/food-api"

export class FoodStore {
    foodItems: FoodItem[] = []

    constructor() {
        makeAutoObservable(this)
    }

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

    addFoodItemsAction(items: FoodItem[]) {
        addFoodItemsApi(items)
            .then(data => this.foodItems.concat(data))
    }

    removeFoodItemAction(id: number) {
        removeFoodItemApi(id)
            .then(data => {
                var removedIndex = this.foodItems.findIndex(x => x.id === data)
                this.foodItems.splice(removedIndex, 1)
            })
    }
}