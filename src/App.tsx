import React from 'react';
import './App.css';
import { Home } from './pages/Home';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { FoodProvider } from './context/FoodProvider';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SelectCuisine from 'pages/SelectCuisine';
import SelectTags from 'pages/SelectTags';
import RecipePresentation from 'pages/RecipePresentation';

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
        <Router>
          <Switch>
            <Route path='/recipePresentation' component={RecipePresentation} />
            <Route path='/selectTags' component={SelectTags} />
            <Route path='/selectCuisine' component={SelectCuisine} />
            <Route path='/' component={Home} />
          </Switch>
        </Router>
      </FoodProvider>
    </ApolloProvider>
  );
};

export default App;
