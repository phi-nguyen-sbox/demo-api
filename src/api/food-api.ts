import { FoodItem } from '../models/food-item';
import { axiosInstance } from './axios-instance';
import { FOODS_URL } from './urls';

export const getFoodItemsApi = async () => {
    const response = await axiosInstance
        .get<FoodItem[]>(FOODS_URL);

    return response.data;
}

export const addFoodItemsApi = async (items: FoodItem[]) => {
    const response = await axiosInstance
        .put<FoodItem[]>(FOODS_URL, items);
    
    const result: FoodItem[] = response.data;
    return result;
}

export const removeFoodItemApi = async (id: number) => {
    const response = await axiosInstance
        .delete<number>(FOODS_URL, { params: { id } });

    return response.data;
}