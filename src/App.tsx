import React from 'react';
import './App.css';
import { Home } from './pages/Home';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { FoodProvider } from './context/FoodProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SelectCuisine from 'pages/SelectCuisine';
import SelectTags from 'pages/SelectTags';
import RecipePresentation from 'pages/RecipePresentation';
import { NavBar } from 'components/NavBar';
import styled from 'styled-components';
import Footer from 'components/Footer';
import theme from 'theme';

const AppWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  min-height: 100vh;
  display: flex;
`;

const client = new ApolloClient({
  uri:
    window.location.hostname === 'localhost'
      ? 'http://localhost:4000'
      : 'https://foodtips-server.herokuapp.com/graphql',
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <FoodProvider>
        <Router>
          {/* Add the div below for making the page fill entire height and width */}
          <AppWrapper>
            <NavBar />
            <ContentWrapper>
              <Switch>
                <Route
                  path='/recipePresentation'
                  component={RecipePresentation}
                />
                <Route path='/selectTags' component={SelectTags} />
                <Route path='/selectCuisine' component={SelectCuisine} />
                <Route path='/' component={Home} />
              </Switch>
            </ContentWrapper>
            <Footer />
          </AppWrapper>
        </Router>
      </FoodProvider>
    </ApolloProvider>
  );
};

export default App;
