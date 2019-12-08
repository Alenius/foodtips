import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PagePresentation from '../views/PagePresentation';
import CuisineSelectorView from '../views/CuisineSelectorView';
import TagsSelectorView from '../views/TagsSelectorView';
import RecipePresentationView from '../views/RecipePresentationView';
import { Recipe } from '../constants/foodItems';

const PageRoot = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #282c34;
  align-items: center;
`;

export const Home: React.FC = () => {
  const [started, setStarted] = useState<boolean>(false);
  const [cuisineFinished, setCuisineFinished] = useState<boolean>(false);
  const [tagsFinished, setTagsFinished] = useState<boolean>(false);
  const [selectedCusines, setSelectedCuisines] = useState<Array<string>>([]);
  const [selectedTags, setSelectedTags] = useState<Array<string>>([]);
  const [chosenRecipes, setChosenRecipes] = useState<Array<Recipe>>([]);

  useEffect(() => {
    if (cuisineFinished === false) {
      setSelectedTags([]);
    }
  }, [cuisineFinished]);

  return (
    <PageRoot>
      <PagePresentation started={started} setStarted={setStarted} />
      {started ? (
        <CuisineSelectorView
          started={started}
          selectedCuisines={selectedCusines}
          setSelectedCuisines={setSelectedCuisines}
          cuisineFinished={cuisineFinished}
          setCuisineFinished={setCuisineFinished}
          setTagsFinished={setTagsFinished}
        />
      ) : null}
      {started && cuisineFinished ? (
        <TagsSelectorView
          selectedCuisines={selectedCusines}
          cuisineFinished={cuisineFinished}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          tagsFinished={tagsFinished}
          setTagsFinished={setTagsFinished}
          setChosenRecipes={setChosenRecipes}
        />
      ) : null}
      {started && cuisineFinished && tagsFinished ? (
        <RecipePresentationView
          chosenRecipes={chosenRecipes}
          setChosenRecipes={setChosenRecipes}
          selectedTags={selectedTags}
          tagsFinished={tagsFinished}
        />
      ) : null}
    </PageRoot>
  );
};
