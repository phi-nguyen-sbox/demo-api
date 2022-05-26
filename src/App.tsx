import React, { useEffect, useState } from 'react';
import './App.css';
import { FoodStore } from './stores/food';

type Props = {
  foodStore: FoodStore
}

export const App: React.FC<Props> = ({foodStore}) => {

  const [reload, setReload] = useState(false)

  useEffect(() => {

    foodStore.getFoodItemsAction()
  }, [foodStore])
  
  const onClick = () => {
    setReload(!reload)
  }

  return  (
    <div className="App">
      {foodStore.getFoodItems().map((item) => (
        <div key={item.id}>
          <span >{item.foodName}</span>
          <br />
        </div>
      ))}
      <button type='button' name='Reload' onClick={onClick}>Reload</button>
      {/* <ApolloProvider client={client}>
      </ApolloProvider> */}
        {/* <ApolloView /> */}
    </div>
  );
}
