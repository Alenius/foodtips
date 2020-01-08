import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ListItem from '../components/ListItem';
import ViewTitle from '../components/ViewTitle';
import NextButton from '../components/NextButton';
import { Recipe } from '../constants/foodItems';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import NextButtonWrapper from '../components/NextButtonWrapper';

const SelectorWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: var(--dark-slate);
  height: 100vh;
  width: 100vw;
  padding-top: 2rem;
  padding-bottom: 2rem;
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

const CUISINE_LIST = gql`
  {
    recipes {
      title
      link
      cuisine
      tags
    }
  }
`;

interface Props {
  selectedCuisines: readonly string[];
  selectedTags: readonly string[];
  setSelectedTags(newSelectedTags: string[]): void;
  cuisineFinished: boolean;
  tagsFinished: boolean;
  setTagsFinished(isUserFinished: boolean): void;
  setChosenRecipes(chosenArr: Recipe[]): void;
}

interface FoodItems {
  cuisine: string;
  tags: string[];
}

const TagsSelectorView: React.FC<Props> = ({
  selectedCuisines,
  cuisineFinished,
  selectedTags,
  setSelectedTags,
  tagsFinished,
  setTagsFinished,
  setChosenRecipes
}) => {
  const [tagArray, setTagArray] = useState<Array<string>>([]);
  const [foodItems, setFoodItems] = useState<Array<Recipe>>([]);
  const { loading, error, data } = useQuery(CUISINE_LIST);

  useEffect(() => {
    if (!loading) {
      console.log(data);
      setFoodItems(data.recipes);
    }
  }, [data, loading]);

  useEffect(() => {
    if (cuisineFinished)
      window.scroll({ top: 2 * window.innerHeight, behavior: 'smooth' });
  }, [cuisineFinished]);

  // if user changes tags after pressing button previously
  useEffect(() => {
    if (tagsFinished) {
      setTagsFinished(false);
    }
  }, [selectedTags]);
  useEffect(() => {
    const chosenRecipies = foodItems.filter(recipie =>
      selectedCuisines.some(selected => {
        return recipie.cuisine === selected;
      })
    );
    const newTags: Array<string> = [];
    setChosenRecipes(chosenRecipies);
    chosenRecipies.forEach(it => newTags.push(...it.tags));
    setTagArray(newTags);
  }, [selectedCuisines, setChosenRecipes, foodItems]);

  const isItemSelected = (item: string): boolean => {
    return selectedTags.includes(item);
  };

  const onItemClick = (item: string): void => {
    const selected = isItemSelected(item);
    if (!selected) {
      setSelectedTags([...selectedTags, item]);
    } else {
      const arrayWithoutItem = selectedTags.filter(it => it !== item);
      setSelectedTags(arrayWithoutItem);
    }
  };

  return (
    <SelectorWrapper>
      <ViewTitle>By tags</ViewTitle>
      <InfoText>
        Now, choose more specifically what types of dishes you are interested in
        from the selected cuisines.
      </InfoText>
      <ListWrapper>
        {tagArray.map(it => {
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
      <NextButtonWrapper>
        <NextButton onClick={(): void => setTagsFinished(true)}>
          {`See what's for dinner!`}
        </NextButton>
      </NextButtonWrapper>
    </SelectorWrapper>
  );
};

export default TagsSelectorView;
