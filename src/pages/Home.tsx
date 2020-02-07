import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import NextButtonWrapper from 'components/NextButtonWrapper';
import NextButton from 'components/NextButton';
import { Link } from 'react-router-dom';
import SelectCuisine from './SelectCuisine';

const PageRoot = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #282c34;
  align-items: center;
`;

const Root = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 10%;
  padding-right: 10%;
`;

const Label = styled.p`
  font-size: 2rem;
  color: #8cd881;
  font-weight: bold;
  font-size: 5rem;
`;

const InfoText = styled.p`
  font-size: 1rem;
  color: #8cd881;
`;

const Presentation = styled.h1`
  color: #8cd881;
`;

export const Home: React.FC = () => {
  return (
    <PageRoot>
      <Root>
        <Label>Foodtips</Label>
        <Presentation>What food are you craving today?</Presentation>
        <InfoText>
          We will help you to choose the dish you are looking for just today.
        </InfoText>
        <InfoText>
          If you want to, you can log in and choose from your saved items, or
          you can continue without logging in and pick from a pool of my
          favourite dishes. I hope you like spicy food!
        </InfoText>
        <NextButton to='/selectCuisine'>Click here to start</NextButton>
      </Root>
    </PageRoot>
  );
};
