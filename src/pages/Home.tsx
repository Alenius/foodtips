import React, { useState } from 'react';
import { NavBar } from '../components/NavBar';
import styled from 'styled-components';
import ListItem from '../components/ListItem';

const PageRoot = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  background-color: #282c34;
  align-items: center;
`;

const Presentation = styled.h1`
  /* font-family: 'Roboto', 'sans-serif'; */
  font-family: 'Rubik', 'Roboto', 'sans-serif';
  color: #8cd881;
`;

export const Home: React.FC = () => {
  return (
    <PageRoot>
      <NavBar />
      <Presentation>What kind of food are you craving?</Presentation>
      <FoodTypeSelector />
    </PageRoot>
  );
};

const cusineList = ['Thai', 'Mexican', 'Swedish', 'African'];

const SelectorWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #454754;
  padding: 100px;

  width: 100%;
`;
const FoodHeader = styled.h2`
  color: #8cd881;
`;
const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 800px;
`;

const FoodTypeSelector: React.FC = () => {
  const [selectedCusines, setSelectedCusines] = useState<Array<string>>([]);

  const isItemSelected = (item: string): boolean => {
    return selectedCusines.includes(item);
  };

  const onItemClick = (item: string): void => {
    const selected = isItemSelected(item);
    console.log(selected);
    if (!selected) {
      setSelectedCusines([...selectedCusines, item]);
    } else {
      console.log('hello');
      const arrayWithoutItem = selectedCusines.filter(it => it !== item);
      setSelectedCusines(arrayWithoutItem);
    }
  };

  return (
    <SelectorWrapper>
      <FoodHeader>By cusine</FoodHeader>
      <ListWrapper>
        {cusineList.map(it => {
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
    </SelectorWrapper>
  );
};
