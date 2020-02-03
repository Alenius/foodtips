import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import ListItem from '../components/ListItem';
import ViewTitle from '../components/ViewTitle';
import NextButton from '../components/NextButton';
import NextButtonWrapper from '../components/NextButtonWrapper';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { FoodContext } from '../context/FoodProvider';

const SelectorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #454754;
  height: 100vh;
  width: 100vw;
  padding-top: 2rem;
  padding-bottom: 2rem;
  /* this prevents the padding from chaging the height */
  box-sizing: border-box;
`;

const ListWrapper = styled.div`
  padding-top: 2rem;
  justify-content: center;
  display: grid;
  width: 75%;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
  justify-items: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const InfoText = styled.p`
  color: #8cd881;
`;

const CUISINE_LIST = gql`
  {
    getAllCuisines {
      cuisine
    }
  }
`;

interface Props {
  started: boolean;
  cuisineFinished: boolean;
  setCuisineFinished(hasDecidedCuisines: boolean): void;
}

const CuisineSelectorView: React.FC<Props> = ({
  started,
  cuisineFinished,
  setCuisineFinished
}) => {
  const { loading, error, data } = useQuery(CUISINE_LIST);
  const [foodItems, setFoodItems] = useState<string[]>([]);
  const { state: contextState, dispatch } = useContext(FoodContext);

  useEffect(() => {
    if (error) {
      // TODO: handle error
    }
    if (!loading) {
      // TODO: add loading  animation
    }

    if (data) {
      const listOfCuisines = data.getAllCuisines.map(
        (it: { cuisine: string; __typename: string }) => it.cuisine
      );
      setFoodItems(listOfCuisines);
    }
  }, [data, loading, error]);

  useEffect(() => {
    if (started) window.scroll({ top: window.innerHeight, behavior: 'smooth' });
  }, [started]);

  useEffect(() => {
    if (cuisineFinished) {
      setCuisineFinished(false);
    }
  }, [contextState.cuisine]);

  const isItemSelected = (item: string): boolean => {
    return contextState.cuisine.includes(item);
  };

  const onItemClick = (item: string): void => {
    const selected = isItemSelected(item);
    const currentCuisines = contextState.cuisine;
    if (!selected) {
      dispatch({ type: 'UPDATE_CUISINE', payload: [...currentCuisines, item] });
    } else {
      const arrayWithoutItem = currentCuisines.filter(it => it !== item);
      dispatch({ type: 'UPDATE_CUISINE', payload: arrayWithoutItem });
    }
  };

  return (
    <SelectorWrapper>
      <ContentWrapper>
        <ViewTitle>By cuisine</ViewTitle>
        <InfoText>
          Start by choosing what cuisine that interests you today
        </InfoText>
        <ListWrapper>
          {foodItems.map(it => {
            const selected = isItemSelected(it);
            return (
              <ListItem
                selected={selected}
                onClick={(): void => onItemClick(it)}
                item={it}
                key={it}
              />
            );
          })}
        </ListWrapper>
      </ContentWrapper>
      <NextButtonWrapper>
        <NextButton
          disabled={contextState.cuisine.length === 0}
          onClick={(): void => {
            setCuisineFinished(true);
          }}
        >
          See what you should make today!
        </NextButton>
      </NextButtonWrapper>
    </SelectorWrapper>
  );
};

export default CuisineSelectorView;
