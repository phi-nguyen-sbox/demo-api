import React, { useEffect, useState } from 'react';
import './App.css';
import DemoAxiosComponent from './components/DemoAxiosComponent';
import { FoodStore } from './stores/food';



export const App: React.FC<any> = (props) => {

  const foodStore = new FoodStore()

  return  (
    <div className="App">
      
      {/* <ApolloProvider client={client}>
      </ApolloProvider> */}
        {/* <ApolloView /> */}
      <DemoAxiosComponent foodStore={foodStore} />
      {/* <ApolloProvider client={client}>
        <DemoGraphqlComponent />
      </ApolloProvider> */}
    </div>
  );
}
