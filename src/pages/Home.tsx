import React from 'react';
import { NavBar } from '../components/NavBar';
import styled from 'styled-components';

const PageRoot = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  background-color: #282c34;
  align-items: center;
`;

const Presentation = styled.p`
  /* font-family: 'Roboto', 'sans-serif'; */
  font-family: 'Rubik', 'Roboto', 'sans-serif';
  color: #8cd881;
  font-size: 24px;
`;

export const Home: React.FC = () => {
  return (
    <PageRoot>
      <NavBar />
      <Presentation>Vad är du sugen på idag?</Presentation>
      <FoodTypeSelector />
    </PageRoot>
  );
};

const FoodTypeSelector: React.FC = () => {
  return (
    <div>
      <div />
    </div>
  );
};
