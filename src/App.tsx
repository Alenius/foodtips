import React from 'react';
import './App.css';
import { Home } from './pages/Home';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri:
    window.location.hostname === 'localhost'
      ? 'http://localhost:4000'
      : 'http://foodtips-server.herokuapp.com/graphql'
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
};

export default App;
