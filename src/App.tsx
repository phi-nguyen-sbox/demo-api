import React from 'react';
import './App.css';
import { FoodStore } from './stores/food';
import { observer } from 'mobx-react-lite';
import DemoAxiosComponent from './components/DemoAxiosComponent';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo-api/apollo-client';
import { DemoGraphqlComponent } from './components/DemoGraphqlComponent';


const App: React.FC<any> = (props) => {

  const foodStore = new FoodStore()
  
  return (
    <div className="App">
      <DemoAxiosComponent foodStore={foodStore} />
      <ApolloProvider client={client}>
        <DemoGraphqlComponent />
      </ApolloProvider>
    </div>
  );
}

export default observer(App)