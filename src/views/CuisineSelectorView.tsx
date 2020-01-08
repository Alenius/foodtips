import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ListItem from '../components/ListItem';
import ViewTitle from '../components/ViewTitle';
import NextButton from '../components/NextButton';
import NextButtonWrapper from '../components/NextButtonWrapper';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

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
    cuisines {
      cuisine
    }
  }
`;

interface Props {
  started: boolean;
  selectedCuisines: readonly string[];
  cuisineFinished: boolean;
  setSelectedCuisines(newSelectedCuisines: string[]): void;
  setCuisineFinished(hasDecidedCuisines: boolean): void;
  setTagsFinished(hasDecidedCuisines: boolean): void;
}

interface FoodItems {
  cuisine: string;
  tags: string[];
}

const CuisineSelectorView: React.FC<Props> = ({
  started,
  selectedCuisines,
  setSelectedCuisines,
  cuisineFinished,
  setCuisineFinished,
  setTagsFinished
}) => {
  const { loading, error, data } = useQuery(CUISINE_LIST);
  const [foodItems, setFoodItems] = useState<Array<FoodItems>>([]);

  useEffect(() => {
    if (!loading) {
      console.log(data);
      setFoodItems(data.cuisines);
    }
  }, [data, loading]);

  useEffect(() => {
    if (started) window.scroll({ top: window.innerHeight, behavior: 'smooth' });
  }, [started]);

  useEffect(() => {
    if (cuisineFinished) {
      setCuisineFinished(false);
    }
  }, [selectedCuisines]);

  const isItemSelected = (item: string): boolean => {
    return selectedCuisines.includes(item);
  };

  const onItemClick = (item: string): void => {
    const selected = isItemSelected(item);
    if (!selected) {
      setSelectedCuisines([...selectedCuisines, item]);
    } else {
      const arrayWithoutItem = selectedCuisines.filter(it => it !== item);
      setSelectedCuisines(arrayWithoutItem);
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
            const selected = isItemSelected(it.cuisine);
            return (
              <ListItem
                selected={selected}
                onClick={(): void => onItemClick(it.cuisine)}
                item={it.cuisine}
                key={it.cuisine}
              />
            );
          })}
        </ListWrapper>
      </ContentWrapper>
      <NextButtonWrapper>
        <NextButton
          disabled={selectedCuisines.length === 0}
          onClick={(): void => {
            setCuisineFinished(true);
            setTagsFinished(false);
          }}
        >
          See what you should make today!
        </NextButton>
      </NextButtonWrapper>
    </SelectorWrapper>
  );
};

export default CuisineSelectorView;
