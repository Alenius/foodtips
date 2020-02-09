import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import ListItem from 'components/ListItem';
import ViewTitle from 'components/ViewTitle';
import NextButton from 'components/NextButton';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { FoodContext } from 'context/FoodProvider';
import AnimationWrapper from 'components/AnimationWrapper';
import PageContentWrapper from 'components/PageContentWrapper';

const ListWrapper = styled.div`
  padding-top: 2rem;
  justify-content: center;
  display: grid;
  width: 75%;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
  justify-items: center;
`;

const InfoText = styled.p`
  color: #8cd881;
`;

const CUISINE_LIST = gql`
  {
    getAllCuisines
  }
`;

interface Props {
  started: boolean;
}

const SelectCuisine: React.FC<Props> = ({ started }) => {
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
      setFoodItems(data.getAllCuisines);
    }
  }, [data, loading, error]);

  useEffect(() => {
    if (started) window.scroll({ top: window.innerHeight, behavior: 'smooth' });
  }, [started]);

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
    <AnimationWrapper>
      <PageContentWrapper>
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
        <NextButton to='/selectTags'>
          See what you should make today!
        </NextButton>
      </PageContentWrapper>
    </AnimationWrapper>
  );
};

export default SelectCuisine;
