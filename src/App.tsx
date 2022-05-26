import { ApolloProvider } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { client } from './apollo-api/apollo-client';
import './App.css';
import { DemoAxiosComponent } from './components/DemoAxiosComponent';
import { DemoGraphqlComponent } from './components/DemoGraphqlComponent';
import { FoodStore } from './stores/food';



export const App: React.FC<any> = (props) => {

  const foodStore = new FoodStore()

  return  (
    <div className="App">
      <DemoAxiosComponent foodStore={foodStore} />
      {/* <ApolloProvider client={client}>
        <DemoGraphqlComponent />
      </ApolloProvider> */}
    </div>
  );
}
