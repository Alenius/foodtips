import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ListItem from '../components/ListItem';
import ViewTitle from '../components/ViewTitle';
import NextButton from '../components/NextButton';
import { foodItemsArr } from '../constants/foodItems';
const SelectorWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
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

const InfoText = styled.p`
  color: #8cd881;
`;

interface Props {
  started: boolean;
  selectedCuisines: readonly string[];
  setSelectedCuisines(newSelectedCuisines: string[]): void;
  setCuisineFinished(hasDecidedCuisines: boolean): void;
  setTagsFinished(hasDecidedCuisines: boolean): void;
}

const CuisineSelectorView: React.FC<Props> = ({
  started,
  selectedCuisines,
  setSelectedCuisines,
  setCuisineFinished,
  setTagsFinished
}) => {
  useEffect(() => {
    if (started) window.scroll({ top: window.innerHeight, behavior: 'smooth' });
  }, [started]);

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
      <ViewTitle>By cuisine</ViewTitle>
      <InfoText>
        Here you can choose what cuisine you are mostly craving today!
      </InfoText>
      <ListWrapper>
        {foodItemsArr.map(it => {
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
      <NextButton
        onClick={(): void => {
          setCuisineFinished(true);
          setTagsFinished(false);
        }}
      >
        See what you should make today!
      </NextButton>
    </SelectorWrapper>
  );
};

export default CuisineSelectorView;
