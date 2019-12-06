import React, { useState, useCallback } from 'react';
import { NavBar } from '../components/NavBar';
import styled from 'styled-components';
import ListItem from '../components/ListItem';
import NextButton from '../components/NextButton';
import { useTransition, animated } from 'react-spring';

import cuisineList from '../constants/cusines';

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

const RootDiv = styled.div`
  width: 100%;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const SelectorWrapper = styled(animated.div)`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #454754;
  padding: 100px;
  width: 100%;
`;
const FoodHeader = styled.h2`
  color: #8cd881;
  display: flex;
`;
const ListWrapper = styled(animated.div)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* width: 800px; */
`;

const FoodTypeSelector: React.FC = () => {
  const [selectedCusines, setSelectedCusines] = useState<Array<string>>([]);
  const [page, setPage] = useState<number>(1);
  const onClick = useCallback(() => setPage(page => (page + 1) % 3), []);
  const transitions = useTransition(page, p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' }
  });

  const isItemSelected = (item: string): boolean => {
    return selectedCusines.includes(item);
  };

  const onItemClick = (item: string): void => {
    const selected = isItemSelected(item);
    if (!selected) {
      setSelectedCusines([...selectedCusines, item]);
    } else {
      const arrayWithoutItem = selectedCusines.filter(it => it !== item);
      setSelectedCusines(arrayWithoutItem);
    }
  };

  return (
    <RootDiv>
      <SelectorWrapper>
        {page === 1 && (
          <animated.div>
            <FoodHeader>By cusine</FoodHeader>
            <ListWrapper>
              {cuisineList.map(it => {
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
          </animated.div>
        )}
      </SelectorWrapper>
      <NextButton
        onClick={() => {
          setPage(page + 1);
        }}
      />
    </RootDiv>
  );
};
