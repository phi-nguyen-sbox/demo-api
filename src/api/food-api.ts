import { FoodItem } from '../models/food-item';
import { axiosInstance } from './axios-instance';
import { FOOD_URL } from './urls';

export const getFoodItemsApi = async () => {
    const response = await axiosInstance
        .get<FoodItem[]>(FOOD_URL);

    return response.data;
}

export const addFoodItemsApi = async (items: FoodItem[]) => {
    const response = await axiosInstance
        .put<FoodItem[]>(FOOD_URL, items);
    
    const result: FoodItem[] = response.data;
    return result;
}

export const removeFoodItemApi = async (id: number) => {
    const response = await axiosInstance
        .delete<number>(FOOD_URL, { params: { id } });

    return response.data;
}