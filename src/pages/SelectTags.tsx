import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import ListItem from 'components/ListItem';
import ViewTitle from 'components/ViewTitle';
import NextButton from 'components/NextButton';
import { Recipe } from 'interfaces';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { FoodContext } from 'context/FoodProvider';
import PageContentWrapper from 'components/PageContentWrapper';
import theme from 'theme';

import { ListWrapper } from 'components/ListWrapper';

const InfoText = styled.p`
  color: ${theme.color.lightgreen};
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
    variables: { cuisines: contextState.cuisine },
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
        payload: [...contextState.tags, tag],
      });
    } else {
      const arrayWithoutItem = contextState.tags.filter(it => it !== tag);
      dispatch({ type: 'UPDATE_TAGS', payload: arrayWithoutItem });
    }
  };

  return (
    <PageContentWrapper>
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
            payload: filteredRecipeArr,
          });
        }}
        disabled={contextState.tags.length === 0}
      >
        See your selected recipes
      </NextButton>
    </PageContentWrapper>
  );
};

export default SelectTags;
