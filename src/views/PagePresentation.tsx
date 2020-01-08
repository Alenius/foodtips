import React from 'react';
import styled from 'styled-components';
import NextButton from '../components/NextButton';
import NextButtonWrapper from '../components/NextButtonWrapper';

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

const StyledNextButton = styled(NextButton)`
  background-color: green;
  color: red;
`;

interface PagePresentationProp {
  started: boolean;
  setStarted(started: boolean): void;
}

const PagePresentation: React.FC<PagePresentationProp> = ({
  started,
  setStarted
}) => {
  const handleClick = (): void => {
    if (!started) {
      setStarted(true);
    }
    window.scroll({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <Root>
      <Label>Foodtips</Label>
      <Presentation>What food are you craving today?</Presentation>
      <InfoText>
        We will help you to choose the dish you are looking for just today.
      </InfoText>
      <InfoText>
        If you want to, you can log in and choose from your saved items, or you
        coloror can continue without logging in and pick from a pool of my
        favourite dishes. I hope you like spicy food!
      </InfoText>
      <NextButtonWrapper>
        <StyledNextButton onClick={handleClick}>
          Click here to start
        </StyledNextButton>
      </NextButtonWrapper>
    </Root>
  );
};

export default PagePresentation;
