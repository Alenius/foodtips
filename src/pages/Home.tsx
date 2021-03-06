import React from 'react';
import styled from 'styled-components';
import NextButton from 'components/NextButton';
import theme from 'theme';
import PageContentWrapper from 'components/PageContentWrapper';

const InfoText = styled.p`
  font-size: ${theme.em.m};
  color: ${theme.color.lightgreen};
  width: 60%;

  @media only screen and (max-width: ${theme.screenSize.medium}) {
    width: 90%;
  }
`;

const Presentation = styled.h1`
  color: ${theme.color.lightgreen};
`;

export const Home: React.FC = () => {
  return (
    <PageContentWrapper>
      <Presentation>What food are you craving today?</Presentation>
      <InfoText>
        We will help you to choose the dish you are looking for just today.
      </InfoText>
      <InfoText>
        If you want to, you can log in and choose from your saved items, or you
        can continue without logging in and pick from a pool of my favourite
        dishes. I hope you like spicy food!
      </InfoText>
      <NextButton to='/selectCuisine'>Click here to start</NextButton>
    </PageContentWrapper>
  );
};
