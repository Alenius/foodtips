import React from 'react';
import './App.css';
import { Home } from './pages/Home';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { FoodProvider } from './context/FoodProvider';

const client = new ApolloClient({
  uri:
    window.location.hostname === 'localhost'
      ? 'http://localhost:4000'
      : 'https://foodtips-server.herokuapp.com/graphql'
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <FoodProvider>
        <Home />
      </FoodProvider>
    </ApolloProvider>
  );
};

export default App;
