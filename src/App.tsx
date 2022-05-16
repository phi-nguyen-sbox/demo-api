import React from 'react';
import './App.css';
import { useQuery } from '@apollo/client';
import { GET_FOOD_ITEMS } from './apollo-api/queries';
import { FoodStore } from './stores/food';
import { observer } from 'mobx-react-lite';


const App: React.FC<any> = (foodStore: FoodStore) => {

  const { data, error } = useQuery(GET_FOOD_ITEMS)
  console.log(data)
  console.log(error)
  
  return (
    <div className="App">
      {foodStore.getFoodItems().map((item) => (
        <div>
          <span>{item.foodName}</span>
          <br />
        </div>
      ))}
    </div>
  );
}

export default observer(App)