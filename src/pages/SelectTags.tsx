import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import ListItem from 'components/ListItem';
import ViewTitle from 'components/ViewTitle';
import NextButton from 'components/NextButton';
import { Recipe } from 'interfaces';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { FoodContext } from 'context/FoodProvider';

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

const RECIPES_WITH_CUISINE = gql`
  query getRecipe($cuisines: [String]!) {
    getRecipe(cuisines: $cuisines) {
      title
      link
      cuisine
      tags
      vegan
      vegetarian
    }
  }
`;

const SelectTags: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [tagArray, setTagArray] = useState<Array<string>>([]);
  const { state: contextState, dispatch } = useContext(FoodContext);
  const { loading, error, data } = useQuery(RECIPES_WITH_CUISINE, {
    variables: { cuisines: contextState.cuisine }
  });
  useEffect(() => {
    if (error) {
      // TODO: handle the error
    }
    if (data) {
      const fetchedTagArr = data.getRecipe.map((it: Recipe) => it.tags).flat();
      setRecipes(data.getRecipe);
      setTagArray(fetchedTagArr);
    }
  }, [data, error]);

  const isItemSelected = (tag: string): boolean => {
    return contextState.tags.includes(tag);
  };

  const onItemClick = (tag: string): void => {
    const selected = isItemSelected(tag);
    if (!selected) {
      dispatch({
        type: 'UPDATE_TAGS',
        payload: [...contextState.tags, tag]
      });
    } else {
      const arrayWithoutItem = contextState.tags.filter(it => it !== tag);
      dispatch({ type: 'UPDATE_TAGS', payload: arrayWithoutItem });
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
      <NextButton
        to='/recipePresentation'
        onClick={() => {
          const filteredRecipeArr = recipes.filter(item =>
            item.tags.some(tag => contextState.tags.includes(tag))
          );
          dispatch({
            type: 'UPDATE_SELECTED_RECIPES',
            payload: filteredRecipeArr
          });
        }}
      >
        See your selected recipes
      </NextButton>
    </SelectorWrapper>
  );
};

export default SelectTags;
